import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { SparklesIcon, FireIcon, RocketLaunchIcon, ChartBarIcon, BoltIcon, TrophyIcon } from '@heroicons/react/24/solid';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Active Gigs', value: '12', icon: FireIcon, color: 'from-red-500 to-orange-500' },
    { label: 'Total Earnings', value: '$2.4K', icon: TrophyIcon, color: 'from-yellow-500 to-orange-500' },
    { label: 'Growth Rate', value: '+34%', icon: RocketLaunchIcon, color: 'from-green-500 to-emerald-500' },
    { label: 'Engagement', value: '89%', icon: ChartBarIcon, color: 'from-blue-500 to-cyan-500' },
  ];

  const quickActions = [
    { title: 'Browse Trending', icon: '🔥', color: 'from-red-500 to-pink-500' },
    { title: 'View Growth', icon: '📈', color: 'from-purple-500 to-indigo-500' },
    { title: 'Find Gigs', icon: '💼', color: 'from-blue-500 to-cyan-500' },
    { title: 'AI Insights', icon: '🤖', color: 'from-green-500 to-teal-500' },
  ];

  const recentActivity = [
    { action: 'New collaboration request', user: '@designpro', time: '2m ago', emoji: '🤝' },
    { action: 'Gig completed successfully', user: '@techstart', time: '1h ago', emoji: '✅' },
    { action: 'Payment received', user: '@marketguru', time: '3h ago', emoji: '💰' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Welcome Card with Gradient */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl shadow-indigo-500/50 dark:shadow-indigo-900/30 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <SparklesIcon className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h2 className="text-3xl font-bold">Welcome back, {user?.username}! 👋</h2>
          </div>
          <p className="text-lg opacity-95 mb-6">Your creator journey is on fire! Here's what's happening today.</p>

          <div className="flex gap-3 flex-wrap">
            <button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:scale-105 transition-transform shadow-lg">
              <BoltIcon className="w-5 h-5 inline mr-2" />
              Get Started
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/30">
              View Analytics
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <BoltIcon className="w-5 h-5 text-yellow-500" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`bg-gradient-to-br ${action.color} p-6 rounded-2xl text-white font-semibold hover:scale-105 transition-transform shadow-lg group`}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {action.icon}
              </div>
              <div className="text-sm">{action.title}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <SparklesIcon className="w-5 h-5 text-indigo-500" />
          Recent Activity
        </h3>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
          {recentActivity.map((item, index) => (
            <div
              key={index}
              className={`p-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${index !== recentActivity.length - 1 ? 'border-b border-gray-200 dark:border-gray-800' : ''
                }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {item.action}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.user} • {item.time}
                </p>
              </div>
              <button className="text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium flex-shrink-0">
                View
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* AI Recommendation Card */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <SparklesIcon className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              🎯 AI Powered Recommendation
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              Based on your activity, we recommend connecting with <strong>@creativestudio</strong>. They're looking for someone with your exact skillset for a $2,500 project!
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 transition-transform text-sm shadow-lg">
                View Opportunity
              </button>
              <button className="px-4 py-2 text-purple-600 dark:text-purple-400 font-medium hover:underline text-sm">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Insights */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <RocketLaunchIcon className="w-6 h-6" />
            <h3 className="font-bold text-lg">You're Growing Fast!</h3>
          </div>
          <p className="text-3xl font-bold mb-2">+34%</p>
          <p className="opacity-90 text-sm">vs last month</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <TrophyIcon className="w-6 h-6" />
            <h3 className="font-bold text-lg">Top Performer</h3>
          </div>
          <p className="text-3xl font-bold mb-2">#12</p>
          <p className="opacity-90 text-sm">out of 2,847 creators</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
