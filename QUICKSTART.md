## pr3dkt - Quick Start Guide

### ⚡ 5-Minute Setup

#### Frontend

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local
echo "VITE_API_URL=http://localhost:5000/api" > .env.local
echo "VITE_BACKEND_URL=http://localhost:5000" >> .env.local
echo "VITE_DEBUG=true" >> .env.local

# 3. Start development server
npm run dev

# Frontend runs on http://localhost:5173
```

#### Backend

```bash
# 1. Create virtual environment
python -m venv venv

# 2. Activate (Windows)
venv\Scripts\activate

# 3. Activate (macOS/Linux)
source venv/bin/activate

# 4. Install dependencies
pip install -r back_end/requirements.txt

# 5. Start Flask app
python back_end/app_template.py

# Backend runs on http://localhost:5000
```

### 🔌 Connect Frontend to Backend

The frontend is **already set up** to connect to the backend! Here's what's included:

#### 1. **API Service** (`src/services/api.service.ts`)
   - Complete API client for all backend endpoints
   - Automatic retry logic
   - Error handling
   - Request/response validation

#### 2. **React Hooks** (`src/hooks/useApi.ts`)
   - Pre-built hooks for data fetching
   - Automatic loading/error states
   - Caching and refetching

   Usage:
   ```tsx
   import { usePredictChampion } from '@/hooks/useApi';
   
   function Component() {
     const { data, isLoading, error } = usePredictChampion(gameState);
     if (isLoading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;
     return <p>Prediction: {data.predictions[0].champion}</p>;
   }
   ```

#### 3. **Type Safety** (`src/types/api.ts`)
   - Full TypeScript interfaces for all API calls
   - Request/response validation
   - IDE autocomplete

#### 4. **Configuration** (`src/config/api.ts` & `.env.local`)
   - Centralized API endpoint configuration
   - Environment-based URLs
   - Easy to switch between local/production

### 📝 Backend Implementation

The backend template (`back_end/app_template.py`) has:
- ✅ Flask application structure
- ✅ All API endpoint skeletons
- ✅ Error handling
- ✅ CORS configuration
- ✅ Response formatting

**You need to add:**
1. Database connections
2. ML model implementations
3. Business logic for predictions
4. Data validation

See `back_end/SETUP.py` for detailed implementation guide.

### 🔄 API Flow Example

```
Frontend Component
    ↓
useApi Hook (src/hooks/useApi.ts)
    ↓
apiService.predict() (src/services/api.service.ts)
    ↓
HTTP POST /api/predict/champion
    ↓
Backend Flask App (back_end/app_template.py)
    ↓
ML Model
    ↓
JSON Response
    ↓
Frontend Updates UI
```

### 📚 Complete Documentation

- **API Endpoints**: See [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md)
- **Backend Setup**: See [back_end/SETUP.py](./back_end/SETUP.py)
- **Project Overview**: See [README.md](./README.md)
- **Implementation Details**: See [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)

### ✅ Checklist

**Frontend**
- [x] API service created
- [x] React hooks created
- [x] Types defined
- [x] Configuration set up
- [x] Components ready for API integration
- [x] Error handling in place
- [x] Mock data fallback

**Backend**
- [ ] Implement prediction endpoints
- [ ] Connect database
- [ ] Train/load ML models
- [ ] Add validation
- [ ] Deploy

### 🚀 Testing

**Test Frontend API Service**
```bash
npm run dev
# Open http://localhost:5173
# Check browser console for API calls
```

**Test Backend Health Check**
```bash
curl http://localhost:5000/api/health
# Should return: {"status": "healthy", ...}
```

**Test Prediction Endpoint** (once implemented)
```bash
curl -X POST http://localhost:5000/api/predict/champion \
  -H "Content-Type: application/json" \
  -d '{
    "blueTeam": [],
    "redTeam": [],
    "blueBans": [],
    "redBans": [],
    "currentPhase": "pick"
  }'
```

### 🆘 Troubleshooting

**Frontend can't connect to backend?**
1. Check backend is running: `curl http://localhost:5000/api/health`
2. Check VITE_API_URL in `.env.local`
3. Check CORS is enabled in Flask app
4. Check ports (frontend: 5173, backend: 5000)

**Frontend shows demo/mock data?**
- This is expected! The frontend uses mock data until you implement the backend
- Once backend is ready, it will automatically use real predictions

**Backend endpoints not found?**
- Verify `back_end/app_template.py` has the endpoint
- Check URL path matches (e.g., `/api/predict/champion`)
- Verify Flask app is running

### 📞 Need Help?

1. Check the [BACKEND_INTEGRATION.md](./BACKEND_INTEGRATION.md) for API details
2. Review [back_end/SETUP.py](./back_end/SETUP.py) for implementation steps
3. Check browser DevTools Network tab to inspect requests/responses
4. Review frontend component files for usage examples

---

**You're all set! Start building! 🎮**
