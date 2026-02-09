
import React from 'react';
import { NAV_ITEMS } from '../constants';

interface LayoutProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0 md:pl-64 bg-black">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">CreatorHub</h1>
        </div>
        <button className="p-2 hover:bg-gray-900 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 max-w-lg mx-auto w-full md:max-w-none md:p-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 md:hidden flex justify-around items-center h-16 px-2 z-40">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive ? 'text-indigo-400' : 'text-gray-500 hover:text-gray-300'
                }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] mt-1 font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Desktop Sidebar (concept) */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-black border-r border-gray-800 p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <h1 className="text-2xl font-bold text-white">CreatorHub</h1>
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
                    ? 'bg-indigo-950 text-indigo-400'
                    : 'text-gray-400 hover:bg-gray-900'
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
