import React, { useState } from 'react';
import { FireIcon } from '@heroicons/react/24/solid';

interface Category {
    id: string;
    name: string;
    emoji: string;
}

interface TrendingItem {
    id: number;
    title: string;
    creator: string;
    views: string;
    likes: string;
    thumbnail: string;
}

const CATEGORIES: Category[] = [
    { id: 'rising', name: 'Rising Creator', emoji: '🔥' },
    { id: 'top', name: 'Top Freelancer', emoji: '💎' },
    { id: 'fast', name: 'Fast Growing', emoji: '🚀' },
    { id: 'ai', name: 'AI Recommended', emoji: '🧠' },
    { id: 'gaming', name: 'Gaming', emoji: '🎮' },
    { id: 'vlogs', name: 'Vlogs', emoji: '🎥' },
    { id: 'podcast', name: 'Podcast', emoji: '🎧' },
    { id: 'writing', name: 'Writing', emoji: '✍️' },
    { id: 'photography', name: 'Photography', emoji: '📸' },
    { id: 'marketing', name: 'Marketing', emoji: '📊' },
];

const TRENDING_DATA: Record<string, TrendingItem[]> = {
    rising: [
        { id: 1, title: 'Alex Chen - Video Editor', creator: '@AlexEdits', views: '45K', likes: '3.2K', thumbnail: '🎬' },
        { id: 2, title: 'Sarah Kim - UI/UX Designer', creator: '@SarahDesigns', views: '38K', likes: '2.8K', thumbnail: '🎨' },
        { id: 3, title: 'Mike Johnson - Content Writer', creator: '@MikeWrites', views: '29K', likes: '2.1K', thumbnail: '📝' },
    ],
    top: [
        { id: 1, title: 'Jessica Martinez - Full Stack Dev', creator: '@JessicaCodes', views: '312K', likes: '28.5K', thumbnail: '💻' },
        { id: 2, title: 'David Lee - Brand Strategist', creator: '@DavidBrands', views: '289K', likes: '25.3K', thumbnail: '🎯' },
        { id: 3, title: 'Emily White - Motion Designer', creator: '@EmilyMotion', views: '267K', likes: '23.1K', thumbnail: '✨' },
    ],
    fast: [
        { id: 1, title: 'Chris Park - Social Media Manager', creator: '@ChrisSocial', views: '156K', likes: '12.4K', thumbnail: '📱' },
        { id: 2, title: 'Nina Rodriguez - SEO Specialist', creator: '@NinaSEO', views: '134K', likes: '10.8K', thumbnail: '🔍' },
        { id: 3, title: 'Tom Brown - YouTube Consultant', creator: '@TomYT', views: '128K', likes: '9.9K', thumbnail: '📹' },
    ],
    ai: [
        { id: 1, title: 'Olivia Green - AI Content Creator', creator: '@OliviaAI', views: '198K', likes: '15.7K', thumbnail: '🤖' },
        { id: 2, title: 'Ryan Taylor - Data Analyst', creator: '@RyanData', views: '176K', likes: '13.2K', thumbnail: '📊' },
        { id: 3, title: 'Sophie Anderson - ChatGPT Expert', creator: '@SophieGPT', views: '165K', likes: '12.8K', thumbnail: '💡' },
    ],
    gaming: [
        { id: 1, title: 'Epic Battle Royale Highlights', creator: '@GameMaster', views: '125K', likes: '8.2K', thumbnail: '🎮' },
        { id: 2, title: 'Speedrun World Record Attempt', creator: '@SpeedyGamer', views: '89K', likes: '6.5K', thumbnail: '⚡' },
        { id: 3, title: 'Game Dev Interview Series', creator: '@DevTalks', views: '67K', likes: '5.1K', thumbnail: '🎯' },
    ],
    vlogs: [
        { id: 1, title: 'Day in the Life of a Creator', creator: '@DailyVlogs', views: '210K', likes: '15.3K', thumbnail: '📹' },
        { id: 2, title: 'Travel Vlog: Tokyo Adventure', creator: '@Wanderlust', views: '178K', likes: '12.8K', thumbnail: '✈️' },
        { id: 3, title: 'Behind the Scenes: Studio Tour', creator: '@StudioLife', views: '94K', likes: '7.6K', thumbnail: '🎬' },
    ],
    podcast: [
        { id: 1, title: 'Startup Success Stories #47', creator: '@BizTalks', views: '156K', likes: '9.8K', thumbnail: '💼' },
        { id: 2, title: 'True Crime Mystery Deep Dive', creator: '@MysteryHour', views: '203K', likes: '14.2K', thumbnail: '🔍' },
        { id: 3, title: 'Tech Trends & Tomorrow', creator: '@TechCast', views: '112K', likes: '8.9K', thumbnail: '🚀' },
    ],
    writing: [
        { id: 1, title: 'How to Write Compelling Characters', creator: '@WritersPro', views: '78K', likes: '6.2K', thumbnail: '📖' },
        { id: 2, title: 'Freelance Writing Guide 2026', creator: '@WriteForMoney', views: '92K', likes: '7.4K', thumbnail: '💰' },
        { id: 3, title: 'Poetry Workshop: Finding Your Voice', creator: '@PoetCorner', views: '54K', likes: '4.8K', thumbnail: '✨' },
    ],
    photography: [
        { id: 1, title: 'Street Photography Masterclass', creator: '@UrbanLens', views: '134K', likes: '10.5K', thumbnail: '🌆' },
        { id: 2, title: 'Portrait Lighting Techniques', creator: '@StudioShots', views: '167K', likes: '13.2K', thumbnail: '💡' },
        { id: 3, title: 'Wildlife Photography Expedition', creator: '@NatureCapture', views: '189K', likes: '15.7K', thumbnail: '🦁' },
    ],
    marketing: [
        { id: 1, title: 'Social Media Strategy 2026', creator: '@MarketGuru', views: '245K', likes: '18.9K', thumbnail: '📱' },
        { id: 2, title: 'Email Marketing That Converts', creator: '@EmailPro', views: '128K', likes: '9.3K', thumbnail: '📧' },
        { id: 3, title: 'Brand Building from Scratch', creator: '@BrandMaster', views: '156K', likes: '11.8K', thumbnail: '🎨' },
    ],
};

