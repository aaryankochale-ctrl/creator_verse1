
export enum UserRole {
  CREATOR = 'CREATOR',
  FREELANCER = 'FREELANCER',
  BRAND = 'BRAND'
}

export enum ProjectStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface UserProfile {
  id: string;
  name: string;
  role: UserRole;
  avatar: string;
  niche?: string;
  platforms?: string[];
  stats?: {
    followers: number;
    engagement: number;
  };
  skills?: string[];
  rate?: string;
  company?: string;
  bio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budget: string;
  brandId: string;
  status: ProjectStatus;
  category: string;
  postedDate: string;
}

export interface AIInsight {
  title: string;
  description: string;
  type: 'TREND' | 'IDEA' | 'GROWTH';
  score?: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
