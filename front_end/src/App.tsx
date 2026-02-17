import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import IDEHeader from './components/IDEHeader';
import IDEDashboard from './components/IDEDashboard';
import Cloud9Collaboration from './components/Cloud9Collaboration';
import IDECommandPalette from './components/IDECommandPalette';
import LandingPage from './pages/LandingPage';
import './App.css';
import './index.css';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [collaborators] = useState(['You', 'Caleb', 'Alex']);
  const [isLive] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  // Command Palette keyboard shortcut (Cmd/Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(!isCommandPaletteOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="theme">
      <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
        {/* IDE Header with JetBrains + Cloud9 aesthetic */}
        <IDEHeader
          isLive={isLive}
          collaborators={collaborators}
          onSync={() => console.log('Syncing to cloud...')}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* IDE Dashboard Layout */}
          <div className="flex-1">
            <IDEDashboard showSidebar showConsole>
              <LandingPage />
            </IDEDashboard>
          </div>

          {/* Cloud9 Collaboration Panel */}
          <Cloud9Collaboration />
        </div>

        {/* Command Palette (Cmd/Ctrl+K) */}
        <IDECommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
