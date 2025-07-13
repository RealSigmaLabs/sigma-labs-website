'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletModalButton } from '@solana/wallet-adapter-react-ui'
import { Plus, MessageCircle, Heart, Share, User, Clock, Hash, Loader2, AlertCircle, CheckCircle, X } from 'lucide-react'

interface Post {
  id: string
  title: string
  content: string
  author: {
    walletAddress: string
    name?: string
    handle?: string
  }
  createdAt: string
  comments: Comment[]
  tags?: string
  likes: number
}

interface Comment {
  id: string
  content: string
  author: {
    walletAddress: string
    name?: string
    handle?: string
  }
  createdAt: string
  likes: number
}

export default function CommunityPage() {
  const { publicKey } = useWallet()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [creatingPost, setCreatingPost] = useState(false)
  const [showCreatePost, setShowCreatePost] = useState(false)
  const [newPost, setNewPost] = useState({ title: '', content: '', tags: '' })
  const [postTags, setPostTags] = useState<string[]>([])
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState('')
  const [taggedUsers, setTaggedUsers] = useState<string[]>([])
  const [commenting, setCommenting] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Like state for posts and comments
  const [postLikes, setPostLikes] = useState<{ [postId: string]: number }>({})
  const [commentLikes, setCommentLikes] = useState<{ [commentId: string]: number }>({})

  // Fetch posts from API
  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch('/api/community/posts')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      } else {
        setError('Failed to fetch posts')
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const shortenAddress = (address: string) => {
    if (address.length <= 10) return address
    return address.slice(0, 6) + '...' + address.slice(-4)
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  const handleCreatePost = async () => {
    if (!publicKey || !newPost.title || !newPost.content) return

    try {
      setCreatingPost(true)
      setError(null)
      const response = await fetch('/api/community/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newPost.title,
          content: newPost.content,
          tags: postTags.join(','),
          walletAddress: publicKey.toString()
        })
      })

      if (response.ok) {
        const newPostData = await response.json()
        setPosts([newPostData, ...posts])
        setNewPost({ title: '', content: '', tags: '' })
        setPostTags([])
        setShowCreatePost(false)
        setSuccess('Post created successfully!')
        setTimeout(() => setSuccess(null), 3000)
      } else {
        setError('Failed to create post')
      }
    } catch (error) {
      console.error('Error creating post:', error)
      setError('Network error. Please try again.')
    } finally {
      setCreatingPost(false)
    }
  }

  const handleReply = async (postId: string) => {
    if (!publicKey || !replyContent) return

    try {
      setCommenting(postId)
      setError(null)
      const response = await fetch('/api/community/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: replyContent,
          postId,
          walletAddress: publicKey.toString(),
          taggedUsers
        })
      })

      if (response.ok) {
        const newComment = await response.json()
        setPosts(posts.map(post => 
          post.id === postId 
            ? { ...post, comments: [newComment, ...post.comments] }
            : post
        ))
        setReplyContent('')
        setTaggedUsers([])
        setReplyingTo(null)
        setSuccess('Comment posted successfully!')
        setTimeout(() => setSuccess(null), 3000)
      } else {
        setError('Failed to create comment')
      }
    } catch (error) {
      console.error('Error creating comment:', error)
      setError('Network error. Please try again.')
    } finally {
      setCommenting(null)
    }
  }

  const extractTags = (content: string) => {
    const tagRegex = /@([A-Za-z0-9]{32,44})/g
    const matches = content.match(tagRegex)
    return matches ? matches.map(tag => tag.slice(1)) : []
  }

  const renderContent = (content: string) => {
    const tagRegex = /@([A-Za-z0-9]{32,44})/g
    const parts = content.split(tagRegex)
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        // This is a wallet address
        return (
          <span key={index} className="text-blue-500 font-mono bg-blue-100 px-1 rounded border border-blue-300">
            @{shortenAddress(part)}
          </span>
        )
      }
      return part
    })
  }

  // Add tag on Enter
  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newPost.tags.trim()) {
      e.preventDefault()
      if (!postTags.includes(newPost.tags.trim())) {
        setPostTags([...postTags, newPost.tags.trim()])
      }
      setNewPost({ ...newPost, tags: '' })
    }
  }
  const removeTag = (tag: string) => {
    setPostTags(postTags.filter(t => t !== tag))
  }

  const handleLikePost = async (postId: string) => {
    try {
      const response = await fetch(`/api/community/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'like' }),
      })

      if (response.ok) {
        const updatedPost = await response.json()
        setPosts(posts.map(post => 
          post.id === postId 
            ? { ...post, likes: updatedPost.likes }
            : post
        ))
        setPostLikes((prev) => ({ ...prev, [postId]: updatedPost.likes }))
      }
    } catch (error) {
      console.error('Error liking post:', error)
    }
  }

  const handleLikeComment = async (commentId: string) => {
    try {
      const response = await fetch(`/api/community/comments/${commentId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'like' }),
      })

      if (response.ok) {
        const updatedComment = await response.json()
        setPosts(posts.map(post => ({
          ...post,
          comments: post.comments.map(comment =>
            comment.id === commentId
              ? { ...comment, likes: updatedComment.likes }
              : comment
          )
        })))
        setCommentLikes((prev) => ({ ...prev, [commentId]: updatedComment.likes }))
      }
    } catch (error) {
      console.error('Error liking comment:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-500 cyberpunk-bg cyberpunk-grid flex items-center justify-center">
        <div className="cyberpunk-text-block p-8 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-black" />
          <p className="text-black cyberpunk-font">LOADING COMMUNITY...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-primary-500 cyberpunk-bg cyberpunk-grid">
      <div className="cyberpunk-3d-elements">
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
      </div>
      
      <div className="cyberpunk-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-5xl font-bold text-black mb-4 cyberpunk-font glitch" data-text="SIGMA COMMUNITY">
            SIGMA COMMUNITY
          </h1>
          <p className="text-lg text-gray-700 cyberpunk-font-thin">
            Connect, share, and build with fellow Sigma Labs members
          </p>
        </motion.div>

        {/* Error/Success Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyberpunk-text-block p-4 mb-6 border-l-4 border-red-500 bg-red-50"
          >
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-red-700">{error}</p>
            </div>
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyberpunk-text-block p-4 mb-6 border-l-4 border-green-500 bg-green-50"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <p className="text-green-700">{success}</p>
            </div>
          </motion.div>
        )}

        {/* Create Post Section */}
        {publicKey ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyberpunk-text-block p-6 mb-8"
          >
            {!showCreatePost ? (
              <button
                onClick={() => setShowCreatePost(true)}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition-colors cyberpunk-font"
              >
                <Plus size={20} />
                CREATE POST
              </button>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Post title..."
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="w-full p-3 border-2 border-black bg-white text-black placeholder-gray-500 cyberpunk-font"
                />
                <textarea
                  placeholder="What's on your mind? Use @walletAddress to tag users..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  rows={4}
                  className="w-full p-3 border-2 border-black bg-white text-black placeholder-gray-500 resize-none cyberpunk-font"
                />
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {postTags.map((tag) => (
                      <span key={tag} className="bg-yellow-300 text-black px-2 py-1 rounded flex items-center gap-1">
                        <Hash size={14} />{tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1 text-black hover:text-red-600"><X size={12} /></button>
                      </span>
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder="Add a tag and press Enter..."
                    value={newPost.tags}
                    onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                    onKeyDown={handleTagInputKeyDown}
                    className="w-full p-3 border-2 border-black bg-white text-black placeholder-gray-500 cyberpunk-font"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCreatePost}
                    disabled={creatingPost}
                    className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors disabled:opacity-50 cyberpunk-font"
                  >
                    {creatingPost && <Loader2 size={16} className="animate-spin" />}
                    {creatingPost ? 'POSTING...' : 'POST'}
                  </button>
                  <button
                    onClick={() => setShowCreatePost(false)}
                    disabled={creatingPost}
                    className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors disabled:opacity-50 cyberpunk-font"
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyberpunk-text-block p-6 mb-8 text-center"
          >
            <p className="text-lg mb-4 cyberpunk-font">Connect your wallet to join the conversation</p>
            <WalletModalButton className="bg-black text-white px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition-colors cyberpunk-font" />
          </motion.div>
        )}

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="cyberpunk-text-block p-8 text-center"
            >
              <p className="text-lg text-gray-700 mb-4 cyberpunk-font">No posts yet</p>
              <p className="text-gray-600 cyberpunk-font-thin">Be the first to start a conversation!</p>
            </motion.div>
          ) : (
            posts.filter(post => post && post.id).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyberpunk-text-block p-6 hover:shadow-lg transition-shadow"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                    <User size={20} className="text-black" />
                  </div>
                  <div>
                    <div className="font-semibold text-black cyberpunk-font">
                      {post.author.name || post.author.handle || shortenAddress(post.author.walletAddress)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={14} />
                      {formatTimeAgo(post.createdAt)}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <h3 className="text-xl font-bold text-black mb-3 cyberpunk-font">{post.title}</h3>
                <p className="text-gray-800 mb-4 leading-relaxed cyberpunk-font-thin">
                  {renderContent(post.content)}
                </p>

                {/* Post Actions */}
                <div className="flex items-center gap-6 mb-4">
                  <button onClick={() => handleLikePost(post.id)} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cyberpunk-font">
                    <Heart size={16} />
                    {post.likes || 0}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cyberpunk-font">
                    <MessageCircle size={16} />
                    {post.comments?.length || 0}
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors cyberpunk-font">
                    <Share size={16} />
                    SHARE
                  </button>
                </div>

                {/* Tags */}
                {post.tags && post.tags.split(',').filter(Boolean).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.split(',').filter(Boolean).map((tag) => (
                      <span key={tag} className="bg-yellow-300 text-black px-2 py-1 rounded flex items-center gap-1">
                        <Hash size={14} />{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Comments */}
                <div className="space-y-4">
                  {post.comments?.map((comment) => (
                    <div key={comment.id} className="pl-6 border-l-2 border-yellow-400">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border border-black">
                          <User size={12} className="text-black" />
                        </div>
                        <span className="font-semibold text-sm text-black cyberpunk-font">
                          {comment.author.name || comment.author.handle || shortenAddress(comment.author.walletAddress)}
                        </span>
                        <span className="text-xs text-gray-600">
                          {formatTimeAgo(comment.createdAt)}
                        </span>
                      </div>
                      <p className="text-gray-800 text-sm mb-2 cyberpunk-font-thin">
                        {renderContent(comment.content)}
                      </p>
                      <div className="flex items-center gap-4">
                        <button onClick={() => handleLikeComment(comment.id)} className="flex items-center gap-1 text-xs text-gray-600 hover:text-black transition-colors">
                          <Heart size={12} />
                          {comment.likes || 0}
                        </button>
                        <button
                          onClick={() => setReplyingTo(comment.id)}
                          className="text-xs text-gray-600 hover:text-black transition-colors cyberpunk-font"
                        >
                          REPLY
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Reply Form */}
                  {replyingTo && publicKey && (
                    <div className="pl-6 border-l-2 border-yellow-400 mt-4">
                      <textarea
                        placeholder="Write a reply... Use @walletAddress to tag users"
                        value={replyContent}
                        onChange={(e) => {
                          setReplyContent(e.target.value)
                          setTaggedUsers(extractTags(e.target.value))
                        }}
                        rows={3}
                        className="w-full p-3 border-2 border-black bg-white text-black placeholder-gray-500 resize-none text-sm cyberpunk-font"
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handleReply(post.id)}
                          disabled={commenting === post.id}
                          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm hover:bg-yellow-400 hover:text-black transition-colors disabled:opacity-50 cyberpunk-font"
                        >
                          {commenting === post.id && <Loader2 size={12} className="animate-spin" />}
                          {commenting === post.id ? 'POSTING...' : 'REPLY'}
                        </button>
                        <button
                          onClick={() => {
                            setReplyingTo(null)
                            setReplyContent('')
                            setTaggedUsers([])
                          }}
                          disabled={commenting === post.id}
                          className="bg-gray-500 text-white px-4 py-2 rounded text-sm hover:bg-gray-600 transition-colors disabled:opacity-50 cyberpunk-font"
                        >
                          CANCEL
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Add Comment */}
                  {publicKey && !replyingTo && (
                    <div className="mt-4">
                      <textarea
                        placeholder="Add a comment... Use @walletAddress to tag users"
                        value={replyContent}
                        onChange={(e) => {
                          setReplyContent(e.target.value)
                          setTaggedUsers(extractTags(e.target.value))
                        }}
                        rows={3}
                        className="w-full p-3 border-2 border-black bg-white text-black placeholder-gray-500 resize-none cyberpunk-font"
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handleReply(post.id)}
                          disabled={commenting === post.id}
                          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition-colors disabled:opacity-50 cyberpunk-font"
                        >
                          {commenting === post.id && <Loader2 size={16} className="animate-spin" />}
                          {commenting === post.id ? 'POSTING...' : 'COMMENT'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  )
} 