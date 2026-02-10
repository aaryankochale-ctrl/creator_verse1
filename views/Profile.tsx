import React, { useState } from 'react';
import { UserCircleIcon, BriefcaseIcon, PencilIcon } from '@heroicons/react/24/solid';
import { useAuth } from '../contexts/AuthContext';

type ProfileType = 'gig-poster' | 'freelancer' | null;

interface GigPosterProfile {
    companyName: string;
    industry: string;
    location: string;
    budget: string;
    projectTypes: string;
    description: string;
}

interface FreelancerProfile {
    displayName: string;
    skills: string;
    experience: string;
    hourlyRate: string;
    availability: string;
    portfolio: string;
    bio: string;
}

const Profile: React.FC = () => {
    const { user } = useAuth();
    const [profileType, setProfileType] = useState<ProfileType>(null);
    const [isEditing, setIsEditing] = useState(true);

    // Gig Poster state
    const [gigPosterProfile, setGigPosterProfile] = useState<GigPosterProfile>({
        companyName: '',
        industry: '',
        location: '',
        budget: '',
        projectTypes: '',
        description: '',
    });

    // Freelancer state
    const [freelancerProfile, setFreelancerProfile] = useState<FreelancerProfile>({
        displayName: '',
        skills: '',
        experience: '',
        hourlyRate: '',
        availability: '',
        portfolio: '',
        bio: '',
    });

    const handleSaveProfile = () => {
        setIsEditing(false);
        // In a real app, this would save to a backend
        console.log('Profile saved:', profileType === 'gig-poster' ? gigPosterProfile : freelancerProfile);
    };

    if (!profileType) {
        // Profile Type Selection
        return (
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <UserCircleIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Your Profile</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Choose your profile type</p>
                    </div>
                </div>

                {/* Profile Type Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Gig Poster */}
                    <button
                        onClick={() => setProfileType('gig-poster')}
                        className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-left hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <BriefcaseIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gig Poster</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            I'm posting gigs and looking for talented freelancers to work with.
                        </p>
                        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-500">
                            <p>✓ Post projects and gigs</p>
                            <p>✓ Find freelancers for your needs</p>
                            <p>✓ Manage project budgets</p>
                        </div>
                    </button>

                    {/* Freelancer */}
                    <button
                        onClick={() => setProfileType('freelancer')}
                        className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-left hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg transition-all group"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <UserCircleIcon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Freelancer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            I'm a freelancer offering my skills and services to clients.
                        </p>
                        <div className="space-y-2 text-xs text-gray-500 dark:text-gray-500">
                            <p>✓ Showcase your skills and portfolio</p>
                            <p>✓ Get discovered by clients</p>
                            <p>✓ Set your rates and availability</p>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    // Gig Poster Profile Form
    if (profileType === 'gig-poster') {
        return (
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                            <BriefcaseIcon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Gig Poster Profile</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">@{user?.username}</p>
                        </div>
                    </div>
                    {!isEditing && (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                            <PencilIcon className="w-4 h-4" />
                            Edit
                        </button>
                    )}
                </div>

                {isEditing ? (
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Company/Organization Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={gigPosterProfile.companyName}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, companyName: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="e.g., Tech Startup Inc."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Industry *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={gigPosterProfile.industry}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, industry: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="e.g., Technology, Marketing, Design"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    value={gigPosterProfile.location}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, location: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="e.g., San Francisco, CA or Remote"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Typical Budget Range *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={gigPosterProfile.budget}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, budget: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="e.g., $500 - $5,000 per project"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Types of Projects You Post
                                </label>
                                <input
                                    type="text"
                                    value={gigPosterProfile.projectTypes}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, projectTypes: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="e.g., Video editing, Graphic design, Content writing"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    About Your Company
                                </label>
                                <textarea
                                    rows={4}
                                    value={gigPosterProfile.description}
                                    onChange={(e) => setGigPosterProfile({ ...gigPosterProfile, description: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 dark:text-white"
                                    placeholder="Tell freelancers about your company and the kind of work you need..."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                            Save Profile
                        </button>
                    </form>
                ) : (
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Company Name</h3>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{gigPosterProfile.companyName}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Industry</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{gigPosterProfile.industry}</p>
                        </div>
                        {gigPosterProfile.location && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h3>
                                <p className="text-gray-900 dark:text-white mt-1">{gigPosterProfile.location}</p>
                            </div>
                        )}
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget Range</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{gigPosterProfile.budget}</p>
                        </div>
                        {gigPosterProfile.projectTypes && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Types</h3>
                                <p className="text-gray-900 dark:text-white mt-1">{gigPosterProfile.projectTypes}</p>
                            </div>
                        )}
                        {gigPosterProfile.description && (
                            <div>
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">About</h3>
                                <p className="text-gray-900 dark:text-white mt-1">{gigPosterProfile.description}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // Freelancer Profile Form
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                        <UserCircleIcon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Freelancer Profile</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">@{user?.username}</p>
                    </div>
                </div>
                {!isEditing && (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                    >
                        <PencilIcon className="w-4 h-4" />
                        Edit
                    </button>
                )}
            </div>

            {isEditing ? (
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Display Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={freelancerProfile.displayName}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, displayName: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="e.g., John Designer"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Skills *
                            </label>
                            <input
                                type="text"
                                required
                                value={freelancerProfile.skills}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, skills: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="e.g., Video Editing, Graphic Design, React Development"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Years of Experience *
                            </label>
                            <input
                                type="text"
                                required
                                value={freelancerProfile.experience}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, experience: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="e.g., 5 years"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Hourly Rate *
                            </label>
                            <input
                                type="text"
                                required
                                value={freelancerProfile.hourlyRate}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, hourlyRate: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="e.g., $50/hour"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Availability
                            </label>
                            <input
                                type="text"
                                value={freelancerProfile.availability}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, availability: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="e.g., Full-time, Part-time, Weekends only"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Portfolio URL
                            </label>
                            <input
                                type="url"
                                value={freelancerProfile.portfolio}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, portfolio: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="https://your-portfolio.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Bio
                            </label>
                            <textarea
                                rows={4}
                                value={freelancerProfile.bio}
                                onChange={(e) => setFreelancerProfile({ ...freelancerProfile, bio: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
                                placeholder="Tell clients about your experience, what you do best, and why they should hire you..."
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-colors"
                    >
                        Save Profile
                    </button>
                </form>
            ) : (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Display Name</h3>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{freelancerProfile.displayName}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Skills</h3>
                        <p className="text-gray-900 dark:text-white mt-1">{freelancerProfile.skills}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Experience</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{freelancerProfile.experience}</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Hourly Rate</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{freelancerProfile.hourlyRate}</p>
                        </div>
                    </div>
                    {freelancerProfile.availability && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Availability</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{freelancerProfile.availability}</p>
                        </div>
                    )}
                    {freelancerProfile.portfolio && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Portfolio</h3>
                            <a href={freelancerProfile.portfolio} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline mt-1 block">
                                {freelancerProfile.portfolio}
                            </a>
                        </div>
                    )}
                    {freelancerProfile.bio && (
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Bio</h3>
                            <p className="text-gray-900 dark:text-white mt-1">{freelancerProfile.bio}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Profile;
