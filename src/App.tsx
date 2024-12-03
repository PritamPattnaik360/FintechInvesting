import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StartupCard } from './components/StartupCard';
import { InvestmentModal } from './components/InvestmentModal';
import { PortfolioView } from './components/PortfolioView';
import { Learn } from './components/Learn';
import { PortfolioProvider } from './context/PortfolioContext';
import { startups } from './data/mockStartups';

function App() {
  const [selectedStartup, setSelectedStartup] = useState<string | null>(null);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'portfolio' | 'learn'>('home');

  const handleInvest = (id: string) => {
    setSelectedStartup(id);
  };

  const selectedStartupData = startups.find(s => s.id === selectedStartup);

  const renderContent = () => {
    switch (currentView) {
      case 'portfolio':
        return <PortfolioView />;
      case 'learn':
        return <Learn />;
      default:
        return (
          <>
            <Hero />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Featured Opportunities</h2>
                  <p className="text-gray-600 mt-2">
                    Discover and invest in carefully vetted fintech startups
                  </p>
                </div>
                <button
                  onClick={() => setCurrentView('portfolio')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  View Portfolio
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {startups.map((startup) => (
                  <StartupCard
                    key={startup.id}
                    startup={startup}
                    onInvest={handleInvest}
                  />
                ))}
              </div>
            </main>
          </>
        );
    }
  };

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onNavigate={setCurrentView} currentView={currentView} />
        {renderContent()}
        {selectedStartupData && (
          <InvestmentModal
            startup={selectedStartupData}
            onClose={() => setSelectedStartup(null)}
          />
        )}
      </div>
    </PortfolioProvider>
  );
}

export default App;