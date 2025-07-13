#!/usr/bin/env node

const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Sigma Labs Production Setup\n');

// Generate NEXTAUTH_SECRET
const generateSecret = () => {
  return crypto.randomBytes(32).toString('base64');
};

const questions = [
  {
    name: 'domain',
    question: 'Enter your Vercel domain (e.g., sigma-labs.vercel.app): ',
    default: 'sigma-labs.vercel.app'
  },
  {
    name: 'databaseUrl',
    question: 'Enter your PostgreSQL connection string from Vercel: ',
    default: ''
  }
];

const answers = {};

const askQuestion = (index) => {
  if (index >= questions.length) {
    createEnvFile();
    return;
  }

  const q = questions[index];
  rl.question(q.question, (answer) => {
    answers[q.name] = answer || q.default;
    askQuestion(index + 1);
  });
};

const createEnvFile = () => {
  const secret = generateSecret();
  
  const envContent = `# --- Sigma Labs Website Production Environment Variables ---

# NextAuth configuration
NEXTAUTH_URL="https://${answers.domain}"
NEXTAUTH_SECRET="${secret}"

# Solana RPC endpoint (mainnet)
NEXT_PUBLIC_SOLANA_RPC_URL="https://api.mainnet-beta.solana.com"

# Database URL (PostgreSQL from Vercel)
DATABASE_URL="${answers.databaseUrl}"

# --- End of Production .env ---
`;

  fs.writeFileSync('.env.production', envContent);
  
  console.log('\n✅ Production environment file created: .env.production');
  console.log('\n📋 Next steps:');
  console.log('1. Add these environment variables to your Vercel project:');
  console.log('   - Go to your Vercel project dashboard');
  console.log('   - Navigate to Settings → Environment Variables');
  console.log('   - Add each variable from .env.production');
  console.log('\n2. Run: npx prisma db push --schema=./prisma/schema.prisma');
  console.log('3. Deploy to Vercel: git push origin main');
  
  rl.close();
};

askQuestion(0); 