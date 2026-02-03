/**
 * Updated PredictionSection Component
 * Connects to backend API for real predictions
 */

import { useState, useRef, useEffect } from 'react';
import { Sparkles, TrendingUp, Target, Zap, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { usePredictChampion } from '../hooks/useApi';
import type { GameState, Prediction } from '../types/api';

// Mock data for demo purposes (fallback when API is unavailable)
const mockPredictions: Prediction[] = [
    {
        champion: 'Orianna',
        role: 'Mid',
        confidence: 94,
        winRate: 56.8,
        synergy: 92,
        reasoning: 'Strong synergy with current team composition. Excellent wave clear and team fight presence.',
    },
    {
        champion: 'Syndra',
        role: 'Mid',
        confidence: 87,
        winRate: 54.2,
        synergy: 85,
        reasoning: 'High burst damage complements team. Good pick potential and lane priority.',
    },
    {
        champion: 'Viktor',
        role: 'Mid',
        confidence: 82,
        winRate: 53.5,
        synergy: 88,
        reasoning: 'Scales well into late game. Strong zone control for objectives.',
    },
];

// Mock game state for demo
const mockGameState: GameState = {
    blueTeam: [
        { id: 1, name: 'Ahri', role: 'Mid', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
        { id: 2, name: 'Lee Sin', role: 'Jungle', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
        { id: 3, name: 'Thresh', role: 'Support', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
    ],
    redTeam: [],
    blueBans: [],
    redBans: [],
    currentPhase: 'pick',
};

interface PredictionSectionProps {
    gameState?: GameState | null;
    onPredictionSelected?: (prediction: Prediction) => void;
}

export default function PredictionSection({ gameState = mockGameState, onPredictionSelected }: PredictionSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedPrediction, setSelectedPrediction] = useState(0);
    const [useRealAPI, setUseRealAPI] = useState(false);
    const [useMock, setUseMock] = useState(true);

    // Fetch real predictions from API
    const { data: apiResponse, isLoading: isLoadingPredictions, error: apiError } = usePredictChampion(
        useRealAPI ? gameState : null
    );

    // Use mock predictions initially, switch to API predictions when available
    const predictions = useMock && !isLoadingPredictions ? mockPredictions : apiResponse?.predictions || mockPredictions;
    const topPick = apiResponse?.topPick || predictions[0];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '-100px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleAnalyze = () => {
        if (!useMock) {
            setUseRealAPI(!useRealAPI);
        }
    };

    const handlePredictionSelect = (index: number) => {
        setSelectedPrediction(index);
        const selected = predictions[index];
        if (onPredictionSelected) {
            onPredictionSelected(selected);
        }
    };

    return (
        <section id="predictions" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
            {/* Background Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lol-gold/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                        <Sparkles className="w-4 h-4 text-lol-gold" />
                        <span className="text-sm font-medium">AI Predictions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                        Next-Level{' '}
                        <span className="bg-linear-to-r from-lol-gold to-lol-blue bg-clip-text text-transparent">
                            Predictions
                        </span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Our AI analyzes team compositions, meta trends, and matchup data to suggest optimal picks.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                    {/* Prediction Orb Visualization */}
                    <div className={`flex items-center justify-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`} style={{ transitionDelay: '200ms' }}>
                        <div className="relative">
                            <div className={`relative w-64 h-64 sm:w-80 sm:h-80 ${isLoadingPredictions ? 'animate-spin-slow' : ''}`}>
                                <img
                                    src="/assets/generated/prediction-orb-transparent.dim_200x200.png"
                                    alt="AI Prediction Orb"
                                    className="w-full h-full object-contain"
                                />
                                <div className="absolute inset-0 bg-linear-to-br from-lol-gold/30 to-lol-blue/30 rounded-full blur-2xl" />
                            </div>

                            {/* Floating Stats */}
                            <div className="absolute -top-4 -right-4 glass-card px-4 py-2 border border-lol-gold/30 animate-float">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-lol-gold" />
                                    <span className="text-sm font-semibold">{topPick.confidence}% Accuracy</span>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 border border-lol-blue/30 animate-float-delayed">
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-lol-blue" />
                                    <span className="text-sm font-semibold">Real-time</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Predictions List */}
                    <div className={`space-y-4 transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '400ms' }}>
                        {/* Error Alert */}
                        {apiError && !useMock && (
                            <div className="glass-card p-4 border border-red-500/30 bg-red-500/5 rounded-xl flex gap-3">
                                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-red-500">API Error</p>
                                    <p className="text-sm text-foreground/70">{apiError.message}</p>
                                    <p className="text-xs text-foreground/60 mt-1">Using demo predictions instead</p>
                                </div>
                            </div>
                        )}

                        <div className="glass-card p-6 border border-white/10 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold">Top Recommendations</h3>
                                <div className="flex items-center gap-2">
                                    {!useMock && (
                                        <span className="text-xs px-2 py-1 rounded-full bg-lol-gold/10 border border-lol-gold/20 text-lol-gold">
                                            Live API
                                        </span>
                                    )}
                                    <Button
                                        onClick={handleAnalyze}
                                        disabled={isLoadingPredictions}
                                        className="bg-linear-to-r from-lol-gold to-lol-blue hover:opacity-90 text-black font-semibold"
                                    >
                                        {isLoadingPredictions ? (
                                            <>
                                                <div className="animate-spin mr-2">
                                                    <Sparkles className="w-4 h-4" />
                                                </div>
                                                Analyzing...
                                            </>
                                        ) : (
                                            <>
                                                <Target className="w-4 h-4 mr-2" />
                                                {useMock ? 'Load Real Predictions' : 'Refresh'}
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {predictions.map((prediction, index) => (
                                    <div
                                        key={`${prediction.champion}-${index}`}
                                        onClick={() => handlePredictionSelect(index)}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all mb-3 ${selectedPrediction === index
                                            ? 'border-lol-gold bg-lol-gold/5 scale-[1.02]'
                                            : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src="/assets/generated/champion-placeholder-transparent.dim_128x128.png"
                                                    alt={prediction.champion}
                                                    className="w-12 h-12 rounded-lg"
                                                />
                                                <div>
                                                    <h4 className="font-bold">{prediction.champion}</h4>
                                                    <p className="text-sm text-foreground/60">{prediction.role}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-lol-gold">
                                                    {prediction.confidence}%
                                                </div>
                                                <p className="text-xs text-foreground/60">Confidence</p>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <div className="flex items-center justify-between text-xs mb-1">
                                                    <span className="text-foreground/60">Win Rate</span>
                                                    <span className="font-semibold">{prediction.winRate}%</span>
                                                </div>
                                                <Progress value={prediction.winRate} className="h-1.5" />
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between text-xs mb-1">
                                                    <span className="text-foreground/60">Synergy</span>
                                                    <span className="font-semibold">{prediction.synergy}%</span>
                                                </div>
                                                <Progress value={prediction.synergy} className="h-1.5" />
                                            </div>
                                        </div>

                                        {/* Reasoning */}
                                        {selectedPrediction === index && (
                                            <div className="pt-3 border-t border-white/10 animate-fade-in">
                                                <p className="text-sm text-foreground/70">{prediction.reasoning}</p>
                                                {prediction.matchups && (
                                                    <div className="mt-3 space-y-2">
                                                        {prediction.matchups.good.length > 0 && (
                                                            <div className="text-xs">
                                                                <span className="text-green-400 font-semibold">✓ Good against:</span>{' '}
                                                                <span className="text-foreground/60">{prediction.matchups.good.join(', ')}</span>
                                                            </div>
                                                        )}
                                                        {prediction.matchups.bad.length > 0 && (
                                                            <div className="text-xs">
                                                                <span className="text-red-400 font-semibold">✗ Bad against:</span>{' '}
                                                                <span className="text-foreground/60">{prediction.matchups.bad.join(', ')}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
