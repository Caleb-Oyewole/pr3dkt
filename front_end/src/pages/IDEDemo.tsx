/**
 * Full IDE Demo Component
 * Complete showcase of JetBrains + Cloud9 IDE aesthetic
 */

import { Code2, Cloud, Zap, Users, Settings, HelpCircle, GitBranch } from 'lucide-react';

export default function IDEDemo() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />

                <div className="relative max-w-6xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                                <Code2 className="w-6 h-6 text-primary" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold font-mono text-foreground">pr3dkt IDE</h1>
                        </div>
                        <p className="text-xl text-muted-foreground font-mono mb-4">
                            JetBrains IntelliJ + Cloud9 Development Environment
                        </p>
                        <p className="text-sm text-muted-foreground font-mono">
                            Professional game prediction with enterprise IDE aesthetics
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {/* IDE Components */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">IDE Components</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Professional header</li>
                                <li>✓ Dashboard layout</li>
                                <li>✓ File explorer</li>
                                <li>✓ Code editor</li>
                                <li>✓ Terminal/console</li>
                                <li>✓ Status bar</li>
                            </ul>
                        </div>

                        {/* Collaboration */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">Collaboration</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Live indicators</li>
                                <li>✓ Team chat</li>
                                <li>✓ Cloud sync</li>
                                <li>✓ Activity history</li>
                                <li>✓ Member status</li>
                                <li>✓ File sharing</li>
                            </ul>
                        </div>

                        {/* Developer Experience */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">DX Features</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Command palette</li>
                                <li>✓ Keyboard shortcuts</li>
                                <li>✓ Settings panel</li>
                                <li>✓ Animations</li>
                                <li>✓ Themes</li>
                                <li>✓ Type safety</li>
                            </ul>
                        </div>

                        {/* Game Prediction */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <GitBranch className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">Game Engine</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Move prediction</li>
                                <li>✓ Game analysis</li>
                                <li>✓ Champion meta</li>
                                <li>✓ Team synergy</li>
                                <li>✓ Win rates</li>
                                <li>✓ History</li>
                            </ul>
                        </div>

                        {/* Cloud Services */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Cloud className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">Cloud Services</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Auto sync</li>
                                <li>✓ Cloud storage</li>
                                <li>✓ Backups</li>
                                <li>✓ API ready</li>
                                <li>✓ WebSocket ready</li>
                                <li>✓ Scalable</li>
                            </ul>
                        </div>

                        {/* Customization */}
                        <div className="p-6 rounded-lg border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Settings className="w-5 h-5 text-primary" />
                                <h3 className="font-mono font-bold text-lg">Customization</h3>
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
                                <li>✓ Colors (OKLCH)</li>
                                <li>✓ Typography</li>
                                <li>✓ Animations</li>
                                <li>✓ Shortcuts</li>
                                <li>✓ Commands</li>
                                <li>✓ Settings</li>
                            </ul>
                        </div>
                    </div>

                    {/* Color Palette Showcase */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold font-mono text-foreground mb-6">Color System</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <div className="w-full h-24 rounded-lg bg-primary border border-primary/20" />
                                <p className="font-mono text-xs font-bold text-primary">Primary</p>
                                <p className="font-mono text-xs text-muted-foreground">#3574F0</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-24 rounded-lg bg-secondary border border-secondary/20" />
                                <p className="font-mono text-xs font-bold text-secondary">Secondary</p>
                                <p className="font-mono text-xs text-muted-foreground">#FF9D47</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-24 rounded-lg bg-background border border-border" />
                                <p className="font-mono text-xs font-bold text-foreground">Background</p>
                                <p className="font-mono text-xs text-muted-foreground">#1e1e1e</p>
                            </div>
                            <div className="space-y-2">
                                <div className="w-full h-24 rounded-lg bg-card border border-border" />
                                <p className="font-mono text-xs font-bold text-foreground">Card</p>
                                <p className="font-mono text-xs text-muted-foreground">overlay</p>
                            </div>
                        </div>
                    </div>

                    {/* Animations Showcase */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold font-mono text-foreground mb-6">Animations</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <div className="w-8 h-8 rounded-full bg-primary animate-sync-spin mx-auto mb-3" />
                                <p className="font-mono text-xs font-bold text-primary">Sync Spin</p>
                            </div>
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <div className="w-8 h-8 rounded-full bg-green-500 animate-live-indicator mx-auto mb-3" />
                                <p className="font-mono text-xs font-bold text-green-500">Live Pulse</p>
                            </div>
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <div className="w-full h-2 rounded bg-primary/20 animate-code-highlight mb-3" />
                                <p className="font-mono text-xs font-bold text-primary">Code Highlight</p>
                            </div>
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <div className="w-full h-2 rounded bg-muted translate-x-0 animate-panel-enter mb-3" />
                                <p className="font-mono text-xs font-bold text-primary">Panel Enter</p>
                            </div>
                        </div>
                    </div>

                    {/* Keyboard Shortcuts */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold font-mono text-foreground mb-6">Keyboard Shortcuts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <table className="w-full font-mono text-xs">
                                    <tbody>
                                        <tr className="border-b border-border/30">
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+K</td>
                                            <td className="text-muted-foreground">Command Palette</td>
                                        </tr>
                                        <tr className="border-b border-border/30">
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+P</td>
                                            <td className="text-muted-foreground">Predict Move</td>
                                        </tr>
                                        <tr className="border-b border-border/30">
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+N</td>
                                            <td className="text-muted-foreground">New Game State</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+H</td>
                                            <td className="text-muted-foreground">View History</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 rounded-lg border border-border bg-card/50">
                                <table className="w-full font-mono text-xs">
                                    <tbody>
                                        <tr className="border-b border-border/30">
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+S</td>
                                            <td className="text-muted-foreground">Sync to Cloud</td>
                                        </tr>
                                        <tr className="border-b border-border/30">
                                            <td className="py-2 pr-4 text-primary">Cmd/Ctrl+,</td>
                                            <td className="text-muted-foreground">Settings</td>
                                        </tr>
                                        <tr className="border-b border-border/30">
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
                    </div>

                    {/* Code Example */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold font-mono text-foreground mb-6">Component Example</h2>
                        <div className="p-4 rounded-lg border border-border bg-card/50 overflow-x-auto">
                            <pre className="font-mono text-xs text-foreground">
                                {`import IDEHeader from './components/IDEHeader';
import IDEDashboard from './components/IDEDashboard';

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <IDEHeader isLive={true} collaborators={['You']} />
      
      <IDEDashboard showSidebar showConsole>
        {/* Your game prediction content */}
      </IDEDashboard>
    </div>
  );
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        <div className="p-6 rounded-lg border border-border bg-card/50 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">6</p>
                            <p className="font-mono text-xs text-muted-foreground">IDE Components</p>
                        </div>
                        <div className="p-6 rounded-lg border border-border bg-card/50 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">7</p>
                            <p className="font-mono text-xs text-muted-foreground">Keyboard Shortcuts</p>
                        </div>
                        <div className="p-6 rounded-lg border border-border bg-card/50 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">10+</p>
                            <p className="font-mono text-xs text-muted-foreground">Animations</p>
                        </div>
                        <div className="p-6 rounded-lg border border-border bg-card/50 text-center">
                            <p className="text-3xl font-bold text-primary mb-2">4k+</p>
                            <p className="font-mono text-xs text-muted-foreground">Lines of Docs</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <a
                            href="/ide-showcase"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-mono font-bold"
                        >
                            <HelpCircle className="w-5 h-5" />
                            Explore Full IDE Showcase
                        </a>
                        <p className="text-sm text-muted-foreground font-mono mt-4">
                            Press Cmd/Ctrl+K to open Command Palette
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border py-8 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm text-muted-foreground font-mono">
                        pr3dkt IDE • JetBrains + Cloud9 Aesthetic • React 19 + TypeScript • Tailwind CSS
                    </p>
                    <p className="text-xs text-muted-foreground font-mono mt-4">
                        Documentation: IDE_GUIDE.md • README_IDE.md • QUICK_REFERENCE.md
                    </p>
                </div>
            </div>
        </div>
    );
}
