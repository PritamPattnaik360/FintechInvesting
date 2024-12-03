import React from 'react';
import { Lightbulb, Users, Lock, BarChart3, PiggyBank, Shield } from 'lucide-react';

export function Learn() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why Invest in Startups with StartupInvest?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're democratizing access to startup investments, making it possible for everyone to participate in the next wave of innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Democratized Access</h3>
            <p className="text-gray-600">
              Start investing with as little as $500, breaking down traditional barriers to startup investing.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vetted Opportunities</h3>
            <p className="text-gray-600">
              Each startup undergoes rigorous due diligence before being listed on our platform.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <PiggyBank className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Portfolio Diversification</h3>
            <p className="text-gray-600">
              Spread your investments across multiple startups to manage risk effectively.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
            <p className="text-xl mb-6">
              Historically, startup investing was limited to accredited investors and venture capital firms. We're changing that by providing:
            </p>
            <ul className="text-left space-y-4">
              <li className="flex items-center">
                <BarChart3 className="w-6 h-6 mr-3" />
                <span>Early access to high-growth potential companies</span>
              </li>
              <li className="flex items-center">
                <Lock className="w-6 h-6 mr-3" />
                <span>Transparent and secure investment process</span>
              </li>
              <li className="flex items-center">
                <Lightbulb className="w-6 h-6 mr-3" />
                <span>Educational resources and expert insights</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How is this different from traditional investing?</h3>
              <p className="text-gray-600">
                Unlike public market investments, startup investing offers the potential for higher returns but comes with unique risks and longer investment horizons. We provide the tools and transparency needed to make informed decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens after I invest?</h3>
              <p className="text-gray-600">
                You'll receive regular updates about your portfolio companies' progress, important milestones, and potential exit opportunities. Our platform provides detailed analytics and reporting tools to track your investments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How do you select startups?</h3>
              <p className="text-gray-600">
                Our team conducts extensive due diligence, evaluating factors like team experience, market opportunity, traction, and financial health. Only startups meeting our strict criteria are presented to investors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}