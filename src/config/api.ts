/**
 * API Configuration for pr3dkt
 * Manages backend API endpoints and configuration
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
    // Predictions
    PREDICT_MOVE: `${API_BASE_URL}/predict/move`,
    PREDICT_NEXT_CHAMPION: `${API_BASE_URL}/predict/champion`,

    // Game State
    ANALYZE_GAME_STATE: `${API_BASE_URL}/game/analyze`,
    GET_GAME_STATE: `${API_BASE_URL}/game/state`,

    // Game History
    GET_GAME_HISTORY: `${API_BASE_URL}/history/games`,
    GET_MOVE_HISTORY: `${API_BASE_URL}/history/moves`,

    // Champion Data
    GET_CHAMPION_DATA: `${API_BASE_URL}/champions`,
    GET_CHAMPION_BY_ID: (championId: string | number) => `${API_BASE_URL}/champions/${championId}`,

    // Meta Data
    GET_META_DATA: `${API_BASE_URL}/meta`,
    GET_WIN_RATES: `${API_BASE_URL}/meta/win-rates`,

    // Synergy
    GET_SYNERGY: `${API_BASE_URL}/synergy`,
} as const;

export const API_TIMEOUT = 30000; // 30 seconds
export const API_RETRY_ATTEMPTS = 3;
export const API_RETRY_DELAY = 1000; // 1 second
