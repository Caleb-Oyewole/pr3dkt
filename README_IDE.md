# pr3dkt - JetBrains IDE + Cloud9 Development Environment

A professional game prediction web application with integrated development environment aesthetics, featuring real-time collaboration and cloud synchronization.

## 🎯 Features

### IDE Aesthetic
- **JetBrains IntelliJ Color Scheme** - Professional dark theme optimized for code visibility
- **Cloud9 Collaboration** - Real-time team development environment
- **Professional Typography** - JetBrains Mono (code) + Inter (UI)
- **Smooth Animations** - IDE-specific transitions and effects
- **Modern Layout** - Multi-panel interface with sidebar, editor, and console

### Development Features
- **Command Palette** - Quick access to all features (Cmd/Ctrl+K)
- **File Explorer** - Project structure navigation
- **Code Editor** - Syntax-highlighted code display
- **Terminal/Console** - Real-time development output
- **Status Bar** - File info, line/column, connection status
- **Settings Panel** - Theme, editor, and behavior customization

### Collaboration Features
- **Live Indicators** - Real-time connection status
- **Collaborators Panel** - View active team members
- **Cloud Chat** - Team communication
- **Cloud Sync** - Automatic file synchronization
- **Activity History** - Track recent changes

### Game Prediction Features
- **AI Move Prediction** - Machine learning-based predictions
- **Game State Analysis** - Real-time game evaluation
- **Champion Meta** - Up-to-date champion statistics
- **Team Synergy** - Composition analysis and recommendations
- **Game History** - Past predictions and results

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone <repo>
cd pr3dkt

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local

# Start development server
npm run dev
```

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl+K` | Open Command Palette |
| `Cmd/Ctrl+N` | New Game State |
| `Cmd/Ctrl+P` | Predict Next Move |
| `Cmd/Ctrl+H` | View History |
| `Cmd/Ctrl+S` | Sync to Cloud |
| `Cmd/Ctrl+,` | Open Settings |
| `Cmd/Ctrl+?` | Help & Documentation |

## 📁 Project Structure

```
pr3dkt/
├── src/
│   ├── components/
│   │   ├── IDEHeader.tsx           # Professional IDE header
│   │   ├── IDEDashboard.tsx        # Main IDE layout
│   │   ├── Cloud9Collaboration.tsx # Collaboration panel
│   │   ├── IDECommandPalette.tsx   # Command search/execute
│   │   ├── IDESettings.tsx         # Settings panel
│   │   ├── IDETerminal.tsx         # Terminal/console
│   │   ├── PredictionSection-API.tsx
│   │   └── ui/
│   │       └── button.tsx
│   ├── services/
│   │   ├── api.service.ts          # API client
│   │   └── integration.ts          # Backend init
│   ├── hooks/
│   │   └── useApi.ts               # React hooks for API
│   ├── types/
│   │   └── api.ts                  # TypeScript types
│   ├── config/
│   │   ├── api.ts                  # API endpoints
│   │   └── constants.ts            # App constants
│   ├── pages/
│   │   └── LandingPage.tsx         # Main page
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # IDE styles & animations
│   ├── index.css                   # CSS variables
│   └── main.tsx
├── back_end/
│   ├── app_template.py             # Flask template
│   ├── requirements.txt            # Python dependencies
│   └── SETUP.py                    # Setup guide
├── tailwind.config.js              # Tailwind theme
├── vite.config.ts                  # Vite config
├── tsconfig.json                   # TypeScript config
├── IDE_GUIDE.md                    # Comprehensive IDE guide
├── BACKEND_INTEGRATION.md          # Backend API docs
├── QUICKSTART.md                   # Quick start guide
├── package.json                    # Dependencies
└── README.md                       # This file
```

## 🎨 Visual Design

### Color Palette

```css
Primary:      #3574F0 (JetBrains Blue)
Secondary:   #FF9D47 (JetBrains Orange)
Background:  #1e1e1e (Dark Editor)
Foreground:  #e8e8e8 (Light Text)
Muted:       #555555 (Secondary UI)
```

### Component Layout

#### IDEHeader
- Breadcrumb navigation
- Live connection indicator
- Cloud sync button
- Collaborators avatars
- Status bar with file info

#### IDEDashboard
- Left sidebar with file explorer
- Tab bar for open files
- Code editor area
- Bottom console panel
- Responsive collapsible sections

#### Cloud9Collaboration
- Collaborators list
- Chat panel
- Cloud sync status
- Activity history
- Storage usage

#### IDECommandPalette
- Command search
- Keyboard navigation
- Multiple command categories
- Quick execution

## 💻 Development

### Frontend Stack
- React 19 with TypeScript
- Tailwind CSS (OKLCH colors)
- Vite build tool
- Radix UI components
- Lucide React icons
- Framer Motion for animations

