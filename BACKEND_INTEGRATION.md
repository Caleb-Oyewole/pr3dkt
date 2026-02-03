/**
 * Backend Integration Guide for pr3dkt
 * 
 * This document explains how the frontend connects to the backend API
 * and how to implement the corresponding backend endpoints.
 */

# Backend Integration for pr3dkt

## Overview

pr3dkt is a game move prediction application that uses an AI/ML backend to predict game moves based on previous games and current game state. The frontend (React + TypeScript) connects to a Python backend (Flask/FastAPI) that processes game data and returns predictions.

## Architecture

```
Frontend (React)
    ↓
API Service Layer (src/services/api.service.ts)
    ↓
HTTP Requests (JSON)
    ↓
Backend (Python Flask/FastAPI)
    ↓
ML Models / Database
    ↓
Game Predictions
```

## Frontend Structure

### Key Files

- **`src/services/api.service.ts`** - Main API service class with all backend endpoints
- **`src/types/api.ts`** - TypeScript interfaces for all API requests/responses
- **`src/hooks/useApi.ts`** - React hooks for data fetching with caching/error handling
- **`src/config/api.ts`** - API configuration and endpoint definitions
- **`src/config/constants.ts`** - Application constants and feature flags
- **`.env.example`** - Environment variables template

### Configuration

Create a `.env.local` file in the project root:

```env
# Backend API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000

# Enable real API calls (set to true when backend is ready)
VITE_ENABLE_REAL_API=false

# Debug mode
VITE_DEBUG=true
```

## Backend API Endpoints

The backend should implement the following endpoints:

### 1. Prediction Endpoints

#### POST `/api/predict/champion`
Predict the next champion to pick based on game state.

**Request:**
```json
{
  "blueTeam": [
    { "id": 1, "name": "Ahri", "role": "Mid", "image": "..." }
  ],
  "redTeam": [],
  "blueBans": [],
  "redBans": [],
  "currentPhase": "pick"
}
```

**Response:**
```json
{
  "predictions": [
    {
      "champion": "Orianna",
      "role": "Mid",
      "confidence": 94,
      "winRate": 56.8,
      "synergy": 92,
      "reasoning": "Strong synergy...",
      "matchups": {
        "good": ["Zed", "Talon"],
        "bad": ["Leblanc"],
        "neutral": ["Kassadin"]
      }
    }
  ],
  "topPick": { ... },
  "gameAnalysis": {
    "blueTeamStrength": 75,
    "redTeamStrength": 60,
    "recommendedRole": "Mid"
  },
  "timestamp": "2026-02-03T12:00:00Z"
}
```

#### POST `/api/predict/move`
Predict the next move based on game history.

**Request:**
```json
{
  "previousMoves": [
    {
      "timestamp": "2026-02-03T12:00:00Z",
      "action": "ban",
      "champion": "Yasuo",
      "team": "blue",
      "phase": 1
    }
  ],
  "currentGameState": { ... },
  "playerRole": "Mid"
}
```

**Response:**
```json
{
  "predictedMoves": [
    {
      "timestamp": "2026-02-03T12:00:05Z",
      "action": "pick",
      "champion": "Orianna",
      "team": "blue",
      "phase": 2
    }
  ],
  "confidence": 0.92,
  "reasoning": "Based on historical patterns..."
}
```

### 2. Game State Endpoints

#### POST `/api/game/analyze`
Analyze the current game state.

**Request:**
```json
{
  "blueTeam": [...],
  "redTeam": [...],
  "blueBans": [...],
  "redBans": [...],
  "currentPhase": "pick"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "analysis": "Detailed game analysis...",
    "strengths": ["Good engage", "High damage"],
    "weaknesses": ["Low CC", "Fragile backline"],
    "recommendations": ["Pick a tank", "Invest in vision"]
  },
  "timestamp": "2026-02-03T12:00:00Z"
}
```

#### GET `/api/game/state?gameId=optional`
Get the current or historical game state.

**Response:**
```json
{
  "blueTeam": [...],
  "redTeam": [...],
  "blueBans": [...],
  "redBans": [...],
  "currentPhase": "pick"
}
```

### 3. History Endpoints

#### GET `/api/history/games?limit=10&offset=0`
Get game history.

**Response:**
```json
[
  {
    "id": "game-123",
    "timestamp": "2026-02-03T11:00:00Z",
    "blueTeam": ["Ahri", "Lee Sin", "Thresh"],
    "redTeam": ["Syndra", "Elise", "Braum"],
    "winner": "blue",
    "duration": 1800,
    "startedAt": "2026-02-03T10:00:00Z"
  }
]
```

#### GET `/api/history/moves?gameId=game-123`
Get move history for a specific game.

**Response:**
```json
{
  "gameId": "game-123",
  "moves": [
    {
      "timestamp": "2026-02-03T10:00:05Z",
      "action": "ban",
      "champion": "Yasuo",
      "team": "blue",
      "phase": 1
    }
  ],
  "duration": 1800
}
```

### 4. Champion Data Endpoints

