import React from 'react';
import { ArrowUpRight, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Startup } from '../types/startup';

interface StartupCardProps {
  startup: Startup;
  onInvest: (id: string) => void;
}

export function StartupCard({ startup, onInvest }: StartupCardProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <img
            src={startup.logo}
            alt={startup.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            {startup.industry}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{startup.name}</h3>
        <p className="text-gray-600 mb-4">{startup.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Valuation</p>
              <p className="font-semibold">{formatCurrency(startup.valuation)}</p>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Raised</p>
              <p className="font-semibold">{formatCurrency(startup.raised)}</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="text-blue-600 font-medium">{startup.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 rounded-full h-2 transition-all duration-300"
              style={{ width: `${startup.progress}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={() => onInvest(startup.id)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          Invest Now
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}