import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            Invest in the Next Generation of Fintech
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Access curated investment opportunities in promising fintech startups. 
            Start building your portfolio with as little as $500.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-blue-50 transition-colors duration-300">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}