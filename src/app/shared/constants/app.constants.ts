/**
 * Application Constants
 */

export const APP_CONFIG = {
  apiBaseUrl: '/api',
  environment: 'development',
  version: '4.0.0'
};

export const SKILL_CATEGORIES = {
  FRONTEND: 'frontend',
  BACKEND: 'backend',
  DEVOPS: 'devops',
  OTHER: 'other'
} as const;

export const SKILL_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
} as const;
