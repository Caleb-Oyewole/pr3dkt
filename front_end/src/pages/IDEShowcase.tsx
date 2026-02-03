/**
 * IDE Components Showcase
 * Visual guide to all IDE components and features
 */

import { useState } from 'react';
import IDEHeader from '../components/IDEHeader';
import IDEDashboard from '../components/IDEDashboard';
import Cloud9Collaboration from '../components/Cloud9Collaboration';
import IDECommandPalette from '../components/IDECommandPalette';
import IDESettings from '../components/IDESettings';
import IDETerminal from '../components/IDETerminal';

export default function IDEShowcase() {
    const [showSettings, setShowSettings] = useState(false);
    const [showCommandPalette, setShowCommandPalette] = useState(false);

    return (
        <div className="space-y-8 p-8 bg-background text-foreground max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold font-mono text-primary mb-2">pr3dkt IDE Components</h1>
            <p className="text-muted-foreground font-mono mb-8">
                JetBrains + Cloud9 aesthetic showcase
            </p>

            {/* IDE Header Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">IDEHeader Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Professional header with breadcrumb, live indicator, sync button, and status bar
                </p>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <IDEHeader
                        isLive={true}
                        collaborators={['You', 'Caleb', 'Alex']}
                        onSync={() => alert('Syncing to cloud...')}
                    />
                </div>
            </section>

            {/* IDE Dashboard Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">IDEDashboard Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Full IDE layout with file explorer, editor area, and console panel
                </p>
                <div className="border border-border rounded-lg overflow-hidden bg-card h-96">
                    <IDEDashboard showSidebar showConsole>
                        <div className="p-6">
                            <h3 className="font-mono font-bold text-primary mb-2">Game Prediction Content</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                This is where your game prediction components would be displayed.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded bg-muted/30 border border-border">
                                    <p className="text-xs font-mono text-primary">Feature 1</p>
                                    <p className="text-xs text-muted-foreground">Prediction Engine</p>
                                </div>
                                <div className="p-4 rounded bg-muted/30 border border-border">
                                    <p className="text-xs font-mono text-primary">Feature 2</p>
                                    <p className="text-xs text-muted-foreground">Game Analysis</p>
                                </div>
                            </div>
                        </div>
                    </IDEDashboard>
                </div>
            </section>

            {/* Terminal Component */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">IDETerminal Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Integrated terminal with command execution and output display
                </p>
                <div className="border border-border rounded-lg overflow-hidden bg-card">
                    <IDETerminal height={250} />
                </div>
            </section>

            {/* Cloud9 Collaboration Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">Cloud9Collaboration Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Right-side panel with collaborators, chat, and cloud sync features
                </p>
                <div className="text-sm text-muted-foreground font-mono mb-4">
                    The Cloud9Collaboration component appears as a fixed right panel in the full app layout.
                    It includes:
                </div>
                <ul className="text-sm text-muted-foreground font-mono space-y-2 ml-4">
                    <li>• <strong>Collaborators Tab</strong> - Active team members with status</li>
                    <li>• <strong>Chat Tab</strong> - Real-time team communication</li>
                    <li>• <strong>Sync Tab</strong> - Cloud synchronization status</li>
                    <li>• <strong>Features</strong> - Auto-save, activity history, storage display</li>
                </ul>
            </section>

            {/* Command Palette Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">IDECommandPalette Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Quick command access with search and keyboard navigation (Cmd/Ctrl+K)
                </p>
                <button
                    onClick={() => setShowCommandPalette(true)}
                    className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono text-sm"
                >
                    Open Command Palette (Cmd/Ctrl+K)
                </button>
                <div className="text-sm text-muted-foreground font-mono">
                    <p className="mb-2">Built-in commands:</p>
                    <ul className="space-y-1 ml-4">
                        <li>• Predict Next Move (Cmd+P)</li>
                        <li>• New Game State (Cmd+N)</li>
                        <li>• View History (Cmd+H)</li>
                        <li>• Sync to Cloud (Cmd+S)</li>
                        <li>• Open Collaboration (Cmd+Shift+C)</li>
                        <li>• Settings (Cmd+,)</li>
                        <li>• Help & Documentation (Cmd+?)</li>
                    </ul>
                </div>
            </section>

            {/* Settings Panel Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">IDESettings Component</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Comprehensive settings panel for IDE customization
                </p>
                <button
                    onClick={() => setShowSettings(true)}
                    className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono text-sm"
                >
                    Open Settings (Cmd/Ctrl+,)
                </button>
                <div className="text-sm text-muted-foreground font-mono">
                    <p className="mb-2">Configurable settings:</p>
                    <ul className="space-y-1 ml-4">
                        <li>• <strong>Theme</strong> - Dark, Light, Auto</li>
                        <li>• <strong>Editor</strong> - Font size, line height, word wrap</li>
                        <li>• <strong>Display</strong> - Syntax highlighting, minimap</li>
                        <li>• <strong>Behavior</strong> - Auto save, notifications</li>
                    </ul>
                </div>
            </section>

            {/* Color Palette Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">JetBrains Color Palette</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Professional IDE colors using OKLCH color space
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="w-full h-24 rounded bg-primary" />
                        <p className="font-mono text-xs font-bold text-primary">Primary</p>
                        <p className="font-mono text-xs text-muted-foreground">#3574F0</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-24 rounded bg-secondary" />
                        <p className="font-mono text-xs font-bold text-secondary">Secondary</p>
                        <p className="font-mono text-xs text-muted-foreground">#FF9D47</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-24 rounded bg-background border border-border" />
                        <p className="font-mono text-xs font-bold text-foreground">Background</p>
                        <p className="font-mono text-xs text-muted-foreground">#1e1e1e</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full h-24 rounded bg-card border border-border" />
                        <p className="font-mono text-xs font-bold text-foreground">Card</p>
                        <p className="font-mono text-xs text-muted-foreground">Background with alpha</p>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">Typography</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    Professional fonts: JetBrains Mono (code) + Inter (UI)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded bg-card border border-border">
                        <p className="font-mono text-lg mb-2">JetBrains Mono</p>
                        <p className="font-mono text-sm text-muted-foreground">
                            Used for code, terminals, and monospace text. Fixed-width font for precise alignment.
                        </p>
                        <div className="mt-4 p-3 rounded bg-muted/30 border border-border/50 font-mono text-xs">
                            const prediction = await api.predictMove(gameState);
                        </div>
                    </div>
                    <div className="p-6 rounded bg-card border border-border">
                        <p className="font-sans text-lg mb-2">Inter</p>
                        <p className="text-sm text-muted-foreground">
                            Used for UI elements, labels, and body text. Clean, readable sans-serif font.
                        </p>
                        <div className="mt-4 space-y-2">
                            <button className="w-full px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 text-sm transition-colors">
                                Button Text
                            </button>
                            <p className="text-xs text-muted-foreground">UI element text</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animations Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">Animations</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    IDE-specific animations for visual feedback
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded bg-card border border-border">
                        <div className="w-8 h-8 rounded-full bg-primary animate-sync-spin mb-4" />
                        <p className="font-mono text-xs font-bold text-primary mb-2">Sync Spin</p>
                        <p className="text-xs text-muted-foreground">
                            Full rotation animation for sync indicators
                        </p>
                    </div>
                    <div className="p-6 rounded bg-card border border-border">
                        <div className="w-8 h-8 rounded-full bg-green-500 animate-live-indicator mb-4" />
                        <p className="font-mono text-xs font-bold text-green-500 mb-2">Live Pulse</p>
                        <p className="text-xs text-muted-foreground">
                            2-step pulse animation for live status
                        </p>
                    </div>
                    <div className="p-6 rounded bg-card border border-border">
                        <div className="w-full h-8 rounded bg-primary/20 animate-code-highlight mb-4" />
                        <p className="font-mono text-xs font-bold text-primary mb-2">Code Highlight</p>
                        <p className="text-xs text-muted-foreground">
                            Background flash for highlighted code
                        </p>
                    </div>
                    <div className="p-6 rounded bg-card border border-border">
                        <div className="w-full h-8 rounded bg-muted translate-x-0 animate-panel-enter mb-4" />
                        <p className="font-mono text-xs font-bold text-primary mb-2">Panel Enter</p>
                        <p className="text-xs text-muted-foreground">
                            Slide-in animation for new panels
                        </p>
                    </div>
                </div>
            </section>

            {/* Integration Examples Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">Integration Examples</h2>
                <p className="text-sm text-muted-foreground font-mono">
                    How to use IDE components in your application
                </p>

                <div className="space-y-4">
                    {/* Basic Example */}
                    <div className="p-4 rounded bg-muted/30 border border-border/50">
                        <p className="font-mono text-xs font-bold text-primary mb-3">Basic App Layout</p>
                        <pre className="font-mono text-xs text-foreground overflow-x-auto">
                            {`import IDEHeader from './components/IDEHeader';
import IDEDashboard from './components/IDEDashboard';
import Cloud9Collaboration from './components/Cloud9Collaboration';

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <IDEHeader isLive={true} collaborators={['You']} />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1">
          <IDEDashboard showSidebar showConsole>
            {/* Your content */}
          </IDEDashboard>
        </div>
        <Cloud9Collaboration />
      </div>
    </div>
  );
}`}
                        </pre>
                    </div>

                    {/* Command Palette Example */}
                    <div className="p-4 rounded bg-muted/30 border border-border/50">
                        <p className="font-mono text-xs font-bold text-primary mb-3">Command Palette Integration</p>
                        <pre className="font-mono text-xs text-foreground overflow-x-auto">
                            {`const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [isOpen]);

return (
  <IDECommandPalette
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
  />
);`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Keyboard Shortcuts Reference */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold font-mono text-primary">Keyboard Shortcuts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded bg-card border border-border">
                        <table className="w-full font-mono text-xs">
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+K</td>
                                    <td className="text-muted-foreground">Command Palette</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+N</td>
                                    <td className="text-muted-foreground">New Game State</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+P</td>
                                    <td className="text-muted-foreground">Predict Move</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+H</td>
                                    <td className="text-muted-foreground">View History</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 rounded bg-card border border-border">
                        <table className="w-full font-mono text-xs">
                            <tbody>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+S</td>
                                    <td className="text-muted-foreground">Sync Cloud</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+,</td>
                                    <td className="text-muted-foreground">Settings</td>
                                </tr>
                                <tr className="border-b border-border/50">
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+?</td>
                                    <td className="text-muted-foreground">Help</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4 text-primary">Cmd/Ctrl+Shift+C</td>
                                    <td className="text-muted-foreground">Collaboration</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Files Modified */}
            <section className="space-y-4 pb-8">
                <h2 className="text-2xl font-bold font-mono text-primary">Files Modified/Created</h2>
                <div className="space-y-2 font-mono text-xs">
                    <p className="text-muted-foreground">✅ New Components:</p>
                    <ul className="ml-4 space-y-1 text-foreground">
                        <li>• src/components/IDEHeader.tsx</li>
                        <li>• src/components/IDEDashboard.tsx</li>
                        <li>• src/components/Cloud9Collaboration.tsx</li>
                        <li>• src/components/IDECommandPalette.tsx</li>
                        <li>• src/components/IDESettings.tsx</li>
                        <li>• src/components/IDETerminal.tsx</li>
                    </ul>

                    <p className="text-muted-foreground mt-4">✅ Updated Files:</p>
                    <ul className="ml-4 space-y-1 text-foreground">
                        <li>• src/App.tsx (integrated IDE components)</li>
                        <li>• src/App.css (IDE animations & styles)</li>
                        <li>• src/index.css (JetBrains colors)</li>
                        <li>• tailwind.config.js (extended theme)</li>
                    </ul>

                    <p className="text-muted-foreground mt-4">✅ Documentation:</p>
                    <ul className="ml-4 space-y-1 text-foreground">
                        <li>• IDE_GUIDE.md (comprehensive guide)</li>
                        <li>• README_IDE.md (feature overview)</li>
                        <li>• This showcase component</li>
                    </ul>
                </div>
            </section>

            {/* Modals */}
            <IDECommandPalette
                isOpen={showCommandPalette}
                onClose={() => setShowCommandPalette(false)}
            />

            <IDESettings
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                onSettingsChange={(settings) => console.log('Settings updated:', settings)}
            />
        </div>
    );
}
