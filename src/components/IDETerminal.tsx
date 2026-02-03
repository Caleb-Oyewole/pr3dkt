/**
 * IDE Terminal Component
 * Integrated terminal/console for development output
 */

import { X, Copy, Trash2, Terminal, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface TerminalLine {
    id: string;
    content: string;
    type: 'command' | 'output' | 'error' | 'success' | 'warning' | 'info';
    timestamp: Date;
}

interface IDETerminalProps {
    height?: number;
    onClose?: () => void;
    isMaximized?: boolean;
}

export default function IDETerminal({ height = 200, onClose, isMaximized }: IDETerminalProps) {
    const [lines, setLines] = useState<TerminalLine[]>([
        {
            id: '1',
            content: '$ npm run dev',
            type: 'command',
            timestamp: new Date(Date.now() - 120000),
        },
        {
            id: '2',
            content: 'VITE v5.0.0  ready in 245 ms',
            type: 'output',
            timestamp: new Date(Date.now() - 115000),
        },
        {
            id: '3',
            content: '➜  Local:   http://localhost:5173/',
            type: 'output',
            timestamp: new Date(Date.now() - 114000),
        },
        {
            id: '4',
            content: '➜  press h to show help',
            type: 'output',
            timestamp: new Date(Date.now() - 113000),
        },
        {
            id: '5',
            content: '[API] Connection established',
            type: 'success',
            timestamp: new Date(Date.now() - 100000),
        },
        {
            id: '6',
            content: '[API] Backend API offline - using mock predictions',
            type: 'warning',
            timestamp: new Date(Date.now() - 95000),
        },
        {
            id: '7',
            content: '[Cloud9] Collaborators connected: 2',
            type: 'info',
            timestamp: new Date(Date.now() - 60000),
        },
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            const newLine: TerminalLine = {
                id: Date.now().toString(),
                content: `$ ${inputValue}`,
                type: 'command',
                timestamp: new Date(),
            };
            setLines([...lines, newLine]);

            // Simulate command output
            setTimeout(() => {
                const outputLine: TerminalLine = {
                    id: (Date.now() + 1).toString(),
                    content: `Command executed: ${inputValue}`,
                    type: 'output',
                    timestamp: new Date(),
                };
                setLines(prev => [...prev, outputLine]);
            }, 300);

            setInputValue('');
        }
    };

    const clearTerminal = () => {
        setLines([]);
    };

    const copyTerminal = () => {
        const text = lines.map(l => l.content).join('\n');
        navigator.clipboard.writeText(text);
    };

    const getLineColor = (type: TerminalLine['type']) => {
        switch (type) {
            case 'command':
                return 'text-primary';
            case 'success':
                return 'text-green-400';
            case 'error':
                return 'text-red-400';
            case 'warning':
                return 'text-yellow-400';
            case 'info':
                return 'text-cyan-400';
            default:
                return 'text-foreground';
        }
    };

    return (
        <div
            className="bg-background border-t border-border flex flex-col"
            style={{ height: isMaximized ? '100%' : `${height}px` }}
        >
            {/* Terminal Header */}
            <div className="px-4 py-2 border-b border-border flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    <span className="font-mono text-xs font-bold text-foreground">Terminal</span>
                    <span className="text-xs text-muted-foreground ml-2">{lines.length} lines</span>
                </div>

                <div className="flex items-center gap-1">
                    <button
                        onClick={copyTerminal}
                        title="Copy terminal content"
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                    >
                        <Copy className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                    </button>
                    <button
                        onClick={clearTerminal}
                        title="Clear terminal"
                        className="p-1.5 hover:bg-muted rounded transition-colors"
                    >
                        <Trash2 className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                    </button>
                    {onClose && (
                        <button
                            onClick={onClose}
                            title="Close terminal"
                            className="p-1.5 hover:bg-muted rounded transition-colors"
                        >
                            <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                        </button>
                    )}
                </div>
            </div>

            {/* Terminal Output */}
            <div
                className="flex-1 overflow-y-auto p-4 font-mono text-xs space-y-0 bg-background"
                style={{
                    scrollBehavior: 'smooth',
                }}
            >
                {lines.length === 0 ? (
                    <p className="text-muted-foreground">Terminal ready. Type a command.</p>
                ) : (
                    lines.map(line => (
                        <div key={line.id} className={`${getLineColor(line.type)} whitespace-pre-wrap break-words`}>
                            {line.content}
                        </div>
                    ))
                )}
            </div>

            {/* Terminal Input */}
            <div className="border-t border-border px-4 py-2 bg-muted/10">
                <div className="flex items-center gap-2">
                    <span className="text-muted-foreground font-mono text-xs">$</span>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleCommand}
                        placeholder="Enter command..."
                        className="flex-1 bg-transparent text-foreground font-mono text-xs outline-none placeholder-muted-foreground"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
}
