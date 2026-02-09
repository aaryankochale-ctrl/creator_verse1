import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { SparklesIcon, PlusIcon } from '@heroicons/react/24/solid';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20">
        <h2 className="text-2xl font-bold mb-1">Hello, {user?.username}!</h2>
        <p className="opacity-90 text-sm mb-4">Welcome to CreatorHub. Start connecting with freelancers and growing your content!</p>
      </div>

      {/* Quick AI Suggestion */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-white">
            <SparklesIcon className="w-5 h-5 text-amber-500" />
            Getting Started
          </h3>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-4 shadow-sm transition-colors">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Welcome! Check out the AI Hub for content insights, or browse the Marketplace to find talented freelancers for your projects.
          </p>
        </div>
      </section>

      {/* Empty States */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Your Connections</h3>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 text-center transition-colors">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">No connections yet. Visit the Marketplace to find freelancers!</p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg text-gray-900 dark:text-white">Active Projects</h3>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-8 text-center transition-colors">
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">No projects yet. Start exploring opportunities in the Gigs section!</p>
        </div>
      </section>

      {/* Create Action */}
      <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8">
        <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl shadow-indigo-300 dark:shadow-indigo-900/50 flex items-center justify-center hover:scale-110 transition-transform">
          <PlusIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
