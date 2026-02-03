/**
 * Cloud9 Collaboration Panel
 * Real-time collaboration and cloud development features
 */

import { Cloud, Users, GitBranch, Zap, Code, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface Collaborator {
    id: string;
    name: string;
    avatar: string;
    status: 'online' | 'away' | 'offline';
    color: string;
    cursorPosition?: { line: number; column: number };
}

interface CloudFeatures {
    isOnline: boolean;
    isSyncing: boolean;
    autoSave: boolean;
    collaborators: Collaborator[];
}

export default function Cloud9Collaboration() {
    const [features, setFeatures] = useState<CloudFeatures>({
        isOnline: true,
        isSyncing: false,
        autoSave: true,
        collaborators: [
            { id: '1', name: 'You', avatar: 'Y', status: 'online', color: 'from-primary to-accent' },
            { id: '2', name: 'Caleb', avatar: 'C', status: 'online', color: 'from-green-500 to-emerald-500' },
            { id: '3', name: 'Alex', avatar: 'A', status: 'away', color: 'from-purple-500 to-pink-500' },
        ],
    });

    const [selectedTab, setSelectedTab] = useState<'collab' | 'chat' | 'sync'>('collab');

    const handleStartSync = () => {
        setFeatures(prev => ({ ...prev, isSyncing: true }));
        setTimeout(() => {
            setFeatures(prev => ({ ...prev, isSyncing: false }));
        }, 2000);
    };

    return (
        <div className="fixed right-0 top-32 w-80 bg-card border-l border-border rounded-l-lg shadow-lg z-40">
            {/* Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-cloud-accent" />
                    <span className="font-mono text-sm font-bold">Cloud9 IDE</span>
                </div>
                <div className={`w-2 h-2 rounded-full ${features.isOnline ? 'bg-green-500 animate-live-indicator' : 'bg-destructive'}`} />
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b border-border">
                <button
                    onClick={() => setSelectedTab('collab')}
                    className={`flex-1 py-2 text-xs font-mono border-b-2 transition-colors ${selectedTab === 'collab'
                            ? 'border-primary text-primary bg-primary/5'
                            : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                >
                    <Users className="w-3 h-3 inline mr-1" />
                    Collab
                </button>
                <button
                    onClick={() => setSelectedTab('chat')}
                    className={`flex-1 py-2 text-xs font-mono border-b-2 transition-colors ${selectedTab === 'chat'
                            ? 'border-primary text-primary bg-primary/5'
                            : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                >
                    <MessageSquare className="w-3 h-3 inline mr-1" />
                    Chat
                </button>
                <button
                    onClick={() => setSelectedTab('sync')}
                    className={`flex-1 py-2 text-xs font-mono border-b-2 transition-colors ${selectedTab === 'sync'
                            ? 'border-primary text-primary bg-primary/5'
                            : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                >
                    <Zap className="w-3 h-3 inline mr-1" />
                    Sync
                </button>
            </div>

            {/* Content Area */}
            <div className="h-96 overflow-y-auto">
                {/* Collaboration Tab */}
                {selectedTab === 'collab' && (
                    <div className="p-4 space-y-4">
                        <div>
                            <h3 className="text-xs font-mono font-bold text-foreground mb-3">Active Collaborators</h3>
                            <div className="space-y-2">
                                {features.collaborators.map(collab => (
                                    <div
                                        key={collab.id}
                                        className="p-3 rounded bg-muted/30 border border-border/50 hover:border-border transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full bg-linear-to-br ${collab.color} flex items-center justify-center text-xs font-bold text-white`}>
                                                    {collab.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-mono font-bold text-foreground">{collab.name}</p>
                                                    <p className="text-xs text-muted-foreground">{collab.status}</p>
                                                </div>
                                            </div>
                                            <div
                                                className={`w-2 h-2 rounded-full ${collab.status === 'online'
                                                        ? 'bg-green-500'
                                                        : collab.status === 'away'
                                                            ? 'bg-yellow-500'
                                                            : 'bg-muted'
                                                    }`}
                                            />
                                        </div>
                                        {collab.cursorPosition && (
                                            <p className="text-xs text-muted-foreground">
                                                Ln {collab.cursorPosition.line}, Col {collab.cursorPosition.column}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Shared Workspaces */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-foreground mb-2">Workspace Settings</h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 p-2 hover:bg-muted/30 rounded cursor-pointer transition-colors">
                                    <input
                                        type="checkbox"
                                        checked={features.autoSave}
                                        onChange={e => setFeatures(prev => ({ ...prev, autoSave: e.target.checked }))}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-muted-foreground">Auto Save</span>
                                </label>
                                <p className="text-xs text-muted-foreground px-2">Files save automatically to cloud</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Chat Tab */}
                {selectedTab === 'chat' && (
                    <div className="p-4 space-y-4 flex flex-col h-full">
                        {/* Chat Messages */}
                        <div className="flex-1 space-y-3 mb-4">
                            <div className="p-2 rounded bg-primary/10 border border-primary/20">
                                <p className="text-xs font-mono font-bold text-primary">You</p>
                                <p className="text-xs text-muted-foreground mt-1">API integration looking good!</p>
                            </div>

                            <div className="p-2 rounded bg-muted/30 border border-border/50">
                                <p className="text-xs font-mono font-bold text-foreground">Caleb</p>
                                <p className="text-xs text-muted-foreground mt-1">Thanks! Backend is next 🚀</p>
                            </div>

                            <div className="p-2 rounded bg-muted/30 border border-border/50">
                                <p className="text-xs font-mono font-bold text-foreground">Alex</p>
                                <p className="text-xs text-muted-foreground mt-1">Should we add more animations?</p>
                            </div>
                        </div>

                        {/* Chat Input */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Say something..."
                                className="flex-1 px-3 py-2 rounded text-xs bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                            />
                            <Button size="sm" className="px-2 h-8">
                                Send
                            </Button>
                        </div>
                    </div>
                )}

                {/* Sync Tab */}
                {selectedTab === 'sync' && (
                    <div className="p-4 space-y-4">
                        <div className="p-3 rounded bg-primary/10 border border-primary/20">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-mono font-bold text-primary">Cloud Sync Status</span>
                                {features.isSyncing && (
                                    <div className="animate-spin-slow">
                                        <Zap className="w-3 h-3 text-primary" />
                                    </div>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {features.isSyncing ? 'Syncing to cloud...' : 'In sync with cloud'}
                            </p>
                        </div>

                        <div className="p-3 rounded bg-card border border-border/50">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-mono font-bold text-foreground">Storage</span>
                                <span className="text-xs text-muted-foreground">2.3 MB / 5 GB</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: '46%' }} />
                            </div>
                        </div>

                        <Button
                            onClick={handleStartSync}
                            disabled={features.isSyncing}
                            className="w-full gap-2 text-xs"
                        >
                            {features.isSyncing ? (
                                <>
                                    <div className="animate-sync-spin">
                                        <Zap className="w-3 h-3" />
                                    </div>
                                    Syncing...
                                </>
                            ) : (
                                <>
                                    <Zap className="w-3 h-3" />
                                    Sync Now
                                </>
                            )}
                        </Button>

                        {/* Recent Activity */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-foreground mb-2">Recent Activity</h3>
                            <div className="space-y-2 text-xs text-muted-foreground font-mono">
                                <p>✓ api.service.ts - 2 min ago</p>
                                <p>✓ useApi.ts - 5 min ago</p>
                                <p>✓ IDEDashboard.tsx - 10 min ago</p>
                                <p>✓ IDEHeader.tsx - 15 min ago</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Status */}
            <div className="border-t border-border p-2 text-xs font-mono text-muted-foreground flex items-center justify-between">
                <span>Connection: {features.isOnline ? 'Active' : 'Offline'}</span>
                <Code className="w-3 h-3" />
            </div>
        </div>
    );
}
