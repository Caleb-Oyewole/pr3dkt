/**
 * Integration module for backend connectivity
 * This module handles the connection between frontend and backend services
 */

import { apiService } from './api.service';
import { ENABLE_REAL_API } from '../config/constants';

/**
 * Initialize API service with environment-specific configuration
 */
export function initializeApiService() {
    // Log API configuration in debug mode
    if (import.meta.env.DEV) {
        console.log('API Service initialized:', {
            enabled: ENABLE_REAL_API,
            baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
        });
    }

    return apiService;
}

/**
 * Check backend connectivity
 */
export async function checkBackendConnection() {
    try {
        const isHealthy = await apiService.healthCheck();
        return {
            connected: isHealthy,
            message: isHealthy ? 'Backend connected' : 'Backend unavailable',
        };
    } catch (error) {
        return {
            connected: false,
            message: 'Failed to connect to backend',
            error: error instanceof Error ? error.message : String(error),
        };
    }
}

export default initializeApiService();
