# pr3dkt IDE - JetBrains & Cloud9 Aesthetic Guide

## Overview

pr3dkt now features a professional **JetBrains IntelliJ IDEA + Cloud9 IDE** aesthetic, providing a modern development environment for game move prediction with real-time collaboration and cloud synchronization.

## Visual Identity

### Color Scheme

The project uses JetBrains professional colors optimized for code editing and visual clarity:

- **Primary**: `#3574F0` - JetBrains Blue (for primary UI elements, highlights)
- **Secondary**: `#FF9D47` - JetBrains Orange (for accents, warnings)
- **Background**: `#1e1e1e` - Dark editor background (10.5% OKLCH)
- **Foreground**: `#e8e8e8` - Light readable text (92% OKLCH)
- **Muted**: `#555555` - Secondary UI elements (35% OKLCH)

### Typography

- **Code/Monospace**: `JetBrains Mono` - Professional monospace font for code display
- **UI/Sans**: `Inter` - Clean, readable sans-serif for interface elements
- Both fonts imported from Google Fonts via CSS

### Layout Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     IDE Header (IDEHeader)                   │
│  pr3dkt │ Breadcrumb │ ⚡Live │ ☁️ Sync │ 👥 Collab │ Status  │
├─────────────────────────────────────────────────────────────┤
│         │                                                    │
│ Explorer│                   Code Editor Area                 │ Cloud9
│         │  • Tab Bar (open files)                           │ Panel
│ (Sidebar)│  • Breadcrumb navigation                         │
│         │  • Syntax highlighted code                        │ (Right)
│         │  • Example content                                │
│         │                                                    │
├─────────────────────────────────────────────────────────────┤
│                  Console / Terminal Panel                    │
│  npm run dev • API connected • Ready for predictions         │
└─────────────────────────────────────────────────────────────┘
```

## Components

### 1. IDEHeader (`src/components/IDEHeader.tsx`)

Professional header with development environment UI.

**Features:**
- Breadcrumb file path navigation
- Live indicator (green pulsing dot)
- Cloud sync button with hover animation
- Collaboration avatars showing active users
- Secondary navigation tabs (Code/Collaborators/Cloud)
- Bottom status bar:
  - Encoding (UTF-8)
  - Line ending (LF)
  - Language (TypeScript JSX)
  - Line/Column position
  - Character count
  - Connection status
  - Current time

**Props:**
```tsx
interface IDEHeaderProps {
  onSync?: () => void;        // Callback for sync button
  isLive?: boolean;           // Live connection status
  collaborators?: string[];   // Active collaborators
}
```

**Usage:**
```tsx
<IDEHeader
  isLive={true}
  collaborators={['You', 'Caleb', 'Alex']}
  onSync={() => console.log('Syncing...')}
/>
```

### 2. IDEDashboard (`src/components/IDEDashboard.tsx`)

Full IDE layout with file explorer, editor, and console.

**Features:**
- Collapsible left sidebar with file explorer
- File tree showing project structure
- Tab bar for open files with close buttons
- Active tab highlighting
- Breadcrumb navigation path
- Code editor area with monospace font and syntax highlighting
- Bottom console panel showing output
- Responsive design

**Props:**
```tsx
interface IDEDashboardProps {
  children?: React.ReactNode;
  showSidebar?: boolean;      // Show/hide left sidebar
  showConsole?: boolean;      // Show/hide console
}
```

**Usage:**
```tsx
<IDEDashboard showSidebar showConsole>
  <YourGamePredictionContent />
