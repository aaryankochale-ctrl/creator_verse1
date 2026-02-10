
import React from 'react';
import {
  HomeIcon,
  SparklesIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  UserCircleIcon,
  FireIcon
} from '@heroicons/react/24/outline';

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Home', icon: HomeIcon },
  { id: 'trending', label: 'Trending', icon: FireIcon },
  { id: 'ai-hub', label: 'AI Hub', icon: SparklesIcon },
  { id: 'marketplace', label: 'Gigs', icon: BriefcaseIcon },
  { id: 'messages', label: 'Chats', icon: ChatBubbleLeftRightIcon },
  { id: 'profile', label: 'Profile', icon: UserCircleIcon },
];
