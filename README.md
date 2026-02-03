# pr3dkt - Game Move Predictor

## 📋 Overview

**pr3dkt** is a web application that uses AI/ML to predict optimal game moves and champion picks based on:
- Previous game history
- Current game state (team compositions, bans, picks)
- Meta data and win rates
- Champion synergies and matchups

The application consists of:
- **Frontend**: React + TypeScript with Vite (src/)
- **Backend**: Python Flask/FastAPI (back_end/)

## 🚀 Getting Started

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server (port 3000 or 5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Backend Setup

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r back_end/requirements.txt

# Run development server
python back_end/app_template.py
```

## 📁 Project Structure

```
pr3dkt/
├── src/
│   ├── components/          # React components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   │   ├── useApi.ts       # API data fetching hooks (NEW)
│   │   └── useQueries.ts   # Query utilities
│   ├── services/            # API services
│   │   ├── api.service.ts  # Main API service (NEW)
│   │   └── integration.ts  # Backend integration (NEW)
│   ├── types/               # TypeScript types
│   │   └── api.ts          # API type definitions (NEW)
│   ├── config/              # Configuration
│   │   ├── api.ts          # API config (NEW)
│   │   └── constants.ts    # App constants (NEW)
│   ├── lib/                 # Utilities
│   └── assets/              # Static assets
├── back_end/
│   ├── APIs.py              # Original (empty)
│   ├── app_template.py      # Flask app template (NEW)
│   ├── requirements.txt      # Python dependencies (NEW)
│   ├── SETUP.py            # Setup instructions (NEW)
│   └── models/             # ML models (TO IMPLEMENT)
├── public/                  # Static assets
├── .env.example             # Environment variables template (NEW)
├── package.json             # Frontend dependencies
├── BACKEND_INTEGRATION.md   # API documentation (NEW)
└── vite.config.ts           # Vite configuration
```

## 🔌 API Integration

### Frontend API Service

The frontend has a complete API service layer that handles all backend communication:

- **`src/services/api.service.ts`** - Main API service with methods for all endpoints
- **`src/hooks/useApi.ts`** - React hooks for data fetching with caching
- **`src/types/api.ts`** - TypeScript type definitions for requests/responses
- **`src/config/api.ts`** - API endpoint configuration

### Backend API Endpoints

The backend should implement these endpoints. See [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) for full documentation:

- `POST /api/predict/champion` - Predict next champion pick
- `POST /api/predict/move` - Predict next move
- `POST /api/game/analyze` - Analyze current game state
- `GET /api/game/state` - Get game state
- `GET /api/history/games` - Get game history
- `GET /api/history/moves` - Get move history
- `GET /api/champions` - Get all champions
- `GET /api/champions/:id` - Get champion details
- `GET /api/meta` - Get meta data
- `GET /api/synergy` - Get synergy between champions
- `GET /api/health` - Health check

## ⚙️ Configuration

Create `.env.local` in the root directory:

```env
VITE_API_URL=http://localhost:5000/api
VITE_BACKEND_URL=http://localhost:5000
VITE_ENABLE_REAL_API=false
VITE_DEBUG=true
```

## 🔄 Using the API

### Using Hooks (Recommended)

```tsx
import { usePredictChampion, useGameHistory } from '@/hooks/useApi';

function MyComponent() {
  const { data, isLoading, error } = usePredictChampion(gameState);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.predictions[0].champion}</div>;
}
```

### Using API Service Directly

```tsx
import { apiService } from '@/services/api.service';

async function predict() {
  try {
    const predictions = await apiService.predictNextChampion(gameState);
    console.log(predictions);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 🎨 Features

### Frontend
- ✅ Responsive design with Tailwind CSS
- ✅ Dark mode support
- ✅ Smooth animations with Framer Motion
- ✅ Hero section with CTAs
- ✅ Game state visualization
- ✅ Move history section
- ✅ Prediction section with stats
- ✅ Complete API integration layer

### Backend (TO IMPLEMENT)
- ☐ Champion prediction ML model
- ☐ Move prediction ML model
- ☐ Game state analysis
- ☐ Meta data service
- ☐ Synergy calculations
- ☐ Database integration
- ☐ Caching layer

## 📊 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Framer Motion
- Recharts

### Backend
- Python
- Flask/FastAPI
- scikit-learn
- pandas
- PostgreSQL/MongoDB
- SQLAlchemy

## 🧪 Testing

```bash
npm run lint        # Run ESLint
npm run build       # Build check
```

## 📚 Documentation

- [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) - Complete API documentation
- [back_end/SETUP.py](./back_end/SETUP.py) - Backend setup guide

## 📞 Support

For questions:
1. Check [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md)
2. Review [back_end/SETUP.py](./back_end/SETUP.py)
3. Open an issue on GitHub

---

**Happy predicting! 🎮**
