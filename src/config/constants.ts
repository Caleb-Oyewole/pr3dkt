/**
 * Environment variables and constants
 */

// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

// Feature Flags
export const ENABLE_REAL_API = import.meta.env.VITE_ENABLE_REAL_API === 'true';
export const DEBUG_MODE = import.meta.env.VITE_DEBUG === 'true';

// Game Configuration
export const GAME_ROLES = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'] as const;
export const DRAFT_PHASES = ['ban', 'pick'] as const;

// UI Configuration
export const ANIMATION_DURATION = 300; // ms
export const DEBOUNCE_DELAY = 300; // ms
