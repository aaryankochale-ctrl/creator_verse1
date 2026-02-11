
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './views/Dashboard';
import GrowthDashboard from './views/GrowthDashboard';
import Trending from './views/Trending';
import AIHub from './views/AIHub';
import Marketplace from './views/Marketplace';
import Profile from './views/Profile';
import Login from './views/Login';
import Signup from './views/Signup';
import UserTypeSelection from './views/UserTypeSelection';

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

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');
  const [userType, setUserType] = useState<'creator' | 'freelancer' | null>(null);
  const { isAuthenticated } = useAuth();

  // Check if user type has been selected before
  useEffect(() => {
    const storedUserType = localStorage.getItem('selectedUserType') as 'creator' | 'freelancer' | null;
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  // Handle user type selection
  const handleUserTypeSelection = (type: 'creator' | 'freelancer') => {
    setUserType(type);
    localStorage.setItem('selectedUserType', type);
  };

  // Handle going back to user type selection
  const handleBackToUserTypeSelection = () => {
    setUserType(null);
    localStorage.removeItem('selectedUserType');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'growth':
        return <GrowthDashboard />;
      case 'trending':
        return <Trending />;
      case 'ai-hub':
        return <AIHub />;
      case 'marketplace':
        return <Marketplace />;
      case 'messages':
        return <Placeholder name="Messaging" />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    // Show user type selection if not yet selected
    if (!userType) {
      return <UserTypeSelection onSelectType={handleUserTypeSelection} />;
    }

    // Show login or signup with selected user type
    if (authView === 'login') {
      return <Login onSwitchToSignup={() => setAuthView('signup')} userType={userType} onBack={handleBackToUserTypeSelection} />;
    } else {
      return <Signup onSwitchToLogin={() => setAuthView('login')} userType={userType} onBack={handleBackToUserTypeSelection} />;
    }
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="animate-in fade-in duration-500">
        {renderContent()}
      </div>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
