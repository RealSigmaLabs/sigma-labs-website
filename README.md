# Sigma Labs Website

A modern, full-stack website for Sigma Labs - an innovation and learning platform featuring projects, courses, and community features.

## Features

- **Modern Design**: Beautiful, responsive design with animations and modern UI components
- **Authentication**: Email and Solana wallet authentication
- **Projects Gallery**: Showcase innovative projects with filtering and search
- **Courses Platform**: Comprehensive course listings with categories
- **Community Forum**: Reddit-style forum for discussions and knowledge sharing
- **User Profiles**: Customizable user profiles with handles
- **Dark Mode**: Full dark mode support
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Authentication**: NextAuth.js with email and Solana wallet support
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: Lucide React icons, custom components
- **Styling**: Tailwind CSS with custom design system
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Solana wallet (for crypto authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sigma-labs-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/sigma_labs"
   
   # NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   
   # Email Provider
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   
   # Solana
   SOLANA_RPC_URL="https://api.mainnet-beta.solana.com"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
sigma-labs-website/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects page
│   ├── courses/           # Courses page
│   └── community/         # Community forum page
├── components/            # Reusable components
│   ├── navigation.tsx     # Main navigation
│   ├── hero.tsx          # Hero section
│   ├── features.tsx      # Features section
│   ├── stats.tsx         # Statistics section
│   ├── cta.tsx           # Call-to-action section
│   ├── providers.tsx     # Context providers
│   └── wallet-provider.tsx # Solana wallet provider
├── lib/                   # Utility functions
│   └── utils.ts          # Common utilities
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Pages

### Home Page (`/`)
- Hero section with animated elements
- Features overview
- Statistics and social proof
- Call-to-action section

### Projects Page (`/projects`)
- Gallery of innovative projects
- Filtering by technology, category, etc.
- Search functionality
- Project details and links

### Courses Page (`/courses`)
- Course catalog with categories
- Difficulty levels and duration
- Course previews and enrollment
- Learning progress tracking

### Community Page (`/community`)
- Forum posts and discussions
- Create new posts
- Comment system
- User profiles and handles

## Authentication

The platform supports two authentication methods:

1. **Email Authentication**: Traditional email/password signup and login
2. **Solana Wallet**: Connect with Phantom, Solflare, or other Solana wallets

## Database Schema

The application uses PostgreSQL with the following main models:

- **User**: User accounts with profiles and handles
- **Project**: Project listings with metadata
- **Course**: Course information and enrollment
- **Post**: Forum posts and discussions
- **Comment**: Comments on forum posts

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## Deployment

The application can be deployed to various platforms:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

Make sure to set up your environment variables and database connection in your deployment platform.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team. 