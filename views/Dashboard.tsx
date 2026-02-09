
import React from 'react';
import { MOCK_USER, MOCK_FREELANCERS, MOCK_GIGS } from '../constants';
import { SparklesIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200">
        <h2 className="text-2xl font-bold mb-1">Hello, {MOCK_USER.name}!</h2>
        <p className="opacity-90 text-sm mb-4">Your channel is growing 12% faster than last month. Keep it up!</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <p className="text-xs opacity-75">Followers</p>
            <p className="text-lg font-bold">{(MOCK_USER.stats?.followers || 0 / 1000).toLocaleString()}k</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
            <p className="text-xs opacity-75">Engagement</p>
            <p className="text-lg font-bold">{MOCK_USER.stats?.engagement}%</p>
          </div>
        </div>
      </div>

      {/* Quick AI Suggestion */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <SparklesIcon className="w-5 h-5 text-amber-500" />
            Daily Insight
          </h3>
          <button className="text-indigo-600 text-sm font-semibold">Refresh</button>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed italic">
            "Tech setups using natural light are trending. Consider a 'Desk Tour' short-form video to capitalize on the aesthetic-workspace hashtag."
          </p>
        </div>
      </section>

      {/* Suggested Freelancers */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">Top Matches for You</h3>
          <button className="text-indigo-600 text-sm font-semibold">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {MOCK_FREELANCERS.map((f) => (
            <div key={f.id} className="min-w-[240px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm snap-start">
              <div className="flex items-center gap-3 mb-3">
                <img src={f.avatar} alt={f.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-sm">{f.name}</h4>
                  <p className="text-xs text-indigo-600 font-medium">{f.skills?.[0]}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">{f.bio}</p>
              <button className="w-full py-2 bg-gray-50 text-gray-700 text-xs font-bold rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Gigs */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-lg">Trending Gigs</h3>
          <button className="text-indigo-600 text-sm font-semibold">Marketplace</button>
        </div>
        <div className="space-y-3">
          {MOCK_GIGS.map((gig) => (
            <div key={gig.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between hover:border-indigo-200 transition-colors">
              <div>
                <h4 className="font-bold text-sm mb-1">{gig.title}</h4>
                <p className="text-xs text-gray-500">{gig.budget} • {gig.category}</p>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Create Action */}
      <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8">
        <button className="w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl shadow-indigo-300 flex items-center justify-center hover:scale-110 transition-transform">
          <PlusIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
