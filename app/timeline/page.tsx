'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define types for our timeline entries
interface TimelineEntry {
  id: string;
  date: Date;
  title: string;
  content: string;
  type: 'conversation' | 'milestone' | 'strategy' | 'implementation' | 'reflection' | 'challenge' | 'analysis';
  mode?: 'strategy' | 'analysis' | 'facilitation' | 'connection' | 'implementation' | 'documentation' | 'challenge';
  outcome?: 'positive' | 'neutral' | 'negative';
  expanded?: boolean;
  isPlaying?: boolean;
}

export default function Timeline() {
  const { user, loading } = useAuth();
  const [filter, setFilter] = useState<string>('all');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  
  // Mock timeline data - in a real app, this would come from your backend
  const [timelineData, setTimelineData] = useState<TimelineEntry[]>([
    {
      id: '1',
      date: new Date(2023, 6, 15),
      title: 'Initial Coaching Session',
      content: 'We discussed your career goals and identified key areas for development, focusing on leadership skills and strategic thinking.',
      type: 'conversation',
      mode: 'strategy',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '2',
      date: new Date(2023, 6, 18),
      title: 'Strategic Planning Framework',
      content: 'I introduced the OGSM (Objectives, Goals, Strategies, Measures) framework to help structure your quarterly planning process.',
      type: 'strategy',
      mode: 'strategy',
      outcome: 'neutral',
      expanded: false
    },
    {
      id: '3',
      date: new Date(2023, 6, 25),
      title: 'First Team Meeting Success',
      content: 'You successfully implemented the new meeting structure we discussed, resulting in more efficient decision-making and team engagement.',
      type: 'implementation',
      mode: 'facilitation',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '4',
      date: new Date(2023, 7, 2),
      title: 'Stakeholder Mapping Exercise',
      content: 'We completed a comprehensive stakeholder analysis to improve your influence strategy and communication approach.',
      type: 'strategy',
      mode: 'connection',
      outcome: 'neutral',
      expanded: false
    },
    {
      id: '5',
      date: new Date(2023, 7, 10),
      title: 'Challenging Team Conflict',
      content: 'You navigated a difficult conversation between team members using the conflict resolution framework we developed.',
      type: 'challenge',
      mode: 'facilitation',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '6',
      date: new Date(2023, 7, 15),
      title: 'One Month Progress Review',
      content: 'We reviewed your progress over the first month. You\'ve successfully implemented three new leadership practices and received positive feedback from your team.',
      type: 'milestone',
      mode: 'analysis',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '7',
      date: new Date(2023, 7, 22),
      title: 'Delegation Framework Implementation',
      content: 'You applied the delegation matrix to redistribute team responsibilities, freeing up 5 hours per week for strategic work.',
      type: 'implementation',
      mode: 'implementation',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '8',
      date: new Date(2023, 8, 5),
      title: 'Leadership Style Reflection',
      content: 'How has your approach to leadership evolved since we started working together? What techniques have been most effective with your team?',
      type: 'reflection',
      mode: 'analysis',
      outcome: 'neutral',
      expanded: false
    },
    {
      id: '9',
      date: new Date(2023, 8, 12),
      title: 'Executive Presentation Success',
      content: 'You delivered a compelling presentation to the executive team using the storytelling framework we developed. This represents significant progress in your communication skills.',
      type: 'milestone',
      mode: 'implementation',
      outcome: 'positive',
      expanded: false
    },
    {
      id: '10',
      date: new Date(2023, 8, 20),
      title: 'Strategic Thinking Workshop',
      content: 'We completed a scenario planning exercise to enhance your long-term strategic thinking capabilities.',
      type: 'strategy',
      mode: 'strategy',
      outcome: 'neutral',
      expanded: false
    },
    {
      id: '11',
      date: new Date(2023, 9, 3),
      title: 'Work-Life Integration Discussion',
      content: 'We explored how your current workload is affecting your well-being and developed strategies for better boundaries and energy management.',
      type: 'conversation',
      mode: 'challenge',
      outcome: 'neutral',
      expanded: false
    },
    {
      id: '12',
      date: new Date(2023, 9, 15),
      title: 'Three Month Progress Review',
      content: 'We assessed your progress over three months. You\'ve achieved 7 of your 9 quarterly goals and demonstrated significant growth in strategic thinking and team leadership.',
      type: 'milestone',
      mode: 'analysis',
      outcome: 'positive',
      expanded: false
    },
  ]);


  // Filter timeline entries based on selected filter
  const filteredTimeline = filter === 'all' 
    ? timelineData 
    : timelineData.filter(entry => entry.type === filter || entry.mode === filter);

  // Sort timeline entries by date (newest first)
  const sortedTimeline = [...filteredTimeline].sort((a, b) => b.date.getTime() - a.date.getTime());

  // Get icon for timeline entry type
  const getEntryIcon = (type: string, mode?: string) => {
    // First check if there's a mode specified
    if (mode) {
      switch(mode) {
        case 'strategy':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
          );
        case 'analysis':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          );
        case 'facilitation':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          );
        case 'connection':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          );
        case 'implementation':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          );
        case 'documentation':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          );
        case 'challenge':
          return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          );
      }
    }
    
    // If no mode or fallback to type
    switch(type) {
      case 'conversation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'milestone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case 'strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        );
      case 'implementation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
        );
      case 'reflection':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'challenge':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'analysis':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  // Get color for timeline entry type - Update with more distinct colors
  const getEntryColor = (type: string, outcome?: string, mode?: string) => {
    // First check if there's an outcome specified
    if (outcome === 'positive') return 'bg-green-100 dark:bg-green-900/30 border-green-500';
    if (outcome === 'negative') return 'bg-red-100 dark:bg-red-900/30 border-red-500';
    
    // If no outcome or neutral, use mode-based colors
    if (mode) {
      switch(mode) {
        case 'strategy':
          return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500';
        case 'analysis':
          return 'bg-purple-100 dark:bg-purple-900/30 border-purple-500';
        case 'facilitation':
          return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-500';
        case 'connection':
          return 'bg-pink-100 dark:bg-pink-900/30 border-pink-500';
        case 'implementation':
          return 'bg-green-100 dark:bg-green-900/30 border-green-500';
        case 'documentation':
          return 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-500';
        case 'challenge':
          return 'bg-orange-100 dark:bg-orange-900/30 border-orange-500';
      }
    }
    
    // Fallback to type-based colors
    switch(type) {
      case 'conversation':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500';
      case 'milestone':
        return 'bg-purple-100 dark:bg-purple-900/30 border-purple-500';
      case 'strategy':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-500';
      case 'implementation':
        return 'bg-green-100 dark:bg-green-900/30 border-green-500';
      case 'reflection':
        return 'bg-indigo-100 dark:bg-indigo-900/30 border-indigo-500';
      case 'challenge':
        return 'bg-orange-100 dark:bg-orange-900/30 border-orange-500';
      case 'analysis':
        return 'bg-purple-100 dark:bg-purple-900/30 border-purple-500';
      default:
        return 'bg-gray-100 dark:bg-gray-800 border-gray-500';
    }
  };

  // Get dot color for timeline entry type - Update with more distinct colors
  const getDotColor = (type: string, outcome?: string, mode?: string) => {
    // First check if there's an outcome specified
    if (outcome === 'positive') return 'bg-green-500';
    if (outcome === 'negative') return 'bg-red-500';
    
    // If no outcome or neutral, use mode-based colors
    if (mode) {
      switch(mode) {
        case 'strategy':
          return 'bg-blue-500';
        case 'analysis':
          return 'bg-purple-500';
        case 'facilitation':
          return 'bg-yellow-500';
        case 'connection':
          return 'bg-pink-500';
        case 'implementation':
          return 'bg-green-500';
        case 'documentation':
          return 'bg-indigo-500';
        case 'challenge':
          return 'bg-orange-500';
      }
    }
    
    // Fallback to type-based colors
    switch(type) {
      case 'conversation':
        return 'bg-blue-500';
      case 'milestone':
        return 'bg-purple-500';
      case 'strategy':
        return 'bg-blue-500';
      case 'implementation':
        return 'bg-green-500';
      case 'reflection':
        return 'bg-indigo-500';
      case 'challenge':
        return 'bg-orange-500';
      case 'analysis':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Play text-to-speech for an entry
  const playTTS = async (entry: TimelineEntry) => {
    try {
      // If already playing this entry, stop it
      if (currentlyPlayingId === entry.id) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setCurrentlyPlayingId(null);
        
        // Update entry state
        setTimelineData(prevData => 
          prevData.map(item => 
            item.id === entry.id ? { ...item, isPlaying: false } : item
          )
        );
        return;
      }
      
      // Stop any currently playing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      
      // Update all entries to not playing
      setTimelineData(prevData => 
        prevData.map(item => ({ ...item, isPlaying: item.id === entry.id }))
      );
      
      // Set currently playing ID
      setCurrentlyPlayingId(entry.id);
      
      // Prepare text for TTS
      const text = `${entry.title}. ${entry.content}`;
      
      // Call TTS API
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate speech');
      }
      
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Play the audio
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }
      
      audioRef.current.src = audioUrl;
      audioRef.current.onended = () => {
        setCurrentlyPlayingId(null);
        setTimelineData(prevData => 
          prevData.map(item => 
            item.id === entry.id ? { ...item, isPlaying: false } : item
          )
        );
      };
      
      audioRef.current.play();
    } catch (error) {
      console.error('Error playing TTS:', error);
      setCurrentlyPlayingId(null);
      setTimelineData(prevData => 
        prevData.map(item => ({ ...item, isPlaying: false }))
      );
      alert('Failed to play audio. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading your timeline...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Coaching Journey</h1>
            
            {/* Filter controls */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-foreground/70">Filter:</span>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border border-black/10 dark:border-white/10 rounded-lg bg-[var(--background)]"
              >
                <option value="all">All Entries</option>
                <option value="conversation">Conversations</option>
                <option value="milestone">Milestones</option>
                <option value="strategy">Strategy</option>
                <option value="implementation">Implementation</option>
                <option value="reflection">Reflections</option>
                <option value="challenge">Challenges</option>
                <option value="analysis">Analysis</option>
                <option disabled>──────────</option>
                <option value="strategy">Strategy Mode</option>
                <option value="analysis">Analysis Mode</option>
                <option value="facilitation">Facilitation Mode</option>
                <option value="connection">Connection Mode</option>
                <option value="implementation">Implementation Mode</option>
                <option value="documentation">Documentation Mode</option>
                <option value="challenge">Challenge Mode</option>
              </select>
            </div>
          </div>
          
          {/* Timeline legend */}
          <div className="card p-4 mb-8">
            <h2 className="text-lg font-semibold mb-2">Timeline Legend</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Strategy</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Analysis</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-sm">Facilitation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-pink-500 mr-2"></div>
                <span className="text-sm">Connection</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Implementation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-sm">Documentation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm">Challenge</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-sm">Milestones</span>
              </div>
            </div>
          </div>
          
          {/* Timeline visualization - alternating left and right */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 transform -translate-x-1/2"></div>
            
            {/* Timeline entries */}
            <div className="space-y-12">
              {sortedTimeline.map((entry, index) => (
                <div key={entry.id} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 w-4 h-4 rounded-full ${getDotColor(entry.type, entry.outcome, entry.mode)} transform -translate-x-1/2 z-10`}></div>
                  
                  {/* Date display */}
                  <div className="flex justify-center mb-2">
                    <span className="bg-[var(--background)] px-2 py-1 text-xs rounded-full border border-[var(--primary)]/20 text-foreground/70 z-10">
                      {formatDate(entry.date)}
                    </span>
                  </div>
                  
                  {/* Entry card - alternating left and right */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className={`card p-4 border-l-4 shadow-depth transition-all hover:shadow-lg card-hover-lift ${getEntryColor(entry.type, entry.outcome, entry.mode)}`}>
                        <div className="flex items-start">
                          <div className="mr-3 text-[var(--primary)]">
                            {getEntryIcon(entry.type, entry.mode)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
                            <p className="text-foreground/80">{entry.content}</p>
                            
                            {/* Mode badge if available */}
                            {entry.mode && (
                              <div className="mt-3 mb-2">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--background)] text-foreground/70">
                                  {getEntryIcon(entry.type, entry.mode)}
                                  <span className="ml-1 capitalize">{entry.mode} Mode</span>
                                </span>
                              </div>
                            )}
                            
                            {/* Action buttons */}
                            <div className="mt-4 flex justify-end space-x-2">
                              <button 
                                className={`btn-secondary text-sm flex items-center ${entry.isPlaying ? 'bg-[var(--primary)]/20' : ''}`}
                                onClick={() => playTTS(entry)}
                                aria-label={entry.isPlaying ? "Stop speaking" : "Speak entry"}
                              >
                                {entry.isPlaying ? (
                                  <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                                    </svg>
                                    Stop
                                  </>
                                ) : (
                                  <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.728-2.728" />
                                    </svg>
                                    Listen
                                  </>
                                )}
                              </button>
                              
                              {entry.type === 'reflection' && (
                                <button className="btn-secondary text-sm">
                                  Respond
                                </button>
                              )}
                              {entry.type === 'strategy' && (
                                <button className="btn-secondary text-sm">
                                  Review Plan
                                </button>
                              )}
                              <button className="btn-secondary text-sm">
                                Add Note
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Empty state */}
          {sortedTimeline.length === 0 && (
            <div className="card p-8 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-foreground/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">No entries found</h3>
              <p className="text-foreground/70 mb-4">
                {filter === 'all' 
                  ? "Your coaching journey timeline will appear here as you continue your sessions with Stride."
                  : `No ${filter} entries found. Try changing the filter or continue your sessions to create more entries.`
                }
              </p>
              <Link href="/chat" className="btn-primary">
                Start a Session
              </Link>
            </div>
          )}
          
        </div>
      </main>
      
      <Footer />
      
      {/* Hidden audio element for accessibility */}
      <audio ref={audioRef} className="hidden" />
    </div>
  );
}
