import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Stride Features</h1>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Discover how Stride's innovative features create a personalized coaching experience that evolves with you over time.
            </p>
          </div>
          
          {/* Core Features Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Core Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="card p-8 shadow-depth">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Continuous Memory</h3>
                <p className="text-foreground/70 mb-6">
                  Unlike traditional coaching apps that reset with each session, Stride builds a comprehensive understanding of you over time. It remembers your history, preferences, challenges, and progress—no need to repeat yourself or start over.
                </p>
                <div className="card p-4 bg-[var(--background-alt)]">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold mr-3 mt-1">S</div>
                    <div className="bg-[var(--background)] p-3 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm">Last week you mentioned feeling stuck on your project timeline. How did the prioritization exercise we discussed work out for you?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-8 shadow-depth">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Strategies</h3>
                <p className="text-foreground/70 mb-6">
                  Stride adapts to your unique needs, learning which coaching approaches work best for you. It provides custom strategies and techniques based on your specific challenges, preferences, and progress.
                </p>
                <div className="card p-4 bg-[var(--background-alt)]">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold mr-3 mt-1">S</div>
                    <div className="bg-[var(--background)] p-3 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm">I've noticed the Pomodoro technique works well for your productivity style. Would you like to try an enhanced version today that includes structured reflection periods?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card p-8 shadow-depth">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Progress Visualization</h3>
                <p className="text-foreground/70 mb-6">
                  Track your professional journey with intuitive tools that show patterns, insights, and growth over time. Stride helps you recognize your progress and understand the factors that influence your performance.
                </p>
                <div className="card p-4 bg-[var(--background-alt)]">
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Goal Completion Rate</span>
                        <span className="text-sm text-[var(--primary)]">+23%</span>
                      </div>
                      <div className="w-full h-2 bg-[var(--background)] rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-[var(--primary)]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Focus Sessions</span>
                        <span className="text-sm text-[var(--primary)]">+45%</span>
                      </div>
                      <div className="w-full h-2 bg-[var(--background)] rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-[var(--primary)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card p-8 shadow-depth">
                <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-6 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">In-the-Moment Support</h3>
                <p className="text-foreground/70 mb-6">
                  Get coaching exactly when you need it, whether scheduled or during unexpected challenges. Stride is available 24/7 for both brief check-ins and deeper strategic sessions, providing support during critical moments.
                </p>
                <div className="card p-4 bg-[var(--background-alt)]">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold mr-3 mt-1">S</div>
                    <div className="bg-[var(--background)] p-3 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm">I can see you're feeling overwhelmed with your current workload. Let's take a moment to prioritize your tasks and create a manageable plan for the next 24 hours.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Communication Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Flexible Communication</h2>
            
            <div className="card p-8 shadow-depth mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Seamless Text & Voice Interaction</h3>
                  <p className="text-foreground/70 mb-6">
                    Communicate with Stride however feels most comfortable for you. Switch seamlessly between text and voice—even mid-conversation—as your needs and preferences change.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Text when you prefer typing</strong> - Perfect for processing thoughts carefully or when voice isn't an option</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Voice when you need to talk</strong> - Express yourself naturally through conversation when typing feels limiting</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Context maintained across modalities</strong> - TherapyKin remembers your conversation regardless of how you communicate</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="card p-6 shadow-depth">
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3 mt-1">U</div>
                      <div className="bg-[var(--primary)]/10 p-3 rounded-lg rounded-tl-none max-w-xs">
                        <p className="text-sm">I'm driving to my meeting and need to prepare my talking points.</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-4 justify-end">
                      <div className="bg-[var(--background-alt)] p-3 rounded-lg rounded-tr-none max-w-xs">
                        <p className="text-sm">I understand you're on the go. Would you prefer to switch to voice mode so we can prepare your talking points hands-free?</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold ml-3 mt-1">S</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-[var(--background)] p-2 rounded-full shadow-sm flex items-center">
                        <button className="px-3 py-1 rounded-full bg-[var(--primary)] text-white text-xs font-medium">Switch to Voice</button>
                        <span className="mx-2 text-xs text-foreground/60">or</span>
                        <button className="px-3 py-1 rounded-full bg-transparent text-xs font-medium">Continue Typing</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Multi-Device Access</h3>
                <p className="text-foreground/70">
                  Access Stride from your phone, tablet, computer, or smart speaker. Your coaching relationship continues seamlessly across all your devices.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Voice Customization</h3>
                <p className="text-foreground/70">
                  Choose from a variety of natural-sounding voices for Stride's responses. Select the voice that feels most comfortable and motivating for your coaching journey.
                </p>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Conversation</h3>
                <p className="text-foreground/70">
                  Interact with Stride through natural conversation—just like texting or talking with a human coach. No complicated interfaces or rigid structures, just genuine dialogue.
                </p>
              </div>
            </div>
          </section>
          
          {/* Coaching Approaches */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Specialized Coaching Modes</h2>
            
            <p className="text-center max-w-3xl mx-auto mb-12 text-foreground/70">
              Stride incorporates techniques from proven coaching methodologies, delivered conversationally and adapted to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Strategy Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Big-picture thinking and long-term planning to help you develop vision alignment and priority identification.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "Let's take a step back and look at how this project aligns with your quarterly objectives. What would success look like six months from now?"
                  </p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Analysis Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Data-driven insights and pattern recognition to help you track progress and provide objective assessment.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "I've noticed that your productivity peaks on Tuesdays and Wednesdays, but tends to drop on Fridays. Let's explore what factors might be influencing this pattern."
                  </p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Facilitation Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Meeting preparation, communication strategies, and process optimization to enhance your workflow.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "For tomorrow's team meeting, let's structure an agenda that addresses the key concerns while leaving room for collaborative problem-solving."
                  </p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Connection Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Relationship management insights, networking strategies, and team dynamics to improve your interpersonal effectiveness.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "When approaching this difficult conversation with your colleague, consider starting with appreciation before addressing the concerns you've mentioned."
                  </p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Implementation Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Action plan development, task management, and execution strategy to enhance your productivity.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "Let's break down this project into specific action items with clear owners and deadlines to ensure consistent progress toward your goal."
                  </p>
                </div>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <h3 className="text-xl font-semibold mb-3">Challenge Mode</h3>
                <p className="text-foreground/70 mb-4">
                  Cognitive bias identification, assumption testing, and constructive pushback to help you overcome plateaus.
                </p>
                <div className="bg-[var(--background-alt)] p-3 rounded-lg text-sm">
                  <p className="italic">
                    "I'd like to challenge that assumption. What evidence do you have that this approach won't work? What might happen if you tried it anyway?"
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Privacy & Security */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Privacy & Security Features</h2>
            
            <div className="card p-8 shadow-depth mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Built with Privacy as the Foundation</h3>
                  <p className="text-foreground/70 mb-6">
                    Stride was designed from the ground up with your privacy as the top priority. We believe your coaching journey should be completely private and secure.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>End-to-end encryption</strong> for all conversations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Never used to train AI models</strong> - Your personal information and conversations are never used to improve our AI</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Complete data deletion</strong> - Delete any or all of your data at any time with one-click permanent removal</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="card p-6 shadow-depth bg-[var(--background-alt)]">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-medium">Privacy Controls</h4>
                      <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded-full">Premium</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Data Storage</label>
                          <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out rounded-full bg-[var(--primary)]">
                            <span className="absolute right-1 top-1 w-4 h-4 transition duration-100 ease-in-out transform bg-white rounded-full"></span>
                          </div>
                        </div>
                        <p className="text-xs text-foreground/60">Manage how your data is stored</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Auto-Delete History</label>
                          <select className="text-xs p-1 border border-black/10 dark:border-white/10 rounded">
                            <option>After 30 days</option>
                            <option>After 90 days</option>
                            <option>After 1 year</option>
                            <option>Never</option>
                          </select>
                        </div>
                        <p className="text-xs text-foreground/60">Automatically delete conversation history</p>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="text-sm font-medium">Anonymous Mode</label>
                          <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out rounded-full bg-[var(--background)]">
                            <span className="absolute left-1 top-1 w-4 h-4 transition duration-100 ease-in-out transform bg-foreground/30 rounded-full"></span>
                          </div>
                        </div>
                        <p className="text-xs text-foreground/60">Use without personal identifiers</p>
                      </div>
                      
                      <button className="w-full bg-[var(--primary)] text-white py-2 rounded-lg text-sm">
                        Export All My Data
                      </button>
                      
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm">
                        Delete All My Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/privacy" className="btn-secondary inline-flex items-center">
                Learn More About Our Privacy Approach
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </section>
          
          {/* Advanced Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Advanced Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card p-8 shadow-depth">
                <h3 className="text-xl font-semibold mb-4">Performance & Pattern Analysis</h3>
                <p className="text-foreground/70 mb-6">
                  Stride analyzes patterns in your work habits and performance over time, providing insights about factors that influence your productivity and success. Identify triggers, track progress, and understand your unique patterns.
                </p>
                <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Your Monthly Insights</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>Your productivity increases by 27% when you start with focused work before checking email</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                      <span>Meeting-heavy days correlate with a 32% decrease in task completion</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-4 w-4 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Your goal achievement rate has increased by 35% this quarter</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="card p-8 shadow-depth">
                <h3 className="text-xl font-semibold mb-4">Personalized Growth Plan</h3>
                <p className="text-foreground/70 mb-6">
                  Based on your interactions, Stride develops a customized growth plan with specific skills to practice, goals to work toward, and strategies tailored to your needs. The plan evolves as you progress.
                </p>
                <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                  <h4 className="font-medium mb-3">Your Current Focus Areas</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Strategic Thinking</span>
                        <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded-full">In Progress</span>
                      </div>
                      <p className="text-xs text-foreground/70">Weekly scenario planning exercises</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Delegation Skills</span>
                        <span className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded-full">In Progress</span>
                      </div>
                      <p className="text-xs text-foreground/70">Task analysis and team capability mapping</p>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Presentation Skills</span>
                        <span className="text-xs bg-[var(--background)] px-2 py-0.5 rounded-full">Upcoming</span>
                      </div>
                      <p className="text-xs text-foreground/70">Starting next week</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Integration Features */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Smart Integrations</h2>
            
            <div className="card p-8 shadow-depth">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect Your Workflow Tools</h3>
                  <p className="text-foreground/70 mb-6">
                    Stride integrates with your existing productivity tools to provide context-aware coaching and streamline your workflow. Connect your calendar, task manager, and more for a seamless experience.
                  </p>
                  <div className="bg-[var(--background-alt)] border border-[var(--primary)]/20 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-[var(--primary)] mb-2">Professional & Enterprise Features</h4>
                    <p className="text-sm">
                      Advanced integrations are available on our Professional and Enterprise plans, allowing for deeper workflow connections and team collaboration features.
                    </p>
                  </div>
                  <p className="text-foreground/70">
                    Stride can help you prepare for meetings, manage tasks, and track progress across your entire productivity ecosystem.
                  </p>
                </div>
                <div>
                  <div className="card p-6 shadow-depth">
                    <h4 className="font-medium mb-4">Available Integrations</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs">Calendar</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        </div>
                        <span className="text-xs">Tasks</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-xs">Email</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                          </svg>
                        </div>
                        <span className="text-xs">Notes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        <span className="text-xs">Chat</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-lg bg-[var(--background-alt)] flex items-center justify-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                        <span className="text-xs">Analytics</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="w-full bg-[var(--primary)] text-white py-2 rounded-lg text-sm">
                        Connect Your Tools
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section>
            <div className="card p-8 shadow-depth text-center">
              <h2 className="text-2xl font-bold mb-4">Experience Stride For Yourself</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Start your journey with a coaching companion that remembers, adapts, and grows with you. No credit card required for your 14-day free trial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/register" 
                  className="btn-primary px-8 py-3 text-lg"
                >
                  Try Stride Free
                </Link>
                <Link 
                  href="/pricing" 
                  className="btn-secondary px-8 py-3 text-lg"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
