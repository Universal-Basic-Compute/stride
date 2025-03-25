'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";
import Link from "next/link";

export default function EntrepreneurSpecialist() {
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
                      Entrepreneur Coach
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-12">
            <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
              Business Specialist
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Entrepreneur Coach Specialist</h1>
            
            <div className="bg-gradient-to-r from-[var(--primary)]/5 to-transparent p-6 rounded-lg border-l-4 border-[var(--primary)] mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">Build Sustainable, Scalable Businesses</h2>
              <p className="text-lg text-foreground/80">
                The Entrepreneur Coach Specialist combines proven business strategy frameworks with founder psychology expertise to help entrepreneurs build sustainable, scalable businesses while maintaining personal wellbeing. This specialist delivers actionable guidance for every stage of the entrepreneurial journey—from idea validation to scaling operations.
              </p>
            </div>
            
            {/* Add the CTA button here */}
            <div className="mt-6 mb-8">
              <Link 
                href="/chat?specialist=entrepreneurs" 
                className="btn-primary text-white px-6 py-3 rounded-md font-medium inline-block text-lg"
              >
                Start Entrepreneur Coaching Session
              </Link>
              <span className="ml-4 text-sm text-foreground/60">No commitment required</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Core Expertise Areas</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Business Model Development</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Value proposition refinement and validation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Business model canvas development and iteration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Revenue stream diversification strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Market sizing and opportunity assessment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Competitive landscape analysis and positioning</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Resource Optimization</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Bootstrapping and lean startup methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cash flow management and financial runway extension</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strategic prioritization under resource constraints</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Capital allocation decision frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Fundraising strategies and investor relations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Founder Psychology</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Resilience building for entrepreneurial challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Managing uncertainty and decision fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Founder identity and personal sustainability</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Impostor syndrome and self-limiting belief management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Work-life integration for high-demand roles</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Growth & Scaling</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Customer acquisition and retention strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Team building and first-time hiring frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Systems and processes for scalable operations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Strategic partnerships and channel development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Pivot decisions and execution strategies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Specialized Coaching Modes</h2>
            <p className="text-center text-foreground/80 mb-10 max-w-3xl mx-auto">
              The Entrepreneur Coach offers specialized interaction modes designed to address specific entrepreneurial challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Entrepreneurial Strategy Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Entrepreneurial Strategy Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Develop clarity around business vision, market opportunity, competitive advantage, and strategic priorities while creating actionable plans to achieve them.
                </p>
              </div>
              
              {/* Funding Strategy Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Funding Strategy Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Create effective capital acquisition strategies, prepare for investor conversations, and make sound financial decisions to support business growth.
                </p>
              </div>
              
              {/* Product Development Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Product Development Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Build valuable products and services through effective development processes, customer validation, and iterative improvement methodologies.
                </p>
              </div>
              
              {/* Team Building Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Team Building Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Develop effective teams, leadership capabilities, and healthy organizational cultures that support sustainable business growth.
                </p>
              </div>
              
              {/* Marketing & Growth Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Marketing & Growth Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Create effective customer acquisition systems, build compelling brands, and develop sustainable growth engines for your business.
                </p>
              </div>
              
              {/* Financial Management Mode */}
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-8 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Financial Management Mode</h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Master cash flow management, financial modeling, budgeting, and strategic financial decision-making to ensure business sustainability.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--background-alt)] p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Methodological Approach</h2>
            <p className="mb-4 text-foreground/80">
              The Entrepreneur Coach draws from proven entrepreneurial development frameworks:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Lean Methodology:</strong> Rapid experimentation, validated learning, and iterative product development approaches that minimize waste</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Founder Roadmapping:</strong> Structured planning that balances visionary goals with pragmatic, resource-constrained execution steps</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Critical Path Identification:</strong> Tools for determining the highest-leverage activities that directly impact business success metrics</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Decision Velocity:</strong> Approaches that optimize for appropriate speed and quality of decisions based on their reversibility and impact</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[var(--primary)] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><strong>Antifragile Planning:</strong> Strategies that not only withstand uncertainty but potentially benefit from it through optionality and adaptation</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Ideal For Entrepreneurs Who Are:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <h3 className="font-medium">Launching or pivoting</h3>
                </div>
                <p className="text-sm text-foreground/70">Starting a new business venture or changing direction with an existing one</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <h3 className="font-medium">Seeking product-market fit</h3>
                </div>
                <p className="text-sm text-foreground/70">Working to validate your solution with the right customer segment</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="font-medium">Preparing for fundraising</h3>
                </div>
                <p className="text-sm text-foreground/70">Getting ready for investor conversations and capital acquisition</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <h3 className="font-medium">Building their first team</h3>
                </div>
                <p className="text-sm text-foreground/70">Making critical first hires and developing leadership skills</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                  </svg>
                  <h3 className="font-medium">Developing go-to-market</h3>
                </div>
                <p className="text-sm text-foreground/70">Creating effective marketing and customer acquisition strategies</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V17m0 0v2.5M12 17h2.5M12 17h-2.5"></path>
                  </svg>
                  <h3 className="font-medium">Managing personal challenges</h3>
                </div>
                <p className="text-sm text-foreground/70">Addressing the psychological aspects of entrepreneurship</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <h3 className="font-medium">Optimizing business models</h3>
                </div>
                <p className="text-sm text-foreground/70">Refining revenue streams for profitability and growth</p>
              </div>
              
              <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-[var(--primary)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <h3 className="font-medium">Making critical decisions</h3>
                </div>
                <p className="text-sm text-foreground/70">Navigating strategic choices under uncertainty</p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Entrepreneur Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Testimonial 
                quote="The Entrepreneur Coach helped me navigate the most challenging period of my startup journey. The strategic guidance combined with emotional support was exactly what I needed to pivot my business model and secure our next round of funding."
                author="Alex K."
                title="SaaS Founder"
              />
              
              <Testimonial 
                quote="As a solo founder, I was struggling with decision fatigue and isolation. The Entrepreneur Coach provided both tactical business advice and psychological support that helped me build resilience while scaling my company from 3 to 15 employees."
                author="Maya R."
                title="E-commerce Entrepreneur"
              />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-semibold mb-4">Build Your Business With Confidence</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="mb-4 text-foreground/80">
                  The entrepreneurial journey is filled with challenges, uncertainty, and high-stakes decisions. The Entrepreneur Coach Specialist combines proven business frameworks with psychological support to help you navigate this journey with greater clarity and confidence.
                </p>
                <p className="text-foreground/80">
                  Whether you're just starting out or scaling an established venture, our specialized coaching provides the strategic guidance and emotional support you need to build a sustainable, successful business while maintaining your personal wellbeing.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-white dark:bg-[var(--background-alt)] p-6 rounded-full h-40 w-40 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <p className="text-[var(--primary)] font-bold text-xl">Start Your</p>
                    <p className="text-3xl font-bold">Journey</p>
                    <p className="text-sm text-foreground/60 mt-1">Build with purpose</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-[var(--background-alt)] p-10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Accelerate Your Entrepreneurial Journey?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
              Join the growing community of founders who are building successful, sustainable businesses with the help of specialized entrepreneurial coaching.
            </p>
            <Link 
              href="/chat?specialist=entrepreneurs" 
              className="btn-primary text-white px-8 py-4 rounded-md font-medium inline-block text-lg"
            >
              Start Your First Coaching Session
            </Link>
            <p className="text-sm text-foreground/60 mt-4">No prior coaching experience needed. Our specialist will guide you through the process.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