#### GET `/api/champions`
Get all champions with basic information.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Ahri",
    "role": "Mid",
    "image": "...",
    "tier": "S",
    "pickRate": 12.5,
    "banRate": 8.3,
    "winRate": 52.1
  }
]
```

#### GET `/api/champions/{championId}`
Get detailed champion meta data.

**Response:**
```json
{
  "championId": 1,
  "name": "Ahri",
  "role": "Mid",
  "pickRate": 12.5,
  "banRate": 8.3,
  "winRate": 52.1,
  "kda": {
    "kills": 5.2,
    "deaths": 4.1,
    "assists": 8.3
  },
  "itemBuilds": [
    {
      "name": "AP Burst",
      "items": ["Ludens", "Deathcap", "Void Staff"],
      "frequency": 45.2,
      "winRate": 54.3
    }
  ],
  "runePaths": [
    {
      "primary": "Electrocute",
      "secondary": "Precision",
      "frequency": 60.1,
      "winRate": 53.8
    }
  ]
}
```

### 5. Meta Data Endpoints

#### GET `/api/meta`
Get current meta data for all champions.

**Response:**
```json
[
  {
    "championId": 1,
    "name": "Ahri",
    "role": "Mid",
    "pickRate": 12.5,
    "banRate": 8.3,
    "winRate": 52.1,
    ...
  }
]
```

#### GET `/api/meta/win-rates`
Get win rates for all champions.

**Response:**
```json
{
  "Ahri": 52.1,
  "Syndra": 50.3,
  "Viktor": 48.9,
  ...
}
```

### 6. Synergy Endpoints

#### GET `/api/synergy?champA=Ahri&champB=LeeSin`
Get synergy data between two champions.

**Response:**
```json
{
  "champA": "Ahri",
  "champB": "LeeSin",
  "synergy": 85,
  "winRateTogether": 54.2,
  "commonBuilds": [...]
}
```

#### POST `/api/synergy`
Get synergy data for a team composition.

**Request:**
```json
{
  "champions": ["Ahri", "LeeSin", "Thresh", "Jinx", "Darius"]
}
```

**Response:**
```json
[
  { "champA": "Ahri", "champB": "LeeSin", "synergy": 85, ... },
  { "champA": "Ahri", "champB": "Thresh", "synergy": 88, ... },
  ...
]
```

### 7. Health Check

#### GET `/api/health`
Check if backend is available.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-02-03T12:00:00Z"
}
```

## Error Handling

All endpoints should return errors in this format:

```json
{
  "success": false,
  "error": "Error message",
  "details": {
    "field": "error details"
  },
  "timestamp": "2026-02-03T12:00:00Z"
}
```

HTTP Status Codes:
- `200` - Success
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Server Error
- `503` - Service Unavailable

## Frontend Usage

### Using Hooks

```tsx
import { usePredictChampion, useGameHistory } from '@/hooks/useApi';

function MyComponent() {
  const { data, isLoading, error } = usePredictChampion(gameState);
  const gameHistory = useGameHistory(10, 0);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{JSON.stringify(data)}</div>;
}
```

### Using API Service Directly

```tsx
import { apiService } from '@/services/api.service';

async function predictChampion() {
  try {
    const predictions = await apiService.predictNextChampion(gameState);
    console.log(predictions);
  } catch (error) {
    console.error('Prediction failed:', error);
  }
}
```

## Environment Variables

### Development

```env
VITE_API_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000
VITE_ENABLE_REAL_API=true
VITE_DEBUG=true
```

### Production

```env
VITE_API_URL=https://api.pr3dkt.com/api
VITE_BACKEND_URL=https://api.pr3dkt.com
VITE_ENABLE_REAL_API=true
VITE_DEBUG=false
```

## CORS Configuration

The backend should configure CORS to allow requests from the frontend:

```python
# Flask example
from flask_cors import CORS
CORS(app, origins=["http://localhost:3000", "http://localhost:5173", "https://pr3dkt.com"])
```

## Performance Optimization

1. **Request Caching** - Implement caching for `/meta` and `/champions` endpoints
2. **Rate Limiting** - Implement rate limiting for prediction endpoints
3. **Pagination** - Use limit/offset for history endpoints
4. **Compression** - Enable gzip compression for responses

## Testing

### Frontend Testing

```bash
npm run dev  # Start development server
```

The frontend will run on `http://localhost:5173` and make requests to `http://localhost:5000/api` by default.

### Backend Testing

Ensure your backend is running and responding to health checks:

```bash
curl http://localhost:5000/api/health
```

## Troubleshooting

### API Connection Issues

1. Check if backend is running: `curl http://localhost:5000/api/health`
2. Verify CORS is configured correctly
3. Check `.env.local` has correct API URL
4. Open browser DevTools Network tab to inspect requests

### Data Issues

1. Ensure request format matches API spec
2. Check response status codes
3. Log request/response in `src/services/api.service.ts`

## Next Steps

1. Implement backend endpoints in Python (Flask/FastAPI)
2. Set `VITE_ENABLE_REAL_API=true` in `.env.local`
3. Test each endpoint with the frontend
4. Deploy to production

## Support

For questions about the frontend integration, check:
- `src/services/api.service.ts` - All API methods
- `src/hooks/useApi.ts` - React hooks for data fetching
- `src/types/api.ts` - TypeScript type definitions
