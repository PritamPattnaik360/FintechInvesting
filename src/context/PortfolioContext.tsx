import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Investment, Portfolio } from '../types/investment';

interface PortfolioContextType {
  portfolio: Portfolio;
  addInvestment: (investment: Investment) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolio, setPortfolio] = useState<Portfolio>({
    totalValue: 0,
    investments: [],
  });

  const addInvestment = (investment: Investment) => {
    setPortfolio(prev => ({
      totalValue: prev.totalValue + investment.amount,
      investments: [...prev.investments, investment],
    }));
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, addInvestment }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}