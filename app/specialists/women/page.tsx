'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import Link from "next/link";

export default function WomenSpecialist() {
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
                      Empowered Woman Coach
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-12">
            <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
              Career Specialist
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Empowered Woman Coach Specialist</h1>
            
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-transparent p-6 rounded-lg border-l-4 border-[var(--primary)] mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Navigate Professional Environments with Confidence</h2>
              <p className="text-lg text-foreground/80">
                The Empowered Woman Coach Specialist combines strategic career advancement tactics with gender-specific insights to help women navigate professional environments with confidence and authenticity. This specialist delivers practical strategies for overcoming systemic barriers while building the skills, networks, and mindset needed for sustainable success.
              </p>
            </div>
            
            {/* Add the CTA button here */}
            <div className="mt-6 mb-8">
              <Link 
                href="/chat?specialist=women" 
                className="btn-primary text-white px-6 py-3 rounded-md font-medium inline-block text-lg"
              >
                Start Women's Coaching Session
              </Link>
              <span className="ml-4 text-sm text-foreground/60">No commitment required</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Core Expertise Areas</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Professional Advancement Strategies</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Career pathing in male-dominated environments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strategic visibility and recognition tactics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Promotion preparation and advancement timing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Building credential and experience portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Specialized paths vs. generalist approaches</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Communication & Influence</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Gender-conscious assertive communication</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Overcoming interruption and idea attribution issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Negotiation tactics addressing gender biases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Executive presence development for women</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Managing perception and impression formation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Work-Life Integration</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Boundary setting without career penalties</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strategic pregnancy and family planning timing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Re-entry strategies after parental leave</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Outsourcing and delegation frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Partner expectation management and agreements</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Support Network Development</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strategic mentorship and sponsorship acquisition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Women's professional network building</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Male ally identification and cultivation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Industry-specific women's community engagement</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cross-industry connection strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Specialized Coaching Modes</h2>
            <p className="text-center text-foreground/80 mb-10 max-w-3xl mx-auto">
              The Empowered Woman Coach offers specialized interaction modes designed to address specific professional challenges women face.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Professional Advancement Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Professional Advancement Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Develop strategic career plans, identify advancement opportunities, and build the skills and visibility needed to progress in your chosen field.
                </p>
              </div>
              
              {/* Communication & Influence Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Communication & Influence Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Master gender-conscious communication techniques, develop executive presence, and build persuasive skills that help you be heard and respected.
                </p>
              </div>
              
              {/* Work-Life Integration Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Work-Life Integration Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Create sustainable boundaries, manage competing priorities, and develop strategies for career continuity through life transitions.
                </p>
              </div>
              
              {/* Support Network Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Support Network Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Build powerful professional relationships, identify mentors and sponsors, and create communities that support your advancement.
                </p>
              </div>
              
              {/* Gender Bias Navigation Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Gender Bias Navigation Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Develop practical tactics for recognizing and addressing gender bias while maintaining career momentum and personal wellbeing.
                </p>
              </div>
              
              {/* Leadership Development Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Leadership Development Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Build leadership capabilities that leverage your authentic strengths while preparing you for increasing levels of responsibility and influence.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--background-alt)] p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Methodological Approach</h2>
            <p className="mb-4 text-foreground/80">
              The Empowered Woman Coach combines elements from proven professional development approaches:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Strategic Self-Advocacy:</strong> Frameworks for effective self-promotion that navigate gender expectations while building visibility</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Gender-Aware Negotiation:</strong> Tailored negotiation approaches that address the "likeability penalty" while achieving desired outcomes</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Impression Management:</strong> Techniques for strategically managing others' perceptions while maintaining authenticity</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Confidence Engineering:</strong> Evidence-based approaches to building and projecting confidence in challenging environments</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Network Mapping:</strong> Systematic identification and cultivation of key relationships that specifically support women's advancement</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Ideal For Women Who Are:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <h3 className="font-medium">Navigating male-dominated industries</h3>
                </div>
                <p className="text-sm text-foreground/70">Strategies for success in environments where women are underrepresented</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  <h3 className="font-medium">Preparing for promotion</h3>
                </div>
                <p className="text-sm text-foreground/70">Positioning yourself effectively for advancement opportunities</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="font-medium">Returning after parental leave</h3>
                </div>
                <p className="text-sm text-foreground/70">Strategies for successful re-entry and career continuity</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <h3 className="font-medium">Building executive presence</h3>
                </div>
                <p className="text-sm text-foreground/70">Developing leadership presence that commands respect</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5"></path>
                  </svg>
                  <h3 className="font-medium">Facing gender-based challenges</h3>
                </div>
                <p className="text-sm text-foreground/70">Practical tactics for addressing bias and stereotypes</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="font-medium">Negotiating compensation</h3>
                </div>
                <p className="text-sm text-foreground/70">Gender-aware strategies for effective negotiation</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                  </svg>
                  <h3 className="font-medium">Balancing career and personal life</h3>
                </div>
                <p className="text-sm text-foreground/70">Creating sustainable integration of professional and personal priorities</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <h3 className="font-medium">Building professional networks</h3>
                </div>
                <p className="text-sm text-foreground/70">Strategic relationship development for career advancement</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <h3 className="font-medium">Developing authentic leadership</h3>
                </div>
                <p className="text-sm text-foreground/70">Building leadership capabilities that leverage your unique strengths</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial 
                quote="The Empowered Woman Coach helped me navigate a challenging promotion process in a male-dominated industry. The communication strategies and executive presence techniques were transformative for my career trajectory."
                author="Rebecca T."
                title="Senior Engineering Manager"
              />
              
              <Testimonial 
                quote="After returning from maternity leave, I was struggling to regain my professional footing. The re-entry strategies and work-life integration techniques helped me rebuild my career momentum while maintaining boundaries."
                author="Sophia M."
                title="Finance Director"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Advance Your Career with Confidence</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="mb-4 text-foreground/80">
                  Navigating professional environments as a woman often requires specialized strategies that address unique challenges and leverage distinctive strengths. The Empowered Woman Coach provides tailored guidance that combines proven career advancement tactics with gender-specific insights.
                </p>
                <p className="text-foreground/80">
                  Whether you're breaking into a male-dominated field, preparing for a significant career transition, or seeking to enhance your leadership impact, our specialized coaching provides the strategic support you need to advance with confidence and authenticity.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white dark:bg-[var(--background-alt)] p-6 rounded-full h-40 w-40 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <p className="text-[var(--primary)] font-bold text-xl">Empowered</p>
                    <p className="text-3xl font-bold">Growth</p>
                    <p className="text-sm text-foreground/60 mt-1">Authentic leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-[var(--background-alt)] p-10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Advance Your Career?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Join women who are navigating professional challenges, building powerful networks, and advancing their careers with confidence and authenticity.
            </p>
            <Link 
              href="/chat?specialist=women" 
              className="btn-primary text-white px-8 py-4 rounded-md font-medium inline-block text-lg"
            >
              Start Your Coaching Journey
            </Link>
            <p className="text-sm text-foreground/60 mt-4">Personalized guidance for your unique professional context and goals.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
