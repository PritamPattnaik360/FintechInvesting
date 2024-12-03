import { Startup } from '../types/startup';

export const startups: Startup[] = [
  {
    id: '1',
    name: 'PayFlow',
    description: 'Revolutionary payment infrastructure for emerging markets',
    valuation: 25000000,
    raised: 15000000,
    industry: 'Payments',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60',
    minimumInvestment: 1000,
    progress: 75
  },
  {
    id: '2',
    name: 'CryptoSafe',
    description: 'Institutional-grade crypto custody solution',
    valuation: 40000000,
    raised: 20000000,
    industry: 'Cryptocurrency',
    logo: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&auto=format&fit=crop&q=60',
    minimumInvestment: 2500,
    progress: 60
  },
  {
    id: '3',
    name: 'WealthWise',
    description: 'AI-powered personal finance management',
    valuation: 15000000,
    raised: 8000000,
    industry: 'Wealth Management',
    logo: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60',
    minimumInvestment: 500,
    progress: 85
  }
];