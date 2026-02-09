
import React, { useState, useEffect } from 'react';
import { generateContentInsights, generateCaption } from '../services/gemini';
import { AIInsight, UserRole } from '../types';
import { MOCK_USER } from '../constants';
import { SparklesIcon, ArrowPathIcon, ClipboardIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const AIHub: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<AIInsight[]>([]);
  const [topic, setTopic] = useState('');
  const [captionResult, setCaptionResult] = useState<{ title: string, caption: string, hashtags: string[] } | null>(null);

  const fetchInsights = async () => {
    setLoading(true);
    const results = await generateContentInsights(MOCK_USER.niche || 'General', 'YouTube');
    setInsights(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const handleGenerateCaption = async () => {
    if (!topic) return;
    setLoading(true);
    const result = await generateCaption(topic);
    setCaptionResult(result);
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">AI Creator Hub</h2>
        <p className="text-gray-500 text-sm">Use AI to discover trends and optimize your content.</p>
      </div>

      {/* Trend Detection */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold flex items-center gap-2">
            <SparklesIcon className="w-5 h-5 text-amber-500" />
            Niche Trends
          </h3>
          <button
            onClick={fetchInsights}
            disabled={loading}
            className="text-indigo-600 text-xs font-semibold flex items-center gap-1 disabled:opacity-50"
          >
            <ArrowPathIcon className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            Regenerate
          </button>
        </div>

        {loading && insights.length === 0 ? (
          <div className="space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-24 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${insight.type === 'TREND' ? 'bg-indigo-100 text-indigo-700' :
                    insight.type === 'GROWTH' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                    {insight.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <ChartBarIcon className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] text-gray-500 font-medium">Relevance: {insight.score}%</span>
                  </div>
                </div>
                <h4 className="font-bold text-sm mb-1">{insight.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Caption Generator */}
      <section className="bg-indigo-50 rounded-2xl p-6">
        <h3 className="font-bold mb-4">Caption Generator</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Content Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. iPhone 15 Pro Max Review..."
              className="w-full bg-white border border-indigo-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
            />
          </div>
          <button
            onClick={handleGenerateCaption}
            disabled={loading || !topic}
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-lg shadow-indigo-200"
          >
            {loading ? 'Generating...' : 'Generate Copy'}
          </button>

          {captionResult && (
            <div className="bg-white rounded-xl p-4 mt-4 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div>
                <h5 className="text-[10px] font-bold text-indigo-600 uppercase mb-1">Suggested Title</h5>
                <p className="text-sm font-bold text-gray-800">{captionResult.title}</p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-indigo-600 uppercase mb-1">Caption</h5>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{captionResult.caption}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {captionResult.hashtags.map((h, i) => (
                  <span key={i} className="text-xs font-medium text-indigo-500">#{h.replace('#', '')}</span>
                ))}
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`${captionResult.title}\n\n${captionResult.caption}\n\n${captionResult.hashtags.join(' ')}`);
                  alert('Copied to clipboard!');
                }}
                className="w-full py-2 flex items-center justify-center gap-2 text-xs font-bold text-gray-600 bg-gray-50 rounded-lg">
                <ClipboardIcon className="w-4 h-4" />
                Copy All
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AIHub;
