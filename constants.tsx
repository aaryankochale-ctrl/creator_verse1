
import React from 'react';
import { 
  HomeIcon, 
  SparklesIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';
import { UserRole, UserProfile, Project, ProjectStatus } from './types';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: HomeIcon },
  { id: 'ai-hub', label: 'AI Hub', icon: SparklesIcon },
  { id: 'marketplace', label: 'Gigs', icon: BriefcaseIcon },
  { id: 'messages', label: 'Chats', icon: ChatBubbleLeftRightIcon },
  { id: 'profile', label: 'Profile', icon: UserCircleIcon },
];

export const MOCK_USER: UserProfile = {
  id: 'u1',
  name: 'Alex Rivera',
  role: UserRole.CREATOR,
  avatar: 'https://picsum.photos/seed/alex/200',
  niche: 'Tech & Lifestyle',
  platforms: ['YouTube', 'Instagram', 'TikTok'],
  stats: {
    followers: 125000,
    engagement: 4.8
  },
  bio: 'Content creator focusing on future tech and minimal productivity setups.'
};

export const MOCK_FREELANCERS: UserProfile[] = [
  {
    id: 'f1',
    name: 'Sarah Chen',
    role: UserRole.FREELANCER,
    avatar: 'https://picsum.photos/seed/sarah/200',
    skills: ['Video Editing', 'Motion Graphics'],
    rate: '$50/hr',
    bio: 'Specializing in cinematic transitions and color grading for YouTubers.'
  },
  {
    id: 'f2',
    name: 'Marcus Thorne',
    role: UserRole.FREELANCER,
    avatar: 'https://picsum.photos/seed/marcus/200',
    skills: ['Social Media Copy', 'SEO'],
    rate: '$35/hr',
    bio: 'Helping creators rank higher and convert subscribers with killer copy.'
  }
];

export const MOCK_GIGS: Project[] = [
  {
    id: 'p1',
    title: 'Short Form Video Editor Needed',
    description: 'Looking for someone to repurpose long-form YouTube videos into TikTok/Reels.',
    budget: '$500 - $1000',
    brandId: 'b1',
    status: ProjectStatus.OPEN,
    category: 'Editing',
    postedDate: '2024-05-15'
  },
  {
    id: 'p2',
    title: 'Tech Review Scriptwriter',
    description: 'Ongoing work for a tech channel. Need deep research and engaging hooks.',
    budget: '$200/script',
    brandId: 'b2',
    status: ProjectStatus.OPEN,
    category: 'Writing',
    postedDate: '2024-05-14'
  }
];
