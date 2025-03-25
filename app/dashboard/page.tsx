'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface SessionStats {
  totalSessions: number;
  daysActive: number;
}

// Helper function to get sessions per month based on plan
const getSessionsPerMonth = (plan: string): string => {
  const sessionsMap: {[key: string]: string} = {
    'essentials': 'Daily limit',
    'professional': 'Unlimited',
    'enterprise': 'Unlimited'
  };
  
  return sessionsMap[plan.toLowerCase()] || 'Unknown';
};

interface SubscriptionData {
  plan: string;
  status: string;
  isAnnual: boolean;
  currentPeriodEnd: string | null;
  sessionsRemaining: number;
  totalSessions: number;
  daysActive: number;
}

export default function Dashboard() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [isLoadingSubscription, setIsLoadingSubscription] = useState(false);
  const [sessionStats, setSessionStats] = useState<SessionStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const [activeCoachingMode, setActiveCoachingMode] = useState('strategy');
  const [upcomingGoals, setUpcomingGoals] = useState([
    { id: 1, title: 'Complete project proposal', dueDate: '2023-11-15', progress: 65 },
    { id: 2, title: 'Prepare for quarterly review', dueDate: '2023-11-20', progress: 30 },
    { id: 3, title: 'Team leadership workshop', dueDate: '2023-11-25', progress: 10 }
  ]);

  // Fetch subscription data
  useEffect(() => {
    async function fetchSubscriptionData() {
      if (!user) return;
      
      setIsLoadingSubscription(true);
      try {
        console.log('Fetching subscription data...');
        const response = await fetch('/api/users/subscription');
        
        if (!response.ok) {
          console.error('Failed to fetch subscription data:', response.status, response.statusText);
          // Set default subscription data on error
          setSubscription({
            plan: 'essentials',
            status: 'active',
            isAnnual: false,
            currentPeriodEnd: null,
            sessionsRemaining: 3,
            totalSessions: 0,
            daysActive: 1
          });
          return;
        }
        
        const data = await response.json();
        console.log('Subscription data received:', data);
        
        if (data.subscription) {
          setSubscription(data.subscription);
        } else {
          console.error('Subscription data missing in response:', data);
          // Set default subscription data if missing
          setSubscription({
            plan: 'essentials',
            status: 'active',
            isAnnual: false,
            currentPeriodEnd: null,
            sessionsRemaining: 3,
            totalSessions: 0,
            daysActive: 1
          });
        }
      } catch (error) {
        console.error('Error fetching subscription data:', error);
        // Set default subscription data on error
        setSubscription({
          plan: 'essentials',
          status: 'active',
          isAnnual: false,
          currentPeriodEnd: null,
          sessionsRemaining: 3,
          totalSessions: 0,
          daysActive: 1
        });
      } finally {
        setIsLoadingSubscription(false);
      }
    }

    fetchSubscriptionData();
  }, [user]);
  
  // Fetch session stats
  useEffect(() => {
    async function fetchSessionStats() {
      if (!user) return;
      
      setIsLoadingStats(true);
      try {
        console.log('Fetching session statistics...');
        const response = await fetch('/api/sessions/stats');
        
        if (!response.ok) {
          console.error('Failed to fetch session stats:', response.status, response.statusText);
          setSessionStats({
            totalSessions: 0,
            daysActive: 1
          });
          return;
        }
        
        const data = await response.json();
        console.log('Session stats received:', data);
        
        if (data.stats) {
          setSessionStats(data.stats);
        } else {
          console.error('Session stats missing in response:', data);
          setSessionStats({
            totalSessions: 0,
            daysActive: 1
          });
        }
      } catch (error) {
        console.error('Error fetching session stats:', error);
        setSessionStats({
          totalSessions: 0,
          daysActive: 1
        });
      } finally {
        setIsLoadingStats(false);
      }
    }

    fetchSessionStats();
  }, [user]);

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Calculate sessions remaining based on plan and usage
  const calculateSessionsRemaining = (
    subscription: SubscriptionData | null, 
    totalSessionsUsed: number
  ): number | string => {
    if (!subscription) return 0;
    
    // Define sessions per plan
    const sessionsPerPlan: {[key: string]: number | string} = {
      'essentials': 30,
      'professional': 'Unlimited',
      'enterprise': 'Unlimited'
    };
    
    // Get total sessions allowed for the plan
    const totalAllowed = sessionsPerPlan[subscription.plan.toLowerCase()] || 0;
    
    // For unlimited plans, return "Unlimited"
    if (totalAllowed === 'Unlimited') return 'Unlimited';
    
    // For limited plans, calculate remaining
    return Math.max(0, Number(totalAllowed) - totalSessionsUsed);
  };

  // Get plan display name
  const getPlanDisplayName = (plan: string) => {
    const planMap: {[key: string]: string} = {
      'essentials': 'Stride Essentials',
      'professional': 'Stride Professional',
      'enterprise': 'Stride Enterprise'
    };
    
    return planMap[plan.toLowerCase()] || plan;
  };

  // Get coaching mode icon
  const getCoachingModeIcon = (mode: string) => {
    switch(mode) {
      case 'strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        );
      case 'analysis':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'facilitation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'implementation':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      case 'challenge':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        );
    }
  };

  if (loading || isLoadingSubscription || isLoadingStats) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading your dashboard...</p>
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
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
            <button 
              onClick={() => logout()} 
              className="btn-secondary"
            >
              Log Out
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content - 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-8">
              {/* Progress Overview */}
              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Your Coaching Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="card p-4 bg-[var(--primary)]/5 text-center">
                    <h3 className="font-medium mb-1">Sessions Completed</h3>
                    <p className="text-2xl font-bold">{sessionStats?.totalSessions || 0}</p>
                  </div>
                  <div className="card p-4 bg-[var(--primary)]/5 text-center">
                    <h3 className="font-medium mb-1">Days Active</h3>
                    <p className="text-2xl font-bold">{sessionStats?.daysActive || 1}</p>
                  </div>
                  <div className="card p-4 bg-[var(--primary)]/5 text-center">
                    <h3 className="font-medium mb-1">Sessions Remaining</h3>
                    <p className="text-2xl font-bold">
                      {calculateSessionsRemaining(subscription, sessionStats?.totalSessions || 0)}
                    </p>
                  </div>
                </div>
                
                {/* Weekly Activity Chart */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Weekly Activity</h3>
                  <div className="h-24 flex items-end space-x-2">
                    {[15, 30, 45, 60, 25, 10, 35].map((height, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-[var(--primary)] rounded-t"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs mt-1">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Recent Insights */}
                <div>
                  <h3 className="font-medium mb-3">Recent Insights</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm">Your productivity increases by 27% when you start with focused work before checking email</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm">You've completed 3 goals this month, a 50% improvement from last month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Goals */}
              <div className="card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Upcoming Goals</h2>
                  <button className="text-sm text-[var(--primary)] hover:underline">View All</button>
                </div>
                
                <div className="space-y-4">
                  {upcomingGoals.map(goal => (
                    <div key={goal.id} className="card p-4 bg-[var(--background-alt)]">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">{goal.title}</h3>
                        <span className="text-xs bg-[var(--background)] px-2 py-1 rounded-full">
                          Due: {new Date(goal.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[var(--background)] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[var(--primary)]" 
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-foreground/60">{goal.progress}% complete</span>
                        <button className="text-xs text-[var(--primary)] hover:underline">Update</button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="btn-secondary w-full mt-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add New Goal
                </button>
              </div>
            </div>
            
            {/* Sidebar - 1/3 width on large screens */}
            <div className="space-y-8">
              {/* Start Coaching Session */}
              <div className="card p-6 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all">
                <h2 className="text-xl font-semibold mb-4">Start Coaching</h2>
                <p className="text-foreground/70 mb-4">
                  Choose a coaching mode or let Stride automatically select the best approach for your needs.
                </p>
                
                <div className="space-y-2 mb-6">
                  {['strategy', 'analysis', 'facilitation', 'implementation', 'challenge'].map(mode => (
                    <button 
                      key={mode}
                      className={`flex items-center w-full p-2 rounded-lg transition-all ${
                        activeCoachingMode === mode 
                          ? 'bg-[var(--primary)] text-white' 
                          : 'bg-[var(--background-alt)] hover:bg-[var(--primary)]/10'
                      }`}
                      onClick={() => setActiveCoachingMode(mode)}
                    >
                      <span className="w-6 h-6 flex items-center justify-center mr-2">
                        {getCoachingModeIcon(mode)}
                      </span>
                      <span className="capitalize">{mode} Mode</span>
                    </button>
                  ))}
                </div>
                
                <button 
                  onClick={() => router.push('/chat')} 
                  className="btn-primary w-full"
                >
                  Begin Session
                </button>
                <div className="mt-4 text-center">
                  <Link href="/timeline" className="text-[var(--primary)] hover:underline text-sm">
                    View your coaching timeline
                  </Link>
                </div>
              </div>
              
              {/* Subscription Info */}
              <div className="card p-6 border border-[var(--primary)]/20 hover:border-[var(--primary)]/40 transition-all">
                <h2 className="text-xl font-semibold mb-4">Your Subscription</h2>
                {subscription ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-medium text-lg">{getPlanDisplayName(subscription.plan)}</h3>
                        <p className="text-foreground/70 text-sm">
                          {subscription.isAnnual ? 'Annual billing' : 'Monthly billing'}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        subscription.status === 'active' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {subscription.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[var(--background-alt)] rounded-lg p-3 text-center">
                        <p className="text-sm text-foreground/70 mb-1">Sessions</p>
                        <p className="font-bold text-lg">{getSessionsPerMonth(subscription.plan)}</p>
                      </div>
                      <div className="bg-[var(--background-alt)] rounded-lg p-3 text-center">
                        <p className="text-sm text-foreground/70 mb-1">Next Billing</p>
                        <p className="font-bold text-lg">
                          {subscription.currentPeriodEnd 
                            ? formatDate(subscription.currentPeriodEnd).split(' ').slice(0, 2).join(' ') 
                            : 'N/A'}
                        </p>
                      </div>
                    </div>
                    
                    {subscription.plan.toLowerCase() === 'essentials' ? (
                      <Link href="/pricing" className="btn-primary block text-center w-full">
                        Upgrade Now
                      </Link>
                    ) : (
                      <div className="flex space-x-4">
                        <Link href="/account" className="btn-secondary flex-1 text-center">
                          Manage Plan
                        </Link>
                        <Link href="/account?tab=billing" className="btn-secondary flex-1 text-center">
                          Billing History
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="bg-[var(--background-alt)] rounded-lg p-4 mb-4 text-center">
                      <p className="text-foreground/70 mb-2">
                        You're currently on the Free Trial
                      </p>
                      <p className="font-bold mb-2">14 days remaining</p>
                      <p className="text-sm text-foreground/70">
                        Upgrade to continue after your trial ends
                      </p>
                    </div>
                    <Link href="/pricing" className="btn-primary block text-center w-full">
                      Upgrade Now
                    </Link>
                  </>
                )}
              </div>
              
              {/* Quick Resources */}
              <div className="card p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Resources</h2>
                <div className="space-y-3">
                  <Link href="/resources/productivity" className="flex items-center p-3 bg-[var(--background-alt)] rounded-lg hover:bg-[var(--primary)]/5 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Productivity Techniques</h3>
                      <p className="text-xs text-foreground/60">Optimize your workflow</p>
                    </div>
                  </Link>
                  
                  <Link href="/resources/leadership" className="flex items-center p-3 bg-[var(--background-alt)] rounded-lg hover:bg-[var(--primary)]/5 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Leadership Skills</h3>
                      <p className="text-xs text-foreground/60">Enhance your team management</p>
                    </div>
                  </Link>
                  
                  <Link href="/resources/communication" className="flex items-center p-3 bg-[var(--background-alt)] rounded-lg hover:bg-[var(--primary)]/5 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Communication Strategies</h3>
                      <p className="text-xs text-foreground/60">Improve your messaging</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
