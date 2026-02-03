/**
 * IDE Command Palette
 * Quick access to commands and features (Cmd/Ctrl+K)
 */

import { Search, Code, Zap, FileText, Settings, Cloud, HelpCircle, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface Command {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    category: string;
    shortcut?: string;
    action: () => void;
}

interface CommandPaletteProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function IDECommandPalette({ isOpen, onClose }: CommandPaletteProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);

    const commands: Command[] = [
        {
            id: 'predict',
            label: 'Predict Next Move',
            description: 'Get AI prediction for next game move',
            icon: <Zap className="w-4 h-4" />,
            category: 'Prediction',
            shortcut: 'Cmd+P',
            action: () => {
                console.log('Predict move');
                onClose();
            },
        },
        {
            id: 'new-game',
            label: 'New Game State',
            description: 'Create new game state analysis',
            icon: <Code className="w-4 h-4" />,
            category: 'Game',
            shortcut: 'Cmd+N',
            action: () => {
                console.log('New game');
                onClose();
            },
        },
        {
            id: 'history',
            label: 'View History',
            description: 'Browse past predictions and results',
            icon: <FileText className="w-4 h-4" />,
            category: 'Game',
            shortcut: 'Cmd+H',
            action: () => {
                console.log('View history');
                onClose();
            },
        },
        {
            id: 'sync',
            label: 'Sync to Cloud',
            description: 'Force synchronization with cloud',
            icon: <Cloud className="w-4 h-4" />,
            category: 'Cloud',
            shortcut: 'Cmd+S',
            action: () => {
                console.log('Sync');
                onClose();
            },
        },
        {
            id: 'collaborate',
            label: 'Open Collaboration',
            description: 'View active collaborators',
            icon: <Users className="w-4 h-4" />,
            category: 'Cloud',
            shortcut: 'Cmd+Shift+C',
            action: () => {
                console.log('Collaborate');
                onClose();
            },
        },
        {
            id: 'settings',
            label: 'Settings',
            description: 'Open application settings',
            icon: <Settings className="w-4 h-4" />,
            category: 'Editor',
            shortcut: 'Cmd+,',
            action: () => {
                console.log('Settings');
                onClose();
            },
        },
        {
            id: 'help',
            label: 'Help & Documentation',
            description: 'View help and documentation',
            icon: <HelpCircle className="w-4 h-4" />,
            category: 'Help',
            shortcut: 'Cmd+?',
            action: () => {
                console.log('Help');
                onClose();
            },
        },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Reset selected index when search changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [searchQuery]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredCommands[selectedIndex]) {
                    filteredCommands[selectedIndex].action();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredCommands, selectedIndex, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={onClose}
            />

            {/* Command Palette Modal */}
            <div className="fixed inset-0 flex items-start justify-center z-50 pt-20">
                <div className="w-full max-w-2xl rounded-lg bg-card border border-border shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <input
                            autoFocus
                            type="text"
                            placeholder="Search commands or type '>' for palette..."
                            className="flex-1 bg-transparent text-foreground font-mono text-sm outline-none placeholder-muted-foreground"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                        <div className="flex gap-2">
                            <span className="text-xs text-muted-foreground font-mono px-2 py-1 bg-muted rounded">
                                ESC
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">to close</span>
                        </div>
                    </div>

                    {/* Commands List */}
                    <div className="max-h-80 overflow-y-auto">
                        {filteredCommands.length === 0 ? (
                            <div className="p-8 text-center text-muted-foreground font-mono text-sm">
                                No commands found for "{searchQuery}"
                            </div>
                        ) : (
                            <div>
                                {filteredCommands.map((cmd, index) => (
                                    <button
                                        key={cmd.id}
                                        onClick={() => cmd.action()}
                                        className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors border-b border-border/50 last:border-b-0 ${index === selectedIndex
                                                ? 'bg-primary/10 border-l-2 border-l-primary'
                                                : 'hover:bg-muted/50'
                                            }`}
                                    >
                                        <div
                                            className={`w-5 h-5 flex items-center justify-center rounded ${index === selectedIndex ? 'text-primary' : 'text-muted-foreground'
                                                }`}
                                        >
                                            {cmd.icon}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-mono font-bold ${index === selectedIndex ? 'text-primary' : 'text-foreground'}`}>
                                                {cmd.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground truncate">{cmd.description}</p>
                                        </div>

                                        <div className="flex items-center gap-2 ml-auto">
                                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded font-mono">
                                                {cmd.category}
                                            </span>
                                            {cmd.shortcut && (
                                                <span className="text-xs text-muted-foreground font-mono">{cmd.shortcut}</span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-border bg-muted/30 text-xs text-muted-foreground font-mono">
                        <div className="flex items-center justify-between">
                            <span>{filteredCommands.length} commands</span>
                            <div className="flex gap-2">
                                <span>↑↓ to navigate</span>
                                <span>•</span>
                                <span>ENTER to run</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
