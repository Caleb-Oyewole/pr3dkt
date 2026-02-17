/**
 * IDE Settings/Preferences Panel
 * Configure IDE theme, behavior, and features
 */

import { X, Monitor, Lightbulb, AlertCircle, Database, Eye, Type } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface Settings {
    theme: 'dark' | 'light' | 'auto';
    fontSize: number;
    lineHeight: number;
    showMinimap: boolean;
    enableAutoSave: boolean;
    notifications: boolean;
    codeHighlight: boolean;
    wordWrap: boolean;
    renderWhitespace: 'none' | 'boundary' | 'all';
}

interface IDESettingsProps {
    isOpen: boolean;
    onClose: () => void;
    onSettingsChange?: (settings: Settings) => void;
}

export default function IDESettings({ isOpen, onClose, onSettingsChange }: IDESettingsProps) {
    const [settings, setSettings] = useState<Settings>({
        theme: 'dark',
        fontSize: 13,
        lineHeight: 1.5,
        showMinimap: true,
        enableAutoSave: true,
        notifications: true,
        codeHighlight: true,
        wordWrap: true,
        renderWhitespace: 'boundary',
    });

    const handleSettingChange = (key: keyof Settings, value: any) => {
        const newSettings = { ...settings, [key]: value };
        setSettings(newSettings);
        onSettingsChange?.(newSettings);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

            {/* Settings Panel */}
            <div className="fixed right-0 top-0 h-screen w-96 bg-card border-l border-border shadow-2xl z-50 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                    <h2 className="font-mono font-bold text-foreground">Settings</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-muted rounded transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Settings Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 space-y-6">
                        {/* Theme Settings */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-primary mb-3 flex items-center gap-2">
                                <Moon className="w-3 h-3" />
                                Theme
                            </h3>
                            <div className="space-y-2">
                                {['dark', 'light', 'auto'].map(theme => (
                                    <label key={theme} className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                        <input
                                            type="radio"
                                            name="theme"
                                            value={theme}
                                            checked={settings.theme === theme}
                                            onChange={e => handleSettingChange('theme', e.target.value)}
                                            className="w-4 h-4"
                                        />
                                        <span className="text-xs font-mono text-foreground capitalize">{theme} Mode</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Editor Settings */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-primary mb-3 flex items-center gap-2">
                                <Type className="w-3 h-3" />
                                Editor
                            </h3>
                            <div className="space-y-4">
                                {/* Font Size */}
                                <div>
                                    <label className="text-xs font-mono text-muted-foreground mb-2 block">
                                        Font Size: {settings.fontSize}px
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="18"
                                        value={settings.fontSize}
                                        onChange={e => handleSettingChange('fontSize', parseInt(e.target.value))}
                                        className="w-full"
                                    />
                                </div>

                                {/* Line Height */}
                                <div>
                                    <label className="text-xs font-mono text-muted-foreground mb-2 block">
                                        Line Height: {settings.lineHeight.toFixed(1)}
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="2"
                                        step="0.1"
                                        value={settings.lineHeight}
                                        onChange={e => handleSettingChange('lineHeight', parseFloat(e.target.value))}
                                        className="w-full"
                                    />
                                </div>

                                {/* Word Wrap */}
                                <label className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings.wordWrap}
                                        onChange={e => handleSettingChange('wordWrap', e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-foreground">Word Wrap</span>
                                </label>

                                {/* Render Whitespace */}
                                <div>
                                    <label className="text-xs font-mono text-muted-foreground mb-2 block">
                                        Render Whitespace
                                    </label>
                                    <select
                                        value={settings.renderWhitespace}
                                        onChange={e => handleSettingChange('renderWhitespace', e.target.value)}
                                        className="w-full px-2 py-1 text-xs rounded bg-input border border-border text-foreground"
                                    >
                                        <option value="none">None</option>
                                        <option value="boundary">Boundary</option>
                                        <option value="all">All</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Display Settings */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-primary mb-3 flex items-center gap-2">
                                <Eye className="w-3 h-3" />
                                Display
                            </h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings.codeHighlight}
                                        onChange={e => handleSettingChange('codeHighlight', e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-foreground">Syntax Highlighting</span>
                                </label>

                                <label className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings.showMinimap}
                                        onChange={e => handleSettingChange('showMinimap', e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-foreground">Show Minimap</span>
                                </label>
                            </div>
                        </div>

                        {/* Behavior Settings */}
                        <div>
                            <h3 className="text-xs font-mono font-bold text-primary mb-3 flex items-center gap-2">
                                <Database className="w-3 h-3" />
                                Behavior
                            </h3>
                            <div className="space-y-2">
                                <label className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings.enableAutoSave}
                                        onChange={e => handleSettingChange('enableAutoSave', e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-foreground">Auto Save</span>
                                </label>

                                <label className="flex items-center gap-3 p-2 hover:bg-muted/30 rounded cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={settings.notifications}
                                        onChange={e => handleSettingChange('notifications', e.target.checked)}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-xs font-mono text-foreground">Notifications</span>
                                </label>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="p-3 rounded bg-muted/30 border border-border/50">
                            <p className="text-xs font-mono text-muted-foreground">
                                <strong>pr3dkt IDE</strong> v1.0.0<br />
                                Based on JetBrains IntelliJ + Cloud9<br />
                                React 19 • TypeScript • Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border p-4">
                    <Button onClick={onClose} className="w-full">
                        Close Settings
                    </Button>
                </div>
            </div>
        </>
    );
}
