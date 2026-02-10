import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/solid';

const GrowthDashboard: React.FC = () => {
    // Sample data - in a real app, this would come from API/analytics
    const growthSpeed = 78; // out of 100
    const consistencyScore = 85;
    const nicheStrength = 72;

    const weakSpots = [
        {
            id: 1,
            title: 'Posting Frequency',
            issue: "You've been a bit quiet lately! Try posting 3-4 times per week.",
            icon: '📅',
            severity: 'medium'
        },
        {
            id: 2,
            title: 'Engagement Response Time',
            issue: 'Your fans are waiting! Responding within 2 hours boosts engagement by 40%.',
            icon: '💬',
            severity: 'low'
        },
        {
            id: 3,
            title: 'Content Variety',
            issue: 'Mix it up a little! Try adding more video content to your feed.',
            icon: '🎬',
            severity: 'low'
        }
    ];

    const getSpeedColor = (speed: number) => {
        if (speed >= 75) return 'from-green-500 to-emerald-500';
        if (speed >= 50) return 'from-yellow-500 to-orange-500';
        return 'from-red-500 to-orange-500';
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600 dark:text-green-400';
        if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
        return 'text-orange-600 dark:text-orange-400';
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <ChartBarIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Growth Dashboard</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Track your creator journey</p>
                </div>
            </div>

            {/* Growth Speed Meter */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="text-2xl">⚡</span>
                        Growth Speed Meter
                    </h3>
                    <span className={`text-3xl font-bold ${getScoreColor(growthSpeed)}`}>
                        {growthSpeed}%
                    </span>
                </div>

                {/* Meter Visualization */}
                <div className="relative">
                    <div className="w-full h-4 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className={`h-full bg-gradient-to-r ${getSpeedColor(growthSpeed)} transition-all duration-1000 rounded-full`}
                            style={{ width: `${growthSpeed}%` }}
                        />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                        <span>Slow</span>
                        <span>Moderate</span>
                        <span>Fast</span>
                        <span>Rocket 🚀</span>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    You're growing faster than 78% of creators! Keep up the great work! 🎉
                </p>
            </div>

            {/* Consistency Score */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="text-2xl">📊</span>
                        Consistency Score
                    </h3>
                    <div className="text-right">
                        <div className={`text-3xl font-bold ${getScoreColor(consistencyScore)}`}>
                            {consistencyScore}/100
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Excellent</div>
                    </div>
                </div>

                {/* Visual Rings */}
                <div className="flex items-center justify-center py-6">
                    <div className="relative w-32 h-32">
                        <svg className="transform -rotate-90 w-32 h-32">
                            {/* Background circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-200 dark:text-gray-700"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="64"
                                cy="64"
                                r="56"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray={`${2 * Math.PI * 56}`}
                                strokeDashoffset={`${2 * Math.PI * 56 * (1 - consistencyScore / 100)}`}
                                className="text-green-500 transition-all duration-1000"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl">✅</span>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Amazing! You're posting regularly and staying active. Your audience loves reliability! 💪
                </p>
            </div>

            {/* Niche Strength */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="text-2xl">🎯</span>
                        Niche Strength
                    </h3>
                    <span className={`text-3xl font-bold ${getScoreColor(nicheStrength)}`}>
                        {nicheStrength}%
                    </span>
                </div>

                {/* Strength Bars */}
                <div className="space-y-3">
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Content Focus</span>
                            <span className="font-medium text-gray-900 dark:text-white">85%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '85%' }} />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Audience Match</span>
                            <span className="font-medium text-gray-900 dark:text-white">78%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '78%' }} />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Expertise Level</span>
                            <span className="font-medium text-gray-900 dark:text-white">90%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: '90%' }} />
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    You're carving out your space! Your niche is well-defined and growing stronger. 🌟
                </p>
            </div>

            {/* Weak Spots (Friendly Tone) */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Areas for Growth</h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    No one's perfect! Here are some friendly tips to level up:
                </p>

                <div className="space-y-3">
                    {weakSpots.map((spot) => (
                        <div
                            key={spot.id}
                            className={`p-4 rounded-xl border ${spot.severity === 'medium'
                                    ? 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800'
                                    : 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl flex-shrink-0">{spot.icon}</span>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {spot.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {spot.issue}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-xl border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <span className="text-xl">✨</span>
                        <strong>Pro Tip:</strong> Focus on one improvement at a time. Small, consistent changes lead to big results!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GrowthDashboard;
