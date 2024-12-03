import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Startup } from '../types/startup';
import { usePortfolio } from '../context/PortfolioContext';

interface InvestmentModalProps {
  startup: Startup;
  onClose: () => void;
}

export function InvestmentModal({ startup, onClose }: InvestmentModalProps) {
  const [amount, setAmount] = useState<number>(startup.minimumInvestment);
  const [shares, setShares] = useState<number>(0);
  const { addInvestment } = usePortfolio();

  const calculateShares = (investmentAmount: number) => {
    // Simple share calculation based on valuation
    return (investmentAmount / startup.valuation) * 1000000;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
    setShares(calculateShares(value));
  };

  const handleInvest = () => {
    if (amount < startup.minimumInvestment) return;

    addInvestment({
      id: Date.now().toString(),
      startupId: startup.id,
      amount,
      shares,
      date: new Date().toISOString(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Invest in {startup.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Amount (USD)
          </label>
          <input
            type="number"
            min={startup.minimumInvestment}
            step={100}
            value={amount}
            onChange={handleAmountChange}
            className="w-full p-2 border rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Minimum investment: ${startup.minimumInvestment}
          </p>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Estimated Shares: {shares.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            Ownership: {((shares / 1000000) * 100).toFixed(4)}%
          </p>
        </div>

        <button
          onClick={handleInvest}
          disabled={amount < startup.minimumInvestment}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
        >
          Confirm Investment
        </button>
      </div>
    </div>
  );
}