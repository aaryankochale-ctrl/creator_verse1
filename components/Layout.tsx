

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { NAV_ITEMS } from '../constants';
import { SunIcon, MoonIcon, ArrowRightOnRectangleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

interface LayoutProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [navigationHistory, setNavigationHistory] = useState<string[]>(['dashboard']);

  // Track navigation history
  useEffect(() => {
    setNavigationHistory(prev => {
      // Don't add duplicate of the current tab
      if (prev[prev.length - 1] === activeTab) {
        return prev;
      }
      return [...prev, activeTab];
    });
  }, [activeTab]);

  // Handle back navigation
  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current page
      const previousTab = newHistory[newHistory.length - 1];
      setNavigationHistory(newHistory);
      setActiveTab(previousTab);
    }
  };

  const canGoBack = navigationHistory.length > 1;

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0 md:pl-64 bg-white dark:bg-black transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between transition-colors">
        <div className="flex items-center gap-3">
          {/* Back Button */}
          {canGoBack && (
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
          )}

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">CreatorHub</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Username Display */}
          <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
            {user?.username}
          </span>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-500" />
            ) : (
              <MoonIcon className="w-5 h-5 text-indigo-600" />
            )}
          </button>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            aria-label="Logout"
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-lg mx-auto w-full md:max-w-none md:p-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 md:hidden flex justify-around items-center h-16 px-2 z-40 transition-colors">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-6 transition-colors">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CreatorHub</h1>
        </div>
        <div className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Layout;