const Trending: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('rising');

    const currentTrending = TRENDING_DATA[activeCategory] || [];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                    <FireIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">What's hot right now</p>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 transition-colors overflow-x-auto">
                <div className="flex gap-2 min-w-max">
                    {CATEGORIES.map((category) => {
                        const isActive = activeCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all whitespace-nowrap ${isActive
                                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-200 dark:shadow-red-900/30'
                                        : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                                    }`}
                            >
                                <span className="text-lg">{category.emoji}</span>
                                <span>{category.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Trending Content */}
            <div className="space-y-3">
                {currentTrending.map((item, index) => (
                    <div
                        key={item.id}
                        className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all cursor-pointer group"
                    >
                        <div className="flex items-start gap-4">
                            {/* Rank Badge */}
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${index === 0 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                                    index === 1 ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400' :
                                        'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                                }`}>
                                #{index + 1}
                            </div>

                            {/* Thumbnail */}
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center text-3xl">
                                {item.thumbnail}
                            </div>

                            {/* Content Info */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.creator}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-500">
                                    <span className="flex items-center gap-1">
                                        👁️ {item.views} views
                                    </span>
                                    <span className="flex items-center gap-1">
                                        ❤️ {item.likes} likes
                                    </span>
                                </div>
                            </div>

                            {/* Trending Indicator */}
                            <div className="flex-shrink-0">
                                <FireIcon className="w-5 h-5 text-red-500 animate-pulse" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center transition-colors">
                <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                    View More Trending {CATEGORIES.find(c => c.id === activeCategory)?.emoji} {CATEGORIES.find(c => c.id === activeCategory)?.name}
                </button>
            </div>
        </div>
    );
};

export default Trending;