</IDEDashboard>
```

### 3. Cloud9Collaboration (`src/components/Cloud9Collaboration.tsx`)

Right-side collaboration panel with real-time features.

**Features:**
- **Collaborators Tab**: Active team members with status indicators
  - Online/Away/Offline status
  - Cursor position tracking
  - Workspace settings (Auto Save)
  
- **Chat Tab**: Team communication
  - Message history
  - Real-time chat input
  - User-colored messages

- **Sync Tab**: Cloud synchronization
  - Cloud sync status
  - Storage usage display
  - Recent activity log
  - Manual sync button with animation

**Status Indicators:**
- Green dot: Online
- Yellow dot: Away
- Gray dot: Offline

### 4. IDECommandPalette (`src/components/IDECommandPalette.tsx`)

Quick command access modal (Cmd/Ctrl+K).

**Built-in Commands:**
- `Predict Next Move` - Get AI prediction for game move
- `New Game State` - Create new game analysis
- `View History` - Browse past predictions
- `Sync to Cloud` - Force cloud synchronization
- `Open Collaboration` - View active collaborators
- `Settings` - Open application settings
- `Help & Documentation` - View help

**Keyboard Shortcuts:**
- `Cmd/Ctrl+K` - Open command palette
- `↑↓` - Navigate commands
- `Enter` - Execute selected command
- `Escape` - Close palette

**Categories:**
- Prediction - Game-related commands
- Game - Game state management
- Cloud - Synchronization features
- Editor - Editor settings
- Help - Documentation

### 5. IDESettings (`src/components/IDESettings.tsx`)

Comprehensive settings panel for IDE customization.

**Setting Categories:**

**Theme:**
- Dark Mode (default)
- Light Mode
- Auto (system preference)

**Editor:**
- Font size (10-18px, default 13px)
- Line height (1.0-2.0, default 1.5)
- Word wrap toggle
- Render whitespace (None/Boundary/All)

**Display:**
- Syntax highlighting toggle
- Minimap visibility

**Behavior:**
- Auto save toggle
- Notifications toggle

## Animations

Tailwind-powered animations for IDE interactions:

### Sync Animations
- `animate-sync-spin` - Full rotation for sync indicator
- `animate-live-indicator` - 2-step pulse for "live" status

### Code Display
- `animate-code-highlight` - Background flash for highlighted code
- `animate-panel-enter` - Slide-in animation for new panels

### UI Feedback
- `animate-pulse-glow` - Pulse glow for focus states
- Error/Warning pulses for validation feedback

### Gradients
- `gradient-ide` - IDE-themed gradient backgrounds
- `gradient-cloud` - Cloud-themed accent gradients

## CSS Classes

### IDE Components
```css
.ide-panel          /* Base IDE panel styling */
.status-bar         /* Bottom status bar */
.breadcrumb-nav     /* Navigation breadcrumbs */
.code-block         /* Code display area */
.terminal           /* Terminal/console styling */
.live-indicator     /* Live connection indicator */
.collab-avatars     /* Collaboration avatar group */
```

### Interactive States
```css
.glass-ide          /* Glass morphism effect */
.focus-glow         /* Focus ring animation */
.error-pulse        /* Error state animation */
.warning-pulse      /* Warning state animation */
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl+K` | Open Command Palette |
| `Cmd/Ctrl+N` | New Game State |
| `Cmd/Ctrl+P` | Predict Next Move |
| `Cmd/Ctrl+H` | View History |
| `Cmd/Ctrl+S` | Sync to Cloud |
| `Cmd/Ctrl+,` | Open Settings |
| `Cmd/Ctrl+?` | Help & Documentation |

## Integration Points

### With App.tsx

```tsx
import IDEHeader from './components/IDEHeader';
import IDEDashboard from './components/IDEDashboard';
import Cloud9Collaboration from './components/Cloud9Collaboration';
import IDECommandPalette from './components/IDECommandPalette';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  
  // Cmd/Ctrl+K shortcut handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        setIsCommandPaletteOpen(!isCommandPaletteOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen]);

  return (
    <div className="h-screen w-screen flex flex-col bg-background">
      <IDEHeader isLive={true} collaborators={['You', 'Team']} />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1">
          <IDEDashboard showSidebar showConsole>
            {/* Your content */}
          </IDEDashboard>
        </div>
        <Cloud9Collaboration />
      </div>

      <IDECommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}
