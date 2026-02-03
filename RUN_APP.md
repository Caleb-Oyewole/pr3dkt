# 🚀 Complete Guide to Run pr3dkt Application

## Project Structure
```
pr3dkt/
├── front_end/          ← React + TypeScript + Vite (Port 5173)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── back_end/           ← Python Flask API (Port 5000)
│   ├── app.py
│   ├── requirements.txt
│   └── APIs.py
└── [config files]
```

## Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **Git** - [Download](https://git-scm.com/)

## Step 1: Clone/Navigate to Project

```bash
cd c:\Users\USER\projects\pr3dkt
```

## Step 2: Setup & Run Backend (Python Flask)

### 2.1 Create Python Virtual Environment

**Windows (Command Prompt):**
```cmd
python -m venv venv
venv\Scripts\activate
```

**Windows (PowerShell):**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 2.2 Install Backend Dependencies

```bash
cd back_end
pip install -r requirements.txt
```

### 2.3 Start Backend Server

```bash
python app.py
```

Or if the entry point is different:
```bash
python SETUP.py
```

**Expected Output:**
```
 * Running on http://127.0.0.1:5000
 * Debug mode: on
```

⚠️ **Keep this terminal open!** The backend runs on **http://localhost:5000**

---

## Step 3: Setup & Run Frontend (React + Vite)

### 3.1 Open New Terminal/Command Prompt

Keep the backend running and open a **new** terminal window.

### 3.2 Navigate to Frontend Directory

```bash
cd c:\Users\USER\projects\pr3dkt\front_end
```

### 3.3 Install Frontend Dependencies

**Using npm (recommended):**
```bash
npm install
```

**Or using pnpm (faster):**
```bash
pnpm install
```

### 3.4 Start Frontend Development Server

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

**Expected Output:**
```
  Local:    http://localhost:5173/
  press h to show help
```

---

## Step 4: Access the Application

1. **Frontend:** Open browser to `http://localhost:5173`
2. **Backend API:** Available at `http://localhost:5000`
3. Both services should now be running simultaneously

---

## Full App Running Checklist

- ✅ Backend running on `http://localhost:5000` (Terminal 1)
- ✅ Frontend running on `http://localhost:5173` (Terminal 2)
- ✅ Backend is accessible from frontend for API calls
- ✅ Frontend displays in browser with hot reload enabled

---

## Automated Setup (Optional)

### Windows Batch Script

```cmd
setup.bat
```

This script will:
- Navigate to front_end directory
- Install npm dependencies
- Start the development server

### macOS/Linux Shell Script

```bash
bash setup.sh
```

---

## NPM Scripts Reference

In the `front_end` directory:

```bash
npm run dev       # Start development server with Vite (http://localhost:5173)
npm run build     # Build for production
npm run lint      # Run ESLint checks
npm run preview   # Preview production build locally
npm start         # Start with auto-open in browser at port 3000
```

---

## Python Scripts Reference

In the `back_end` directory:

```bash
python app.py     # Start Flask development server
python APIs.py    # (If this is the main entry point)
```

---

## Troubleshooting

### Backend Issues

**Error: "Port 5000 already in use"**
```bash
# Kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5000 | xargs kill -9
```

**Error: "Module not found"**
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

### Frontend Issues

**Error: "npm: command not found"**
```bash
# Check Node.js installation
node --version
npm --version

# Reinstall Node.js if needed
```

**Error: "Port 5173 already in use"**
```bash
# Use a different port
npm run dev -- --port 3000
```

**Vite not compiling TypeScript**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run dev
```

---

## CORS Configuration

The backend is configured with CORS enabled in `app.py`:
```python
from flask_cors import CORS
CORS(app)
```

This allows the frontend to make requests to the backend API.

---

## Development Workflow

1. **Backend Development:** Edit files in `back_end/` → Flask hot-reloads automatically
2. **Frontend Development:** Edit files in `front_end/src/` → Vite hot-reloads automatically
3. **Commit Changes:** 
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

---

## Build for Production

### Frontend Production Build

```bash
cd front_end
npm run build
```

This generates a `dist/` folder with optimized static files.

### Backend Production

For production deployment, consider using:
- Gunicorn (WSGI server)
- Heroku, AWS, or DigitalOcean

```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

---

## Environment Variables

Create `.env` files if needed:

**front_end/.env** (optional for API URL):
```env
VITE_API_URL=http://localhost:5000
```

**back_end/.env** (if using python-dotenv):
```env
FLASK_ENV=development
FLASK_DEBUG=1
API_PORT=5000
```

---

## Quick Start Command (All-in-One)

**Terminal 1 (Backend):**
```bash
cd c:\Users\USER\projects\pr3dkt\back_end && python -m venv venv && venv\Scripts\activate && pip install -r requirements.txt && python app.py
```

**Terminal 2 (Frontend):**
```bash
cd c:\Users\USER\projects\pr3dkt\front_end && npm install && npm run dev
```

---

## Need Help?

- Check individual project README files
- Review error logs in both terminals
- Verify ports 5000 and 5173 are not in use
- Ensure all dependencies are installed correctly

🎉 Your pr3dkt application is now running!
