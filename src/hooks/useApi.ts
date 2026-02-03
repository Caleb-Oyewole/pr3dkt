/**
 * Custom hooks for API data fetching
 */

import { useState, useEffect, useCallback } from 'react';
import { apiService } from '../services/api.service';
import { ApiError } from '../types/api';
import type {
    GameState,
    PredictionResponse,
    MovePredictionRequest,
    MovePredictionResponse,
    GameRecord,
    MoveHistory,
    ChampionMetaData,
    Champion,
    SynergyData,
} from '../types/api';

interface UseQueryState<T> {
    data: T | null;
    isLoading: boolean;
    error: ApiError | null;
    isError: boolean;
}

/**
 * Generic hook for fetching data
 */
function useQuery<T>(
    queryFn: () => Promise<T>,
    options = { enabled: true }
): UseQueryState<T> {
    const [state, setState] = useState<UseQueryState<T>>({
        data: null,
        isLoading: true,
        error: null,
        isError: false,
    });

    useEffect(() => {
        if (!options.enabled) return;

        let mounted = true;

        const fetchData = async () => {
            setState(prev => ({ ...prev, isLoading: true, isError: false }));
            try {
                const result = await queryFn();
                if (mounted) {
                    setState({
                        data: result,
                        isLoading: false,
                        error: null,
                        isError: false,
                    });
                }
            } catch (error) {
                if (mounted) {
                    const apiError = error instanceof ApiError ? error : new ApiError(500, String(error));
                    setState({
                        data: null,
                        isLoading: false,
                        error: apiError,
                        isError: true,
                    });
                }
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, [queryFn, options.enabled]);

    return state;
}

/**
 * Hook for predicting next champion
 */
export function usePredictChampion(gameState: GameState | null) {
    return useQuery(
        () => apiService.predictNextChampion(gameState!),
        { enabled: !!gameState }
    );
}

/**
 * Hook for predicting next move
 */
export function usePredictMove(request: MovePredictionRequest | null) {
    return useQuery(
        () => apiService.predictNextMove(request!),
        { enabled: !!request }
    );
}

/**
 * Hook for getting game history
 */
export function useGameHistory(limit = 10, offset = 0) {
    return useQuery(() => apiService.getGameHistory(limit, offset));
}

/**
 * Hook for getting move history
 */
export function useMoveHistory(gameId: string | null) {
    return useQuery(() => apiService.getMoveHistory(gameId!), { enabled: !!gameId });
}

/**
 * Hook for getting all champions
 */
export function useChampions() {
    return useQuery(() => apiService.getChampions());
}

/**
 * Hook for getting champion meta data
 */
export function useChampionData(championId: string | number | null) {
    return useQuery(() => apiService.getChampionData(championId!), { enabled: !!championId });
}

/**
 * Hook for getting meta data
 */
export function useMetaData() {
    return useQuery(() => apiService.getMetaData());
}

/**
 * Hook for getting win rates
 */
export function useWinRates() {
    return useQuery(() => apiService.getWinRates());
}

/**
 * Hook for getting synergy data
 */
export function useSynergy(champA: string | null, champB: string | null) {
    return useQuery(
        () => apiService.getSynergy(champA!, champB!),
        { enabled: !!champA && !!champB }
    );
}

/**
 * Hook for getting team synergy
 */
export function useTeamSynergy(champions: string[] | null) {
    return useQuery(
        () => apiService.getTeamSynergy(champions!),
        { enabled: !!champions && champions.length > 0 }
    );
}

/**
 * Hook for checking backend health
 */
export function useBackendHealth() {
    const [isHealthy, setIsHealthy] = useState(false);
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        const checkHealth = async () => {
            setIsChecking(true);
            const healthy = await apiService.healthCheck();
            setIsHealthy(healthy);
            setIsChecking(false);
        };

        checkHealth();
        // Check health every 30 seconds
        const interval = setInterval(checkHealth, 30000);

        return () => clearInterval(interval);
    }, []);

    return { isHealthy, isChecking };
}

/**
 * Hook for analyzing game state
 */
export function useAnalyzeGameState(gameState: GameState | null) {
    return useQuery(
        () => apiService.analyzeGameState(gameState!),
        { enabled: !!gameState }
    );
}

/**
 * Hook for getting game state
 */
export function useGameState(gameId?: string) {
    return useQuery(() => apiService.getGameState(gameId));
}

export default useQuery;