```

## Styling System

### CSS Custom Properties (Variables)

Located in `src/index.css`:

```css
:root {
  --background: 10.5% 0 0;           /* #1e1e1e */
  --foreground: 92% 0 0;             /* #e8e8e8 */
  --primary: 60% 0.2 220;            /* #3574F0 */
  --secondary: 50% 0.18 45;          /* #FF9D47 */
  --muted: 35% 0 0;                  /* #555555 */
  --card: oklch(var(--background) / 0.95);
  --border: oklch(var(--muted) / 0.3);
  /* ... more variables ... */
}
```

### Color System (OKLCH)

Using OKLCH for perceptually uniform colors across the dark theme:

- **L** (Lightness): 0-100% (how bright)
- **C** (Chroma): 0-0.4 (color intensity)
- **H** (Hue): 0-360° (color angle)

Benefits over RGB:
- Consistent perceived brightness
- Better for dark themes
- Accessible color relationships

### Tailwind Extensions (`tailwind.config.js`)

```js
theme: {
  extend: {
    fontFamily: {
      mono: ['JetBrains Mono', 'monospace'],
      sans: ['Inter', 'sans-serif'],
    },
    animation: {
      'sync-spin': 'sync-spin 2s linear infinite',
      'live-indicator': 'live-pulse 1.5s ease-in-out infinite',
      'code-highlight': 'code-highlight 2s ease-out',
      'panel-enter': 'panel-enter 0.3s ease-out',
    },
    boxShadow: {
      'ide-focus': '0 0 0 3px oklch(var(--primary) / 0.1)',
      'cloud-pulse': '0 0 10px oklch(var(--cloud-accent) / 0.4)',
      'error-glow': '0 0 15px oklch(var(--destructive) / 0.3)',
      'success-glow': '0 0 15px oklch(var(--chart-3) / 0.3)',
    },
  },
}
```

## Cloud9 Features

### Real-time Collaboration
- Live cursor indicators for all collaborators
- Real-time file synchronization
- Chat integration for team communication
- Status indicators (Online/Away/Offline)

### Cloud Synchronization
- Automatic file syncing
- Cloud storage quota display
- Activity history tracking
- Manual sync triggers

### Development Features
- Integrated terminal/console
- File explorer navigation
- Tab-based file management
- Syntax highlighting
- Code breadcrumb navigation

## JetBrains Aesthetic Elements

1. **Dark Professional Theme** - Reduces eye strain during long coding sessions
2. **Color-Coded Syntax** - Keywords, strings, functions, comments in distinct colors
3. **Glass Morphism** - Subtle transparency effects for depth
4. **Monospace Typography** - Clear code display with proper spacing
5. **Consistent Spacing** - 4px/8px/16px grid for alignment
6. **Icon System** - Lucide React icons for consistent visual language
7. **Status Indicators** - Real-time feedback with pulsing animations
8. **Focus Rings** - Clear keyboard navigation with glow effects

## Performance Optimizations

- Lazy-loaded components
- Memoized callbacks in hooks
- Efficient state management
- CSS animations (GPU-accelerated)
- Minimal re-renders on collaboration updates

## Responsive Design

Components adapt to different screen sizes:

- **Desktop**: Full IDE layout with all panels
- **Tablet**: Collapsible sidebar, reduced console height
- **Mobile**: Stacked layout with bottom tabs (future enhancement)

## Future Enhancements

1. **Terminal Emulator** - Full terminal integration in console panel
2. **Debugging Panel** - Breakpoint management and variable inspection
3. **Extension System** - Plugin architecture for custom commands
4. **Theme Customization** - User-defined color themes
5. **Workspace Profiles** - Save/restore IDE configurations
6. **Git Integration** - Built-in version control
7. **Live Share** - Advanced real-time code collaboration
8. **AI Assistant** - Integrated AI-powered code suggestions

## Troubleshooting

### Command Palette Not Opening
- Ensure keyboard shortcut is `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
- Check browser DevTools console for errors
- Try refreshing the page

### Collaboration Panel Not Showing
- Verify Cloud9Collaboration component is imported in App.tsx
- Check window width (should be wide enough for right panel)
- Ensure z-index values don't conflict with other elements

### Animations Appearing Slow
- Check CSS animation-duration values in App.css
- Verify GPU acceleration is enabled in browser
- Reduce animation complexity on lower-end devices

## Technical Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with OKLCH colors
- **UI Components**: Radix UI (via custom button)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Animations**: Tailwind Animate + custom CSS
- **State Management**: React Hooks
- **Build Tool**: Vite

## Files Structure

```
src/
├── components/
│   ├── IDEHeader.tsx              # Professional header
│   ├── IDEDashboard.tsx           # Main IDE layout
│   ├── Cloud9Collaboration.tsx    # Right panel
│   ├── IDECommandPalette.tsx      # Command modal
│   ├── IDESettings.tsx            # Settings panel
│   └── ui/
│       └── button.tsx             # Base button component
├── App.tsx                         # Main app with IDE integration
├── App.css                         # IDE-specific styles
├── index.css                       # CSS variables & color system
├── tailwind.config.js              # Tailwind theme extensions
└── pages/
    └── LandingPage.tsx            # Game prediction content
```

## Contributing

When adding new IDE features:

1. Use CSS custom properties for colors
2. Apply existing animations for consistency
3. Use Lucide icons for UI elements
4. Follow OKLCH color syntax
5. Test keyboard shortcuts
6. Ensure accessibility (ARIA labels)
7. Update this documentation

---

**pr3dkt IDE** - Empowering game prediction with professional development environment aesthetics.
