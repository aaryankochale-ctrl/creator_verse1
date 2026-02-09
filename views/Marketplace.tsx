
import React, { useState } from 'react';
import { MOCK_GIGS, MOCK_FREELANCERS } from '../constants';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, BriefcaseIcon, UsersIcon } from '@heroicons/react/24/outline';

const Marketplace: React.FC = () => {
  const [view, setView] = useState<'gigs' | 'freelancers'>('gigs');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Marketplace</h2>
        <button className="p-2 bg-gray-900 border border-gray-800 rounded-lg">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={`Search ${view}...`}
          className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-2xl text-sm text-white focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
        />
      </div>

      {/* Toggle */}
      <div className="flex p-1 bg-gray-900 rounded-xl">
        <button
          onClick={() => setView('gigs')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${view === 'gigs' ? 'bg-gray-800 shadow-sm text-indigo-400' : 'text-gray-500'
            }`}
        >
          <BriefcaseIcon className="w-4 h-4" />
          Gigs
        </button>
        <button
          onClick={() => setView('freelancers')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold rounded-lg transition-all ${view === 'freelancers' ? 'bg-gray-800 shadow-sm text-indigo-400' : 'text-gray-500'
            }`}
        >
          <UsersIcon className="w-4 h-4" />
          Freelancers
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {view === 'gigs' ? (
          MOCK_GIGS.map((gig) => (
            <div key={gig.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-sm hover:border-indigo-800 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold bg-indigo-950 text-indigo-400 px-2 py-1 rounded-lg uppercase">
                  {gig.category}
                </span>
                <span className="text-xs font-bold text-emerald-600">{gig.budget}</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">{gig.title}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                {gig.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <span className="text-[10px] text-gray-400 font-medium">Posted 2 days ago</span>
                </div>
                <button className="text-xs font-bold text-indigo-400">Apply Now</button>
              </div>
            </div>
          ))
        ) : (
          MOCK_FREELANCERS.map((f) => (
            <div key={f.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 shadow-sm hover:border-indigo-800 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <img src={f.avatar} alt={f.name} className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-bold text-base text-white">{f.name}</h3>
                  <p className="text-xs text-indigo-400 font-bold">{f.rate}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {f.skills?.map(skill => (
                  <span key={skill} className="text-[10px] font-medium bg-gray-800 text-gray-400 px-2 py-1 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-4 line-clamp-2">{f.bio}</p>
              <button className="w-full py-3 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-100">
                Hire {f.name.split(' ')[0]}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Marketplace;
