import React, { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';

const Marketplace: React.FC = () => {
  const [view, setView] = useState<'gigs' | 'freelancers'>('gigs');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Marketplace</h2>
        <button className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg transition-colors">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={`Search ${view}...`}
          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-colors"
        />
      </div>

      {/* Toggle */}
      <div className="flex p-1 bg-gray-100 dark:bg-gray-900 rounded-xl transition-colors">
        <button
          onClick={() => setView('gigs')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${view === 'gigs' ? 'bg-white dark:bg-gray-800 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-gray-500'
            }`}
        >
          <BriefcaseIcon className="w-4 h-4" />
          Gigs
        </button>
        <button
          onClick={() => setView('freelancers')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${view === 'freelancers' ? 'bg-white dark:bg-gray-800 shadow-sm text-indigo-600 dark:text-indigo-400' : 'text-gray-500'
            }`}
        >
          <UsersIcon className="w-4 h-4" />
          Freelancers
        </button>
      </div>

      {/* Empty State */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-12 text-center transition-colors">
        <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          {view === 'gigs' ? (
            <BriefcaseIcon className="w-10 h-10 text-gray-400" />
          ) : (
            <UsersIcon className="w-10 h-10 text-gray-400" />
          )}
        </div>
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
          No {view} available yet
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {view === 'gigs'
            ? 'Check back soon for exciting project opportunities!'
            : 'Be the first to join as a freelancer and showcase your skills!'}
        </p>
      </div>
    </div>
  );
};

export default Marketplace;
