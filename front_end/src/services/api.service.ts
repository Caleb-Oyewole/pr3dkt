/**
 * API Service for pr3dkt
 * Handles all backend communication
 */

import { API_ENDPOINTS, API_TIMEOUT, API_RETRY_ATTEMPTS, API_RETRY_DELAY } from '../config/api';
import {
    ApiError,
    ApiResponse,
    Champion,
    GameState,
    PredictionResponse,
    MovePredictionRequest,
    MovePredictionResponse,
    GameRecord,
    MoveHistory,
    ChampionMetaData,
    SynergyData,
} from '../types/api';

class ApiService {
    private retryAttempts = API_RETRY_ATTEMPTS;
    private retryDelay = API_RETRY_DELAY;
    private timeout = API_TIMEOUT;

    /**
     * Make HTTP request with retry logic
     */
    private async request<T>(
        url: string,
        options: RequestInit = {},
        attempt = 0
    ): Promise<T> {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);

        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers,
                },
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                const error = await this.parseError(response);
                throw new ApiError(response.status, error.message, error.details);
            }

            const data = await response.json();
            return data as T;
        } catch (error) {
            clearTimeout(timeoutId);

            if (error instanceof ApiError) {
                throw error;
            }

            // Retry logic for network errors
            if (attempt < this.retryAttempts - 1) {
                await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                return this.request<T>(url, options, attempt + 1);
            }

            throw new ApiError(
                500,
                error instanceof Error ? error.message : 'Unknown error occurred',
                { originalError: error }
            );
        }
    }

    /**
     * Parse error response
     */
    private async parseError(response: Response) {
        try {
            const body = await response.json();
            return {
                message: body.message || response.statusText,
                details: body.details || {},
            };
        } catch {
            return {
                message: response.statusText,
                details: {},
            };
        }
    }

    // ==================== Prediction APIs ====================

    /**
     * Predict next champion pick based on game state
     */
    async predictNextChampion(gameState: GameState): Promise<PredictionResponse> {
        return this.request<PredictionResponse>(API_ENDPOINTS.PREDICT_NEXT_CHAMPION, {
            method: 'POST',
            body: JSON.stringify(gameState),
        });
    }

    /**
     * Predict next game move based on previous moves
     */
    async predictNextMove(request: MovePredictionRequest): Promise<MovePredictionResponse> {
        return this.request<MovePredictionResponse>(API_ENDPOINTS.PREDICT_MOVE, {
            method: 'POST',
            body: JSON.stringify(request),
        });
    }

    // ==================== Game State APIs ====================

    /**
     * Analyze current game state
     */
    async analyzeGameState(gameState: GameState): Promise<ApiResponse<unknown>> {
        return this.request<ApiResponse<unknown>>(API_ENDPOINTS.ANALYZE_GAME_STATE, {
            method: 'POST',
            body: JSON.stringify(gameState),
        });
    }

    /**
     * Get current game state
     */
    async getGameState(gameId?: string): Promise<GameState> {
        const url = gameId ? `${API_ENDPOINTS.GET_GAME_STATE}?gameId=${gameId}` : API_ENDPOINTS.GET_GAME_STATE;
        return this.request<GameState>(url, { method: 'GET' });
    }

    // ==================== History APIs ====================

    /**
     * Get game history
     */
    async getGameHistory(limit = 10, offset = 0): Promise<GameRecord[]> {
        const url = `${API_ENDPOINTS.GET_GAME_HISTORY}?limit=${limit}&offset=${offset}`;
        return this.request<GameRecord[]>(url, { method: 'GET' });
    }

    /**
     * Get move history for a specific game
     */
    async getMoveHistory(gameId: string): Promise<MoveHistory> {
        const url = `${API_ENDPOINTS.GET_MOVE_HISTORY}?gameId=${gameId}`;
        return this.request<MoveHistory>(url, { method: 'GET' });
    }

    // ==================== Champion APIs ====================

    /**
     * Get all champions
     */
    async getChampions(): Promise<Champion[]> {
        return this.request<Champion[]>(API_ENDPOINTS.GET_CHAMPION_DATA, { method: 'GET' });
    }

    /**
     * Get specific champion data
     */
    async getChampionData(championId: string | number): Promise<ChampionMetaData> {
        const url = API_ENDPOINTS.GET_CHAMPION_BY_ID(championId);
        return this.request<ChampionMetaData>(url, { method: 'GET' });
    }

    // ==================== Meta APIs ====================

    /**
     * Get current meta data
     */
    async getMetaData(): Promise<ChampionMetaData[]> {
        return this.request<ChampionMetaData[]>(API_ENDPOINTS.GET_META_DATA, { method: 'GET' });
    }

    /**
     * Get win rates for champions
     */
    async getWinRates(): Promise<Record<string, number>> {
        return this.request<Record<string, number>>(API_ENDPOINTS.GET_WIN_RATES, { method: 'GET' });
    }

    // ==================== Synergy APIs ====================

    /**
     * Get synergy between two champions
     */
    async getSynergy(champA: string, champB: string): Promise<SynergyData> {
        const url = `${API_ENDPOINTS.GET_SYNERGY}?champA=${champA}&champB=${champB}`;
        return this.request<SynergyData>(url, { method: 'GET' });
    }

    /**
     * Get synergy data for team composition
     */
    async getTeamSynergy(champions: string[]): Promise<SynergyData[]> {
        return this.request<SynergyData[]>(API_ENDPOINTS.GET_SYNERGY, {
            method: 'POST',
            body: JSON.stringify({ champions }),
        });
    }

    // ==================== Health Check ====================

    /**
     * Check if backend is available
     */
    async healthCheck(): Promise<boolean> {
        try {
            const response = await fetch(`${API_ENDPOINTS.GET_META_DATA.replace('/meta', '/health')}`, {
                method: 'GET',
                signal: AbortSignal.timeout(5000),
            });
            return response.ok;
        } catch {
            return false;
        }
    }
}

// Export singleton instance
export const apiService = new ApiService();

export default apiService;
