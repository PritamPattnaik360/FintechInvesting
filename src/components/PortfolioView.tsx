import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { startups } from '../data/mockStartups';
import { Wallet, TrendingUp, PieChart } from 'lucide-react';

export function PortfolioView() {
  const { portfolio } = usePortfolio();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  };

  const getStartupDetails = (startupId: string) => {
    return startups.find(s => s.id === startupId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <Wallet className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Total Invested</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {formatCurrency(portfolio.totalValue)}
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-2">
            <PieChart className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold">Investments</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">
            {portfolio.investments.length}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">Investment History</h3>
        </div>
        <div className="divide-y">
          {portfolio.investments.map(investment => {
            const startup = getStartupDetails(investment.startupId);
            return (
              <div key={investment.id} className="p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={startup?.logo}
                    alt={startup?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{startup?.name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(investment.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{formatCurrency(investment.amount)}</p>
                  <p className="text-sm text-gray-500">
                    {investment.shares.toFixed(2)} shares
                  </p>
                </div>
              </div>
            );
          })}
          {portfolio.investments.length === 0 && (
            <div className="p-6 text-center text-gray-500">
              No investments yet. Start investing to build your portfolio!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}