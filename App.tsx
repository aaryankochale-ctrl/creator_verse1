
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import AIHub from './views/AIHub';
import Marketplace from './views/Marketplace';

// Empty component placeholders for other tabs
const Placeholder: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-gray-400">
    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
      <span className="text-2xl">⏳</span>
    </div>
    <h3 className="font-bold text-lg text-gray-600 dark:text-gray-400">{name} View</h3>
    <p className="text-sm">This module is coming soon in MVP Phase 2.</p>
  </div>
);

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'ai-hub':
        return <AIHub />;
      case 'marketplace':
        return <Marketplace />;
      case 'messages':
        return <Placeholder name="Messaging" />;
      case 'profile':
        return <Placeholder name="User Profile" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        <div className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
