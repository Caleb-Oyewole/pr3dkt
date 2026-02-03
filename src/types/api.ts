/**
 * API Type Definitions for pr3dkt
 */

// Champion Information
export interface Champion {
    id: number;
    name: string;
    role: string;
    image: string;
    tier?: string;
    pickRate?: number;
    banRate?: number;
    winRate?: number;
}

// Game State
export interface GameState {
    blueTeam: Champion[];
    redTeam: Champion[];
    blueBans: Champion[];
    redBans: Champion[];
    currentPhase: 'pick' | 'ban' | 'game' | 'finished';
    turn?: 'blue' | 'red';
}

// Prediction Response
export interface Prediction {
    champion: string;
    role: string;
    confidence: number;
    winRate: number;
    synergy: number;
    reasoning: string;
    matchups?: {
        good: string[];
        bad: string[];
        neutral: string[];
    };
}

export interface PredictionResponse {
    predictions: Prediction[];
    topPick: Prediction;
    gameAnalysis: {
        blueTeamStrength: number;
        redTeamStrength: number;
        recommendedRole: string;
    };
    timestamp: string;
}

// Move Prediction
export interface MovePredictionRequest {
    previousMoves: GameMove[];
    currentGameState: GameState;
    playerRole?: string;
}

export interface GameMove {
    timestamp: string;
    action: 'pick' | 'ban';
    champion: string;
    team: 'blue' | 'red';
    phase: number;
}

export interface MovePredictionResponse {
    predictedMoves: GameMove[];
    confidence: number;
    reasoning: string;
}

// Game History
export interface GameRecord {
    id: string;
    timestamp: string;
    blueTeam: string[];
    redTeam: string[];
    winner: 'blue' | 'red';
    duration: number;
    startedAt: string;
}

export interface MoveHistory {
    gameId: string;
    moves: GameMove[];
    duration: number;
}

// Meta Data
export interface ChampionMetaData {
    championId: number;
    name: string;
    role: string;
    pickRate: number;
    banRate: number;
    winRate: number;
    kda: {
        kills: number;
        deaths: number;
        assists: number;
    };
    itemBuilds: ItemBuild[];
    runePaths: RunePath[];
}

export interface ItemBuild {
    name: string;
    items: string[];
    frequency: number;
    winRate: number;
}

export interface RunePath {
    primary: string;
    secondary: string;
    frequency: number;
    winRate: number;
}

// Synergy
export interface SynergyData {
    champA: string;
    champB: string;
    synergy: number; // 0-100
    winRateTogether: number;
    commonBuilds: ItemBuild[];
}

// API Response Wrapper
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
    timestamp: string;
}

// API Error
export class ApiError extends Error {
    constructor(
        public statusCode: number,
        message: string,
        public details?: Record<string, unknown>
    ) {
        super(message);
        this.name = 'ApiError';
    }
}
