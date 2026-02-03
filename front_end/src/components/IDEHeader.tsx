/**
 * IDE Header Component - JetBrains + Cloud9 Style
 * Professional development environment navigation
 */

import { GitBranch, Cloud, Users, Settings, Code2, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
    onSync?: () => void;
    isLive?: boolean;
    collaborators?: string[];
}

export default function IDEHeader({ onSync, isLive = true, collaborators = [] }: HeaderProps) {
    return (
        <>
            {/* Main IDE Header */}
            <header className="fixed top-0 left-0 right-0 bg-linear-to-b from-sidebar to-sidebar/95 border-b border-sidebar-border backdrop-blur-sm z-50">
                {/* Top Bar with Branding */}
                <div className="px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        {/* Logo/Branding */}
                        <div className="flex items-center gap-2">
                            <Code2 className="w-6 h-6 text-primary" />
                            <span className="font-bold text-lg text-foreground font-mono">pr3dkt</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                IDE
                            </span>
                        </div>
                    </div>

                    {/* Center - File/Project Path */}
                    <div className="flex-1 ml-8 flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <GitBranch className="w-3 h-3" />
                        <span>main</span>
                        <span className="text-muted-foreground/50 mx-2">/</span>
                        <span>src/components/PredictionSection.tsx</span>
                    </div>

                    {/* Right Controls */}
                    <div className="flex items-center gap-3">
                        {/* Live Indicator */}
                        {isLive && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-live-indicator" />
                                <span className="text-xs text-green-400 font-mono">LIVE</span>
                            </div>
                        )}

                        {/* Cloud Status */}
                        <button className="relative group p-2 hover:bg-sidebar-accent/10 rounded transition-colors" title="Cloud Sync Status">
                            <Cloud className="w-4 h-4 text-cloud-accent" />
                            <div className="absolute inset-0 rounded animate-cloud-pulse opacity-0 group-hover:opacity-100" />
                        </button>

                        {/* Collaboration */}
                        {collaborators.length > 0 && (
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {collaborators.map((collab, i) => (
                                        <div
                                            key={i}
                                            className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white border-2 border-sidebar"
                                        >
                                            {collab.charAt(0)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-muted-foreground">{collaborators.length}</span>
                            </div>
                        )}

                        {/* Sync Button */}
                        {onSync && (
                            <Button
                                onClick={onSync}
                                variant="ghost"
                                size="sm"
                                className="gap-2 text-xs hover:bg-primary/10 hover:text-primary"
                            >
                                <Zap className="w-3 h-3" />
                                <span className="hidden sm:inline">Sync</span>
                            </Button>
                        )}

                        {/* Settings */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="p-2 hover:bg-sidebar-accent/10"
                            title="Settings"
                        >
                            <Settings className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                        </Button>
                    </div>
                </div>

                {/* Secondary Navigation Bar */}
                <nav className="flex items-center gap-6 px-6 py-2 border-t border-sidebar-border bg-sidebar/50 text-xs font-mono">
                    <button className="flex items-center gap-2 py-2 px-2 text-primary border-b-2 border-primary hover:bg-primary/10 rounded-t transition-colors">
                        <Code2 className="w-3 h-3" />
                        Code
                    </button>
                    <button className="flex items-center gap-2 py-2 px-2 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/10 rounded-t transition-colors">
                        <Users className="w-3 h-3" />
                        Collaborators
                    </button>
                    <button className="flex items-center gap-2 py-2 px-2 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/10 rounded-t transition-colors">
                        <Cloud className="w-3 h-3" />
                        Cloud
                    </button>
                </nav>
            </header>

            {/* Bottom Status Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-sidebar border-t border-sidebar-border backdrop-blur-sm z-50">
                <div className="h-8 px-6 flex items-center justify-between text-xs font-mono text-muted-foreground">
                    {/* Left Status Items */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span>UTF-8</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>LF</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>TypeScript JSX</span>
                        </div>
                    </div>

                    {/* Center - File Info */}
                    <div className="flex items-center gap-4 text-foreground/70">
                        <span>Ln 45, Col 12</span>
                        <div className="w-px h-4 bg-border" />
                        <span>1,247 characters</span>
                    </div>

                    {/* Right Status Items */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-2 py-1 rounded bg-primary/10 text-primary">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>Connected</span>
                        </div>
                        <span>21:45</span>
                    </div>
                </div>
            </div>

            {/* Spacers for fixed elements */}
            <div className="h-[106px]" />
            {/* bottom spacer */}
            <style>{`
        body {
          padding-bottom: 32px;
        }
      `}</style>
        </>
    );
}