### Backend Stack (Template)
- Python Flask
- ML model integration ready
- API endpoint templates
- Requirements.txt prepared

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_API_TIMEOUT=30000
VITE_MOCK_API=true
VITE_ENABLE_COLLAB=true
```

### Tailwind Theme

Customize in `tailwind.config.js`:
- Colors (primary, secondary, backgrounds)
- Typography (fonts, sizes)
- Animations (sync, pulse, glow)
- Spacing and sizing

### CSS Variables

Edit `src/index.css`:
```css
:root {
  --background: 10.5% 0 0;      /* #1e1e1e */
  --foreground: 92% 0 0;        /* #e8e8e8 */
  --primary: 60% 0.2 220;       /* #3574F0 */
  --secondary: 50% 0.18 45;     /* #FF9D47 */
  /* ... more variables ... */
}
```

## 📚 Documentation

- **[IDE_GUIDE.md](IDE_GUIDE.md)** - Comprehensive IDE feature guide
- **[BACKEND_INTEGRATION.md](BACKEND_INTEGRATION.md)** - API documentation
- **[QUICKSTART.md](QUICKSTART.md)** - 5-minute setup guide
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - What was built

## 🔌 Backend Integration

The frontend is fully prepared to connect to a Python Flask backend:

1. **API Service** (`src/services/api.service.ts`) - Handles all API calls
2. **React Hooks** (`src/hooks/useApi.ts`) - Easy data fetching
3. **Type Definitions** (`src/types/api.ts`) - TypeScript support
4. **Backend Template** (`back_end/app_template.py`) - Flask skeleton

### API Endpoints Available

```
POST /api/predict/champion      # Predict champion move
POST /api/predict/move          # Predict next game move
GET  /api/meta                  # Champion meta statistics
GET  /api/synergy              # Team synergy analysis
POST /api/analyze              # Analyze game state
GET  /api/history              # Game history
GET  /api/health               # API health check
```

## 🚀 Deployment

### Frontend Deployment

```bash
# Build optimized production build
npm run build

# Deploy to Vercel, Netlify, or any static host
# The 'dist' folder contains all production assets
```

### Backend Deployment

See `back_end/SETUP.py` for Flask deployment instructions.

## 🎮 Game Prediction Features

### Prediction Engine
- Real-time move prediction using ML models
- Champion win rate analysis
- Team synergy scoring
- Meta-game awareness

### Game State Analysis
- Current team composition
- Enemy champion counters
- Objective prioritization
- Win probability estimation

### Historical Analytics
- Past prediction accuracy
- Trend analysis
- Performance metrics
- Improvement suggestions

## 🤝 Collaboration Features

### Real-time Collaboration
- Live cursor indicators
- Real-time file sync
- Team chat
- Activity history

### Cloud9 Integration
- Cloud storage
- Automatic backups
- Collaborator management
- Connection status

## 🔐 Security & Privacy

- Environment variables for sensitive data
- API endpoint validation
- CORS configuration
- Input sanitization
- Secure WebSocket connections (for live features)

## 📊 Performance

- Lazy-loaded components
- Optimized re-renders
- CSS animations (GPU-accelerated)
- Efficient state management
- Caching strategies for API responses

## 🐛 Troubleshooting

### Command Palette Not Opening
- Check keyboard shortcut (Cmd+K on Mac, Ctrl+K on Windows/Linux)
- Verify no browser extensions are blocking shortcuts
- Clear browser cache and refresh

### Collaboration Panel Missing
- Ensure window width is sufficient (1400px+)
- Check z-index conflicts in DevTools
- Verify Cloud9Collaboration is imported in App.tsx

### API Connection Issues
- Check `VITE_API_BASE_URL` in environment
- Verify backend is running on correct port
- Check browser console for CORS errors

### Animations Appearing Slow
- Check GPU acceleration in browser settings
- Reduce animation complexity on low-end devices
- Verify CSS animation-duration values

## 📝 License

[Add your license here]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions:
- Open a GitHub issue
- Contact the development team
- Check documentation in IDE_GUIDE.md

## 🎯 Roadmap

- [ ] Complete backend implementation
- [ ] Live collaboration with WebSockets
- [ ] AI chatbot integration
- [ ] Advanced debugging panel
- [ ] Git integration
- [ ] Theme marketplace
- [ ] Plugin system
- [ ] Mobile responsive design
- [ ] Dark/Light theme switcher
- [ ] Advanced analytics

## ✨ Credits

Built with:
- React 19
- TypeScript
- Tailwind CSS
- Vite
- JetBrains IntelliJ inspiration
- Cloud9 IDE aesthetic

---

**pr3dkt** - Where Game Prediction Meets Professional Development Environment
