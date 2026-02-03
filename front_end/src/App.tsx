import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import LandingPage from './pages/LandingPage';
import './index.css';

function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground">
        <LandingPage />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
