import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlexibleUsage from "./components/FlexibleUsage";
import PrivacySection from "./components/PrivacySection";
import FeatureHighlights from "./components/FeatureHighlights";
import UserStories from "./components/UserStories";
import CommunicationFlexibility from "./components/CommunicationFlexibility";
import CoachingComparison from "./components/CoachingComparison";
import GettingStarted from "./components/GettingStarted";
import PricingTiers from "./components/PricingTiers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="pt-16">
      {/* Hero Section with improved background */}
      <header className="flex flex-col items-center justify-center text-center py-24 px-4 relative overflow-hidden">
        {/* Modern gradient background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1D4E4E] via-[#3A8C8C] to-[#2ECC71] z-0">
          {/* Abstract geometric shapes for visual interest */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-white"></div>
            <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-white"></div>
          </div>
          
          {/* Animated subtle wave pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmgxOHYtNkgzNnptMCAxMnY2aDE4di02SDM2em0wIDEydjZoMTh2LTZIMzZ6TTAgMzR2NmgzMHYtNkgwem0wLTMwdjZoMzB2LTZIMHptMCAxMnY2aDMwdi02SDB6bTAgMTJ2NmgzMHYtNkgwem0wIDEydjZoMzB2LTZIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        </div>
        
        {/* Content with improved visual treatment */}
        <div className="animate-fade-in max-w-6xl mx-auto text-white z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">
            Your AI Executive Coach
          </h1>
          <h2 className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white font-medium drop-shadow-md">
            Strategic guidance for professional excellence, available 24/7 to accelerate your career growth.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="btn-primary hero-btn btn-lg"
            >
              TRY STRIDE FREE
            </Link>
            <Link 
              href="/learn-more" 
              className="btn-secondary btn-lg"
            >
              See how it works →
            </Link>
          </div>
        </div>
        
        {/* Floating abstract elements for depth */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white opacity-10 animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 rounded-full bg-white opacity-15 animate-float-slow"></div>
      </header>

      {/* Value Proposition Strip */}
      <section className="py-16 px-4 bg-[var(--background-alt)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">One Coach. Seven Specialized Modes. Unlimited Potential.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="font-medium">Strategy</h3>
              <p className="text-sm text-foreground/70">Vision & Planning</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-medium">Analysis</h3>
              <p className="text-sm text-foreground/70">Data & Patterns</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Facilitation</h3>
              <p className="text-sm text-foreground/70">Meetings & Process</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-medium">Connection</h3>
              <p className="text-sm text-foreground/70">Relationships & Networks</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-medium">Implementation</h3>
              <p className="text-sm text-foreground/70">Action & Execution</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-medium">Documentation</h3>
              <p className="text-sm text-foreground/70">Knowledge & Context</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-medium">Challenge</h3>
              <p className="text-sm text-foreground/70">Growth & Perspective</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Usage Scenarios - NEW SECTION */}
      <FlexibleUsage />

      {/* Privacy Section - MOVED HIGHER */}
      <PrivacySection />
      
      {/* Coaching Comparison */}
      <CoachingComparison />

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Coaching That Adapts to Your Needs</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">A personalized experience that grows with you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="card p-6 card-hover-lift">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Professional Assessment</h3>
              <p className="text-foreground/70 mb-4">Tell Stride about your career goals, leadership challenges, and work style to create your tailored executive coaching plan.</p>
              <div className="mt-4 bg-[var(--background-alt)] rounded-lg p-4">
                <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--primary)] w-3/4 rounded-full"></div>
                </div>
                <p className="text-xs text-foreground/60 mt-2">Profile completion: 75%</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="card p-6 card-hover-lift">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Mode-Switching</h3>
              <p className="text-foreground/70 mb-4">Stride automatically selects the right coaching approach based on your current situation and needs.</p>
              <div className="mt-4 flex space-x-2">
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[var(--primary)] animate-pulse"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[var(--primary)]/50"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[var(--primary)]/50"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[var(--primary)]/50"></div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="card p-6 card-hover-lift">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Ongoing Development</h3>
              <p className="text-foreground/70 mb-4">Track your growth, receive personalized recommendations, and maintain momentum toward your goals.</p>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs">Goal 1</span>
                  <span className="text-xs font-medium">68%</span>
                </div>
                <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] w-[68%] rounded-full"></div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs">Goal 2</span>
                  <span className="text-xs font-medium">42%</span>
                </div>
                <div className="w-full h-2 bg-white/50 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--accent)] w-[42%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/register" 
              className="btn-primary"
            >
              START YOUR JOURNEY
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Carousel */}
      <section className="py-20 px-4 bg-[var(--background-alt)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">How Professionals Use Stride</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">Real solutions for real challenges.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 card-hover-glow">
              <div className="h-40 bg-[var(--primary)]/5 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--primary)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Career Advancement</h3>
              <p className="text-foreground/70 mb-4">"Stride helps me prepare for critical meetings, track my development goals, and identify growth opportunities I might have missed."</p>
            </div>
            
            <div className="card p-6 card-hover-glow">
              <div className="h-40 bg-[var(--primary)]/5 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--primary)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Building</h3>
              <p className="text-foreground/70 mb-4">"As a founder, I need guidance across multiple domains. Stride adapts to whatever challenge I'm facing—from pitch preparation to team management."</p>
            </div>
            
            <div className="card p-6 card-hover-glow">
              <div className="h-40 bg-[var(--primary)]/5 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--primary)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-foreground/70 mb-4">"Stride doesn't just help me be more productive—it helps me prioritize what matters and create boundaries that preserve my wellbeing."</p>
            </div>
            
            <div className="card p-6 card-hover-glow">
              <div className="h-40 bg-[var(--primary)]/5 rounded-lg mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--primary)]/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
              <p className="text-foreground/70 mb-4">"The personalized learning pathways and accountability features have accelerated my professional development in ways traditional courses couldn't."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Always-On Coaching Intelligence</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">Powerful features designed for your success.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-6 card-hover-border">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Context-Aware Guidance</h3>
              <p className="text-foreground/70">Stride remembers your full history, challenges, and preferences to provide relevant advice that builds on previous insights.</p>
            </div>
            
            <div className="card p-6 card-hover-border">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Platform Experience</h3>
              <p className="text-foreground/70">Access your coach via iOS, Android, web, or desktop applications—your experience remains seamless across all devices.</p>
            </div>
            
            <div className="card p-6 card-hover-border">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Integrations</h3>
              <p className="text-foreground/70">Connect your existing tools to enhance Stride's capabilities and embed coaching directly in your workflow.</p>
            </div>
            
            <div className="card p-6 card-hover-border">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy-First Design</h3>
              <p className="text-foreground/70">Your data remains private and secure with enterprise-grade encryption and complete control over data retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[var(--background-alt)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">The Stride Difference</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">Hear from professionals who've transformed their approach with Stride.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael T.</h4>
                  <p className="text-sm text-foreground/70">Startup Founder</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"Having my AI coach remember every detail of my business journey has been invaluable—it's like having a mentor who's always up to speed."</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah J.</h4>
                  <p className="text-sm text-foreground/70">Corporate Trainer</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"Stride helped me transition careers with confidence. The preparation for interviews and negotiation guidance was game-changing."</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">Emily C.</h4>
                  <p className="text-sm text-foreground/70">Marketing Director</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"The meeting preparation mode alone has saved me hours while making me more effective with my team."</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">David K.</h4>
                  <p className="text-sm text-foreground/70">Senior Engineer</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"As a busy parent and professional, Stride helps me stay focused on what matters most each day."</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">Olivia P.</h4>
                  <p className="text-sm text-foreground/70">Creative Professional</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"The business planning guidance helped me double my freelance income in six months."</p>
            </div>
            
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/20 mr-4"></div>
                <div>
                  <h4 className="font-medium">Robert W.</h4>
                  <p className="text-sm text-foreground/70">Sales Manager</p>
                </div>
              </div>
              <p className="text-foreground/80 italic">"Stride's challenge mode pushed me to rethink my approach when I was stuck in a career plateau."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Choose Your Path</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">Select the plan that fits your needs.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 card-hover-lift">
              <h3 className="text-xl font-semibold mb-2">Stride Essentials</h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-foreground/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Daily coaching access</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Core coaching modes</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Basic tool integrations</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Mobile and web apps</span>
                </li>
              </ul>
              <Link 
                href="/register" 
                className="btn-primary w-full text-center block"
              >
                START FREE TRIAL
              </Link>
            </div>
            
            <div className="card p-6 card-hover-lift relative border-2 border-[var(--primary)]">
              <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <h3 className="text-xl font-semibold mb-2">Stride Professional</h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-foreground/70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited coaching access</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All coaching modes</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Complete integrations suite</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>All platforms</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <Link 
                href="/register" 
                className="btn-primary w-full text-center block"
              >
                START FREE TRIAL
              </Link>
            </div>
            
            <div className="card p-6 card-hover-lift">
              <h3 className="text-xl font-semibold mb-2">Stride Enterprise</h3>
              <div className="flex items-end mb-6">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-foreground/70 ml-2">pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Team deployment</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Admin dashboard</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>White labeling options</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--accent)] mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated support</span>
                </li>
              </ul>
              <Link 
                href="/contact-sales" 
                className="btn-secondary w-full text-center block"
              >
                CONTACT SALES
              </Link>
            </div>
          </div>
          
          <p className="text-center text-foreground/70 mt-8">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#1D4E4E] via-[#3A8C8C] to-[#2ECC71] texture-overlay animated-bg relative text-white">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Start Your Coaching Journey Today</h2>
          <p className="text-xl mb-10 font-medium drop-shadow-sm">Join thousands of professionals making consistent progress toward their goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="rounded-full bg-white text-[#3563E9] px-8 py-3 font-medium hover:bg-opacity-90 transition-all shadow-lg hero-btn btn-cta"
            >
              TRY STRIDE FREE FOR 14 DAYS
            </Link>
          </div>
          
          <div className="mt-12"></div>
          
          <p className="mt-10 font-medium">Questions? Contact us at <a href="mailto:info@stridecoaching.ai" className="underline hover:text-white/80">info@stridecoaching.ai</a></p>
          <p className="mt-4 text-xs max-w-2xl mx-auto font-medium">Stride is designed to complement your professional development journey. For specialized career advice, please consult with qualified professionals in your field.</p>
        </div>
        
        {/* Add semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        
        {/* Add decorative elements */}
        <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden z-[-1] opacity-10">
          <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute top-[20%] left-[10%] w-40 h-40 rounded-full bg-white"></div>
        </div>
      </section>

      </div>
      
      <Footer />
    </div>
  );
}
