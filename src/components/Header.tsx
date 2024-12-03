import React from 'react';
import { TrendingUp } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'portfolio' | 'learn') => void;
  currentView: string;
}

export function Header({ onNavigate, currentView }: HeaderProps) {
  const getLinkClass = (view: string) => {
    return `text-gray-600 hover:text-gray-900 ${
      currentView === view ? 'font-semibold text-blue-600' : ''
    }`;
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">StartupInvest</span>
          </div>
          <nav className="flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={getLinkClass('home')}
            >
              Discover
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className={getLinkClass('portfolio')}
            >
              Portfolio
            </button>
            <button
              onClick={() => onNavigate('learn')}
              className={getLinkClass('learn')}
            >
              Learn
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}