'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import Link from "next/link";

export default function ExecutiveCoachSpecialist() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="text-sm font-medium text-foreground/60 hover:text-[var(--primary)]">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-foreground/40 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-sm font-medium text-foreground/40 ml-1">
                      Specialists
                    </span>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-foreground/40 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-sm font-medium text-foreground/40 ml-1">
                      Executive Coach
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-12">
            <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
              Leadership Specialist
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Executive Coach Specialist</h1>
            
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-transparent p-6 rounded-lg border-l-4 border-[var(--primary)] mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Personalized Coaching for Senior Leaders</h2>
              <p className="text-lg text-foreground/80">
                The Executive Coach Specialist provides personalized, high-impact coaching for senior leaders navigating complex organizational challenges. Drawing on evidence-based leadership frameworks and a deep understanding of executive contexts, this specialist helps C-suite executives, board members, and senior leaders enhance their strategic effectiveness, decision quality, and leadership impact.
              </p>
            </div>
            
            {/* Add the CTA button here */}
            <div className="mt-6 mb-8">
              <Link 
                href="/chat?specialist=executives" 
                className="btn-primary text-white px-6 py-3 rounded-md font-medium inline-block text-lg"
              >
                Start Executive Coaching Session
              </Link>
              <span className="ml-4 text-sm text-foreground/60">No commitment required</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Core Expertise Areas</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Strategic Leadership Development</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Vision creation, strategic planning, and organizational direction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Executive Decision Making: High-stakes decision frameworks and cognitive enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Stakeholder Management: Board relationships, executive team dynamics, and influence strategies</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Leadership Communication</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>High-impact messaging and executive presence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Crisis Leadership: Navigating organizational challenges under pressure</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Leadership Versatility: Adapting leadership approaches to different situations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">When to Choose an Executive Coach</h2>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're a CEO or C-suite executive seeking to enhance your leadership impact</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're a board member or director looking to improve governance effectiveness</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're a senior leader in transition to a higher-level role</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're facing complex organizational challenges requiring strategic leadership</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're navigating significant strategic decisions with far-reaching implications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>You're leading a senior team that needs greater alignment and effectiveness</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Specialized Coaching Modes</h2>
            <p className="text-center text-foreground/80 mb-10 max-w-3xl mx-auto">
              The Executive Coach offers specialized interaction modes designed to address specific leadership challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Strategic Leadership Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Strategic Leadership Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Vision development and strategic direction for organizational leadership, helping you create and communicate compelling futures.
                </p>
              </div>
              
              {/* Executive Performance Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Executive Performance Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Decision quality and leadership effectiveness enhancement, focusing on high-stakes decision frameworks and cognitive enhancement.
                </p>
              </div>
              
              {/* Stakeholder Management Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Stakeholder Management Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Relationship navigation and influence building with board members, executive teams, and key organizational stakeholders.
                </p>
              </div>
              
              {/* Executive Communication Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Executive Communication Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  High-stakes messaging and presence development for leadership communications that inspire and align organizations.
                </p>
              </div>
              
              {/* Board Preparation Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Board Preparation Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Governance effectiveness and board relationship development for executives working with boards of directors.
                </p>
              </div>
              
              {/* Crisis Management Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Crisis Management Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  High-pressure situation leadership for navigating organizational challenges, crises, and critical transitions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--background-alt)] p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Adaptation Capabilities</h2>
            <p className="mb-4 text-foreground/80">
              The Executive Coach adapts to your specific leadership context and preferences:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Leadership Style:</strong> Adapts to directive, consultative, or collaborative approaches based on your preferred leadership style</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Communication Preferences:</strong> Adjusts information density, structure, and analytical approach to match your processing style</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Industry Context:</strong> Tailors guidance to specific industry dynamics and challenges you're facing</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Executive Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial 
                quote="The Executive Coach has been transformative for my leadership. The strategic leadership mode helped me develop a compelling vision that aligned our entire organization, while the stakeholder management guidance improved my board relationships dramatically."
                author="Jennifer L."
                title="CEO, Healthcare Technology"
              />
              
              <Testimonial 
                quote="As a newly appointed C-suite executive, I needed to quickly establish my leadership presence. The Executive Coach provided frameworks that helped me make high-quality decisions under pressure and communicate with clarity and impact."
                author="Michael R."
                title="CFO, Manufacturing Enterprise"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">The Executive Coaching Approach</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="mb-4 text-foreground/80">
                  The Executive Coach combines incisive questioning with strategic frameworks, balancing supportive guidance with appropriate challenge. Each coaching relationship builds on a foundation of confidentiality, executive-level perspective, and continuous adaptation to the leader's evolving needs.
                </p>
                <p className="text-foreground/80">
                  Whether you're navigating a critical transition, facing complex stakeholder dynamics, or seeking to enhance your strategic impact, the Executive Coach provides personalized support that respects your expertise while expanding your leadership capabilities.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white dark:bg-[var(--background-alt)] p-6 rounded-full h-40 w-40 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <p className="text-[var(--primary)] font-bold text-xl">Executive</p>
                    <p className="text-3xl font-bold">Impact</p>
                    <p className="text-sm text-foreground/60 mt-1">Leadership excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-[var(--background-alt)] p-10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Elevate Your Leadership?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Join senior leaders who are enhancing their strategic impact, decision quality, and leadership effectiveness with specialized executive coaching.
            </p>
            <Link 
              href="/chat?specialist=executives" 
              className="btn-primary text-white px-8 py-4 rounded-md font-medium inline-block text-lg"
            >
              Start Your Executive Coaching Journey
            </Link>
            <p className="text-sm text-foreground/60 mt-4">Confidential, personalized, and tailored to your leadership context.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
