/**
 * IDE Dashboard Layout Component
 * Professional development environment layout with panels
 */

import { Code, FileText, GitBranch, AlertCircle, CheckCircle, Terminal } from 'lucide-react';
import { useState } from 'react';

interface IDEDashboardProps {
    children?: React.ReactNode;
    showSidebar?: boolean;
    showConsole?: boolean;
}

export default function IDEDashboard({
    children,
    showSidebar = true,
    showConsole = true,
}: IDEDashboardProps) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-background overflow-hidden">
            {/* Left Sidebar - File Explorer */}
            {showSidebar && (
                <div className={`transition-all duration-300 border-r border-sidebar-border bg-sidebar flex flex-col ${sidebarCollapsed ? 'w-14' : 'w-64'}`}>
                    {/* Sidebar Header */}
                    <div className="h-14 flex items-center justify-between px-4 border-b border-sidebar-border">
                        <span className={`font-mono text-sm font-bold text-sidebar-foreground ${sidebarCollapsed ? 'hidden' : ''}`}>
                            Explorer
                        </span>
                        <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="p-1 hover:bg-sidebar-accent/20 rounded transition-colors"
                            title={sidebarCollapsed ? 'Expand' : 'Collapse'}
                        >
                            <Code className="w-4 h-4 text-sidebar-foreground" />
                        </button>
                    </div>

                    {/* File Explorer Content */}
                    {!sidebarCollapsed && (
                        <div className="flex-1 overflow-y-auto p-3 space-y-1">
                            <div className="space-y-1">
                                {/* Project Root */}
                                <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-sm font-mono">
                                    <GitBranch className="w-3 h-3" />
                                    <span>pr3dkt</span>
                                </div>

                                {/* Expanded Folder */}
                                <div className="ml-2 space-y-1">
                                    <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-sm font-mono">
                                        <span>📁 src</span>
                                    </div>

                                    <div className="ml-4 space-y-1">
                                        <div className="flex items-center gap-2 p-1.5 hover:bg-primary/20 rounded cursor-pointer text-primary text-xs font-mono bg-primary/5 border-l-2 border-primary">
                                            <FileText className="w-3 h-3" />
                                            <span>api.service.ts</span>
                                        </div>

                                        <div className="flex items-center gap-2 p-1.5 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-xs font-mono">
                                            <FileText className="w-3 h-3" />
                                            <span>useApi.ts</span>
                                        </div>

                                        <div className="flex items-center gap-2 p-1.5 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-xs font-mono">
                                            <FileText className="w-3 h-3" />
                                            <span>PredictionSection.tsx</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-sm font-mono">
                                        <span>📁 components</span>
                                    </div>

                                    <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-sm font-mono">
                                        <span>📁 hooks</span>
                                    </div>

                                    <div className="flex items-center gap-2 p-2 hover:bg-sidebar-accent/10 rounded cursor-pointer text-sidebar-foreground text-sm font-mono">
                                        <span>📁 types</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Editor Area */}
                <div className="flex-1 overflow-hidden flex flex-col">
                    {/* Tab Bar */}
                    <div className="flex items-center gap-0 px-4 bg-card border-b border-border h-10 overflow-x-auto">
                        <div className="flex items-center gap-1 px-3 py-2 bg-primary/10 border-b-2 border-primary rounded-t text-xs font-mono text-primary cursor-pointer">
                            <Code className="w-3 h-3" />
                            <span>api.service.ts</span>
                        </div>

                        <div className="flex items-center gap-1 px-3 py-2 hover:bg-muted/50 rounded-t text-xs font-mono text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                            <Code className="w-3 h-3" />
                            <span>useApi.ts</span>
                        </div>

                        <div className="flex items-center gap-1 px-3 py-2 hover:bg-muted/50 rounded-t text-xs font-mono text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                            <AlertCircle className="w-3 h-3 text-destructive" />
                            <span>types.ts</span>
                        </div>
                    </div>

                    {/* Breadcrumb Navigation */}
                    <div className="breadcrumb-nav">
                        <div className="breadcrumb-item">
                            <span>src</span>
                            <span className="breadcrumb-separator">/</span>
                        </div>
                        <div className="breadcrumb-item">
                            <span>services</span>
                            <span className="breadcrumb-separator">/</span>
                        </div>
                        <div className="breadcrumb-item">
                            <span>api.service.ts</span>
                        </div>
                    </div>

                    {/* Code Editor Content */}
                    <div className="flex-1 overflow-auto p-6 code-block bg-background font-mono text-sm">
                        {children || (
                            <div className="space-y-2 text-muted-foreground">
                                <div>
                                    <span className="syntax-keyword">import</span>
                                    <span> {{ </span>
                                    <span className="syntax-type">apiService</span>
                                    <span> }} </span>
                                    <span className="syntax-keyword">from</span>
                                    <span className="syntax-string">'@/services/api.service'</span>
                                </div>
                                <div>
                                    <span className="syntax-comment">// Prediction API</span>
                                </div>
                                <div>
                                    <span className="syntax-keyword">const</span>
                                    <span> predictions = </span>
                                    <span className="syntax-keyword">await</span>
                                    <span> apiService.</span>
                                    <span className="syntax-function">predictNextChampion</span>
                                    <span>(gameState)</span>
                                </div>
                                <div className="mt-4 p-3 bg-destructive/5 border border-destructive/30 rounded">
                                    <div className="flex gap-2">
                                        <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                                        <span className="text-destructive">Backend not connected. Using mock data.</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Console/Output Panel */}
                {showConsole && (
                    <div className="border-t border-border bg-sidebar h-32 flex flex-col">
                        {/* Console Header */}
                        <div className="flex items-center justify-between px-4 py-2 border-b border-sidebar-border h-10 bg-sidebar/50">
                            <div className="flex items-center gap-2 text-xs font-mono text-sidebar-foreground">
                                <Terminal className="w-4 h-4" />
                                <span>Console</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-xs text-sidebar-foreground/60">
                                    <CheckCircle className="w-3 h-3 inline text-chart-3 mr-1" />
                                    All systems operational
                                </span>
                            </div>
                        </div>

                        {/* Console Output */}
                        <div className="flex-1 overflow-y-auto p-3 text-xs font-mono text-foreground space-y-1">
                            <div className="flex gap-2">
                                <span className="text-muted-foreground">{'>'}</span>
                                <span>npm run dev</span>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-chart-3">✓</span>
                                <span className="text-chart-3">Vite dev server running at http://localhost:5173</span>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-muted-foreground">{'>'}</span>
                                <span>API connected</span>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-chart-1">⚠</span>
                                <span className="text-chart-1">Backend API offline - using mock predictions</span>
                            </div>

                            <div className="flex gap-2">
                                <span className="text-muted-foreground">{'>'}</span>
                                <span>Ready for predictions</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
