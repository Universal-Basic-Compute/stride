'use client';

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ShareButtons from "../../components/ShareButtons";
import PDFDownloadButton from "../../components/PDFDownloadButton";

export default function ExecutivePresenceBlueprint() {
  // State for active section (for mobile accordion view)
  const [activeSection, setActiveSection] = useState<string | null>("introduction");
  
  // Toggle section visibility (for mobile)
  const toggleSection = (sectionId: string) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };
  
  // Get the current URL for sharing
  const currentUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : 'https://stridecoaching.ai/resources/executive-presence-blueprint';
  
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
                    <Link href="/resources/library" className="text-sm font-medium text-foreground/60 hover:text-[var(--primary)] ml-1">
                      Resource Library
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-foreground/40 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="text-sm font-medium text-foreground/40 ml-1">
                      Executive Presence Blueprint
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div id="executive-presence-content" className="lg:w-2/3">
              {/* Resource Header */}
              <div className="mb-8">
                <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium">
                  Leadership
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">The Executive Presence Blueprint: Communication Strategies for Leadership Impact</h1>
                <p className="text-xl text-foreground/70 mb-6">
                  Master the art of executive presence with research-backed techniques to command attention, communicate with clarity, and project confidence in any professional setting.
                </p>
              </div>
              
              {/* Featured Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src="/resources/executive-presence-blueprint.jpg" 
                    alt="Executive Presence Blueprint" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If image fails to load, replace with a gradient background
                      e.currentTarget.style.display = 'none';
                      const parentElement = e.currentTarget.parentElement;
                      if (parentElement) {
                        parentElement.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)';
                        parentElement.innerHTML += `<div class="w-full h-full flex items-center justify-center text-white font-medium p-4 text-center">Executive Presence Blueprint</div>`;
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Introduction */}
              <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Power of Executive Presence</h2>
                <p className="mb-4">
                  Executive presence is often described as the "it factor" that separates those who advance to leadership positions from those who remain in the middle ranks. While technical skills and experience are crucial, research consistently shows that how you communicate, present yourself, and engage with others plays a decisive role in career advancement and leadership effectiveness.
                </p>
                
                <div className="my-8 p-6 bg-[var(--primary)]/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">The Research Is Clear:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>89% of executive recruiters cite "executive presence" as a key factor in hiring and promotion decisions (Sylvia Ann Hewlett, Executive Presence)</li>
                    <li>Leaders with strong executive presence receive 28% higher performance ratings from superiors</li>
                    <li>Teams led by individuals with high executive presence scores show 32% higher engagement levels</li>
                    <li>67% of senior executives identify communication skills as the most critical component of executive presence</li>
                  </ul>
                </div>
                
                <p className="mb-4">
                  This resource transforms decades of research on leadership communication into practical strategies specifically designed for ambitious professionals. By developing these skills, you'll gain the ability to:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 mb-6 text-foreground/80">
                  <li>Command attention when you enter a room or join a virtual meeting</li>
                  <li>Communicate complex ideas with clarity and conviction</li>
                  <li>Project confidence even in high-pressure situations</li>
                  <li>Build instant rapport and credibility with senior stakeholders</li>
                  <li>Influence decisions through strategic communication</li>
                </ul>
                
                <p className="mb-4">
                  The most advanced technical expertise means little if you cannot communicate your ideas effectively and inspire confidence in your leadership. This guide provides the missing component in most professionals' development: the strategic communication framework required for consistent leadership impact.
                </p>
              </section>
              
              {/* Understanding Executive Presence */}
              <section id="understanding-presence" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Understanding Executive Presence</h2>
                
                <div className="space-y-8">
                  {/* The Three Pillars */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The Three Pillars of Executive Presence</h3>
                    <p className="mb-4">
                      Executive presence consists of three fundamental pillars that work together to create your overall impact:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10 hover:border-[var(--primary)]/30 transition-all">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Communication</h4>
                            <p className="text-sm text-foreground/70">How you express ideas, listen, and engage in conversation</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10 hover:border-[var(--primary)]/30 transition-all">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Appearance</h4>
                            <p className="text-sm text-foreground/70">Your visual presentation, body language, and physical demeanor</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10 hover:border-[var(--primary)]/30 transition-all">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Gravitas</h4>
                            <p className="text-sm text-foreground/70">Your substance, confidence, and ability to project authority</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Key Insight:</h4>
                      <p className="text-foreground/70">
                        While all three pillars matter, research shows that communication accounts for 65-75% of your executive presence impact, making it the most critical area to develop.
                      </p>
                    </div>
                  </div>
                  
                  {/* Executive Presence Myths */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Executive Presence Myths</h3>
                    <p className="mb-4">
                      Before diving into development strategies, it's important to dispel common misconceptions about executive presence:
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center p-3 rounded-lg bg-[var(--primary)]/5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Myth: Executive presence is innate</span>
                          <span className="text-sm text-foreground/80 ml-1">Reality: It's a set of learnable skills that can be systematically developed</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Myth: It's about being the loudest voice</span>
                          <span className="text-sm text-foreground/80 ml-1">Reality: Strategic communication and thoughtful listening often create more impact</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 rounded-lg bg-[var(--primary)]/5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Myth: One style fits all situations</span>
                          <span className="text-sm text-foreground/80 ml-1">Reality: Effective presence requires adaptability to different contexts and audiences</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Myth: It's about impressing others</span>
                          <span className="text-sm text-foreground/80 ml-1">Reality: Authentic connection and value creation generate true executive presence</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 rounded-lg bg-[var(--primary)]/5">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium">Myth: Executive presence is superficial</span>
                          <span className="text-sm text-foreground/80 ml-1">Reality: It's the external manifestation of internal clarity, confidence, and competence</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Self-Assessment Question:</h4>
                      <p className="text-foreground/70 italic">
                        "Which of these myths have been limiting your development of executive presence?"
                      </p>
                    </div>
                  </div>
                  
                  {/* Executive Presence Assessment */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Executive Presence Self-Assessment</h3>
                    <p className="mb-4">
                      Before developing your executive presence, it's important to understand your current strengths and growth areas. Rate yourself on the following dimensions using a scale of 1-5 (1=needs significant development, 5=exceptional strength):
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Communication Dimension</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span>Clarity of messaging</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Conciseness</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Active listening</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Storytelling ability</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Voice quality and modulation</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Appearance Dimension</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span>Professional attire appropriateness</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Body language awareness</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Eye contact effectiveness</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Posture and stance</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Gravitas Dimension</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center justify-between">
                          <span>Decision-making confidence</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Emotional intelligence</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Credibility establishment</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Grace under pressure</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                        <li className="flex items-center justify-between">
                          <span>Thought leadership</span>
                          <div className="flex space-x-1">
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">1</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">2</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">3</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">4</span>
                            <span className="w-6 h-6 rounded-full border border-foreground/20 flex items-center justify-center text-xs">5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Interpretation:</h4>
                      <p className="text-foreground/70">
                        Identify your three lowest scores—these represent your priority development areas. The strategies in the following sections will help you systematically improve in these dimensions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Strategic Communication Frameworks */}
              <section id="communication-frameworks" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Strategic Communication Frameworks</h2>
                
                <div className="space-y-8">
                  {/* The PREP Method */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">The PREP Method for Structured Messaging</h3>
                    <p className="mb-4">
                      One of the most powerful ways to enhance your executive presence is to structure your communication for maximum impact. The PREP method provides a simple yet powerful framework:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">P</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Point</h4>
                            <p className="text-sm text-foreground/70">Start with your main message or conclusion</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">R</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Reason</h4>
                            <p className="text-sm text-foreground/70">Provide the key reason supporting your point</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">E</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Example</h4>
                            <p className="text-sm text-foreground/70">Illustrate with a specific example or evidence</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">P</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Point</h4>
                            <p className="text-sm text-foreground/70">Restate your main message for reinforcement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Example:</h4>
                      <div className="space-y-2 text-foreground/70">
                        <p><strong>Point:</strong> "We should prioritize the Atlas project for Q3 resources."</p>
                        <p><strong>Reason:</strong> "It has the highest ROI potential of all current initiatives."</p>
                        <p><strong>Example:</strong> "Our analysis shows a projected 32% return compared to 18% for other projects, and two key clients are waiting on this solution."</p>
                        <p><strong>Point:</strong> "Given these factors, Atlas should be our top priority for Q3."</p>
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      The PREP method works because it aligns with how executive audiences process information:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-foreground/80">
                      <li>It respects their time by leading with the conclusion</li>
                      <li>It provides just enough supporting information to establish credibility</li>
                      <li>It uses concrete examples to make abstract concepts tangible</li>
                      <li>It reinforces the key message for retention</li>
                    </ul>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Application Exercise:</h4>
                      <p className="text-foreground/70">
                        Take an upcoming communication challenge (presentation, important email, or meeting contribution) and structure it using the PREP method. Notice how this forces clarity in your own thinking.
                      </p>
                    </div>
                  </div>
                  
                  {/* Business Storytelling */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Storytelling for Impact</h3>
                    <p className="mb-4">
                      Leaders with strong executive presence use storytelling strategically to influence, inspire, and drive action. Research shows that information delivered as a story is up to 22 times more memorable than facts alone.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">The SCI Storytelling Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">S</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Situation</h5>
                            <p className="text-sm text-foreground/70">Establish the context and challenge</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"We were facing declining market share and increasing customer churn..."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">C</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Complication</h5>
                            <p className="text-sm text-foreground/70">Describe the specific obstacle or tension</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Our traditional approach wasn't working, and we had just 60 days to reverse the trend..."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">I</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Impact/Resolution</h5>
                            <p className="text-sm text-foreground/70">Share the outcome and key learning</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"By reimagining our approach, we not only stopped the decline but grew market share by 4% in just one quarter..."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      Effective business storytelling isn't about entertainment—it's about strategic communication that:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-foreground/80">
                      <li>Creates emotional connection to your ideas</li>
                      <li>Makes complex concepts accessible and memorable</li>
                      <li>Demonstrates your strategic thinking process</li>
                      <li>Builds your personal brand through signature stories</li>
                    </ul>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Types of Business Stories:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                          <h5 className="font-medium text-sm mb-1">Challenge Stories</h5>
                          <p className="text-xs text-foreground/70">Demonstrate problem-solving and resilience</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                          <h5 className="font-medium text-sm mb-1">Vision Stories</h5>
                          <p className="text-xs text-foreground/70">Inspire action toward future possibilities</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                          <h5 className="font-medium text-sm mb-1">Value Stories</h5>
                          <p className="text-xs text-foreground/70">Illustrate principles in action</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                          <h5 className="font-medium text-sm mb-1">Customer Stories</h5>
                          <p className="text-xs text-foreground/70">Bring external perspectives to life</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Managing Difficult Conversations */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Managing Difficult Conversations</h3>
                    <p className="mb-4">
                      Executive presence is often most tested during challenging interactions. Leaders who maintain composure and effectiveness during difficult conversations significantly enhance their leadership reputation.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">The CEDAR Framework for Difficult Conversations</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">C</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Context</h5>
                            <p className="text-sm text-foreground/70">Set the appropriate setting and frame the conversation</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"I'd like to discuss the quarterly results and understand some challenges we're facing."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">E</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Examples</h5>
                            <p className="text-sm text-foreground/70">Provide specific, observable behaviors or situations</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"I noticed that three key deliverables missed their deadlines in the past month."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">D</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Diagnosis</h5>
                            <p className="text-sm text-foreground/70">Explore causes and listen to understand perspectives</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Help me understand what factors are contributing to these delays."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">A</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Action</h5>
                            <p className="text-sm text-foreground/70">Agree on specific next steps and responsibilities</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Let's identify three specific changes we can implement immediately."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">R</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Review</h5>
                            <p className="text-sm text-foreground/70">Establish follow-up mechanism and express confidence</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Let's check in next Friday to review progress. I'm confident we can turn this around."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Key Principles:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li>Focus on behaviors and outcomes, not personality</li>
                        <li>Use neutral, specific language rather than generalizations</li>
                        <li>Balance advocacy (stating your position) with inquiry (genuine curiosity)</li>
                        <li>Manage your emotional state before and during the conversation</li>
                        <li>Listen more than you speak during the diagnosis phase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Non-Verbal Communication Mastery */}
              <section id="nonverbal-communication" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Non-Verbal Communication Mastery</h2>
                
                <div className="space-y-8">
                  {/* Body Language Principles */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Body Language Principles for Projecting Confidence</h3>
                    <p className="mb-4">
                      Research shows that up to 55% of your communication impact comes from body language. Leaders with strong executive presence use non-verbal cues strategically to reinforce their message and project confidence.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Power Posture</h4>
                            <p className="text-sm text-foreground/70">Stand or sit with shoulders back, spine straight, and weight evenly distributed</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Purposeful Gestures</h4>
                            <p className="text-sm text-foreground/70">Use deliberate hand movements that reinforce key points</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Strategic Movement</h4>
                            <p className="text-sm text-foreground/70">Move with intention; avoid fidgeting or swaying</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Facial Expressiveness</h4>
                            <p className="text-sm text-foreground/70">Align facial expressions with your message; avoid blank expressions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Before/After Comparison:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium mb-2">Before: Low Presence</h5>
                          <ul className="text-sm text-foreground/70 space-y-1">
                            <li>• Slouched posture, weight shifted to one side</li>
                            <li>• Hands in pockets or fidgeting with objects</li>
                            <li>• Minimal facial expression variation</li>
                            <li>• Avoiding eye contact or darting eyes</li>
                            <li>• Closed body position (arms crossed)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium mb-2">After: Strong Presence</h5>
                          <ul className="text-sm text-foreground/70 space-y-1">
                            <li>• Upright, balanced posture with open stance</li>
                            <li>• Purposeful gestures that emphasize points</li>
                            <li>• Engaged facial expressions that match content</li>
                            <li>• Steady, confident eye contact</li>
                            <li>• Open body position signaling receptiveness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Practice Exercise:</h4>
                      <p className="text-foreground/70">
                        Record yourself delivering a 2-minute presentation. Watch with the sound off and evaluate your body language using the principles above. Identify one specific improvement to focus on this week.
                      </p>
                    </div>
                  </div>
                  
                  {/* Voice Modulation */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Voice Modulation and Pacing Techniques</h3>
                    <p className="mb-4">
                      Your voice is a powerful instrument for conveying authority, confidence, and engagement. Leaders with strong executive presence use vocal variety strategically.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">The PACE Vocal Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Projection</h5>
                            <p className="text-sm text-foreground/70">Speaking with appropriate volume and resonance</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Speak from your diaphragm, not your throat, to project confidence without shouting"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">A</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Articulation</h5>
                            <p className="text-sm text-foreground/70">Pronouncing words clearly and distinctly</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Finish your words completely; avoid mumbling or trailing off at sentence ends"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">C</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Cadence</h5>
                            <p className="text-sm text-foreground/70">Varying your speaking rhythm and using strategic pauses</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Slow down for important points; pause before and after key messages"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">E</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Expression</h5>
                            <p className="text-sm text-foreground/70">Using tonal variety to convey meaning and emotion</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Avoid monotone delivery; emphasize key words through slight pitch changes"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mb-4">
                      Common vocal patterns that undermine executive presence include:
                    </p>
                    
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-foreground/80">
                      <li><strong>Uptalk:</strong> Ending statements with rising intonation as if asking a question</li>
                      <li><strong>Vocal fry:</strong> Low, creaky voice quality that can signal disengagement</li>
                      <li><strong>Filler words:</strong> Excessive use of "um," "uh," "like," "you know," etc.</li>
                      <li><strong>Speed talking:</strong> Rushing through content without strategic pacing</li>
                      <li><strong>Volume issues:</strong> Speaking too softly or with inconsistent volume</li>
                    </ul>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Voice Development Techniques:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li>Record and analyze your speaking patterns in different contexts</li>
                        <li>Practice diaphragmatic breathing to support vocal projection</li>
                        <li>Read text aloud with exaggerated expression, then scale back to natural emphasis</li>
                        <li>Work with specific tongue twisters to improve articulation</li>
                        <li>Incorporate deliberate pauses before and after key points</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Virtual Presence */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Virtual Presence Strategies</h3>
                    <p className="mb-4">
                      In today's hybrid work environment, projecting executive presence virtually has become an essential leadership skill. Virtual settings present unique challenges that require specific adaptations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Camera Positioning</h4>
                            <p className="text-sm text-foreground/70">Position camera at eye level; maintain 60-70% frame fill</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Lighting Setup</h4>
                            <p className="text-sm text-foreground/70">Position primary light source in front of you, not behind</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Audio Quality</h4>
                            <p className="text-sm text-foreground/70">Use external microphone; eliminate background noise</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Background Selection</h4>
                            <p className="text-sm text-foreground/70">Choose clean, professional background or subtle virtual option</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Virtual Engagement Techniques:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li><strong>Energy amplification:</strong> Increase your energy level by 20% to compensate for screen flattening</li>
                        <li><strong>Direct eye contact:</strong> Look at the camera when speaking, not at yourself or others' video feeds</li>
                        <li><strong>Gesture containment:</strong> Keep gestures within camera frame; use more deliberate hand movements</li>
                        <li><strong>Vocal projection:</strong> Speak with slightly more volume and expression than in-person settings</li>
                        <li><strong>Interaction design:</strong> Plan deliberate engagement points every 3-5 minutes</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Virtual Presence Checklist:</h4>
                      <p className="text-foreground/70 mb-2">
                        Before your next important virtual meeting, use this quick checklist:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Camera at eye level, showing head and shoulders</li>
                        <li>Main light source in front, not behind you</li>
                        <li>Clean, professional background</li>
                        <li>Microphone tested and positioned correctly</li>
                        <li>Notes positioned near camera to maintain eye contact</li>
                        <li>Notifications silenced on all devices</li>
                        <li>Professional attire that works on camera</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Presentation Excellence */}
              <section id="presentation-excellence" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Presentation Excellence</h2>
                
                <div className="space-y-8">
                  {/* High-Stakes Presentation Framework */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">High-Stakes Presentation Framework</h3>
                    <p className="mb-4">
                      Presentations are critical opportunities to demonstrate executive presence. The most effective leaders approach high-stakes presentations with a systematic framework.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">The 5P Presentation Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">1P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Purpose</h5>
                            <p className="text-sm text-foreground/70">Define your specific objective and desired audience outcome</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"By the end of this presentation, the executive team will approve our Q3 initiative."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">2P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">People</h5>
                            <p className="text-sm text-foreground/70">Analyze your audience's needs, concerns, and decision criteria</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"The CFO will focus on ROI; the COO will be concerned about implementation timeline."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">3P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Points</h5>
                            <p className="text-sm text-foreground/70">Identify 3-5 key messages that support your objective</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Our three main points: market opportunity, implementation plan, and financial projections."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">4P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Process</h5>
                            <p className="text-sm text-foreground/70">Design the presentation structure and engagement approach</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"We'll use a problem-solution format with strategic questions at transition points."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">5P</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Presence</h5>
                            <p className="text-sm text-foreground/70">Plan your delivery style, visuals, and contingencies</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"I'll use a confident, conversational tone with minimal slides and be prepared for objections."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Executive-Level Presentation Structure:</h4>
                      <div className="space-y-3 text-foreground/70">
                        <div>
                          <p className="font-medium">1. Executive Summary (30-60 seconds)</p>
                          <p className="text-sm">Start with your conclusion and key supporting points</p>
                        </div>
                        <div>
                          <p className="font-medium">2. Strategic Context (1-2 minutes)</p>
                          <p className="text-sm">Frame the situation and why it matters now</p>
                        </div>
                        <div>
                          <p className="font-medium">3. Key Insights (3-5 minutes)</p>
                          <p className="text-sm">Present your most important findings or recommendations</p>
                        </div>
                        <div>
                          <p className="font-medium">4. Supporting Evidence (3-5 minutes)</p>
                          <p className="text-sm">Provide data and examples that validate your position</p>
                        </div>
                        <div>
                          <p className="font-medium">5. Implementation Path (2-3 minutes)</p>
                          <p className="text-sm">Outline next steps, timeline, and resource needs</p>
                        </div>
                        <div>
                          <p className="font-medium">6. Call to Action (30-60 seconds)</p>
                          <p className="text-sm">Clearly state what you need from the audience</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Presentation Preparation Checklist:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Research key stakeholders and their priorities</li>
                        <li>Prepare concise answers to likely questions</li>
                        <li>Practice your opening and closing until they flow naturally</li>
                        <li>Rehearse with a timer to ensure proper pacing</li>
                        <li>Prepare backup slides for potential deep-dive topics</li>
                        <li>Test all technology in advance</li>
                        <li>Arrive early to set up and center yourself</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Audience Engagement Techniques */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Audience Engagement Techniques</h3>
                    <p className="mb-4">
                      Leaders with strong executive presence don't just deliver information—they create meaningful connections with their audience. Strategic engagement techniques help maintain attention and increase impact.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Strategic Questions</h4>
                            <p className="text-sm text-foreground/70">Use targeted questions to involve the audience and check understanding</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Relevant Stories</h4>
                            <p className="text-sm text-foreground/70">Incorporate brief, targeted stories that illustrate key points</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Visual Anchors</h4>
                            <p className="text-sm text-foreground/70">Use simple, powerful visuals that reinforce your message</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Pattern Disruption</h4>
                            <p className="text-sm text-foreground/70">Change delivery style, volume, or position to maintain attention</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">The 10-Minute Rule:</h4>
                      <p className="text-foreground/70">
                        Research shows audience attention typically drops significantly after 10 minutes. Plan a deliberate engagement technique or pattern break at least every 10 minutes to reset the attention clock.
                      </p>
                    </div>
                  </div>
                  
                  {/* Handling Q&A Sessions */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Handling Q&A Sessions with Authority</h3>
                    <p className="mb-4">
                      Q&A sessions often reveal the true depth of your executive presence. How you respond to questions—especially challenging ones—can either enhance or undermine your leadership credibility.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">The LASER Response Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">L</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Listen</h5>
                            <p className="text-sm text-foreground/70">Give full attention to the question without interrupting</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"Focus completely on understanding, not on formulating your response yet"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">A</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Acknowledge</h5>
                            <p className="text-sm text-foreground/70">Validate the question and the person asking it</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"That's an important question about our implementation timeline..."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">S</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Synthesize</h5>
                            <p className="text-sm text-foreground/70">Briefly reframe the question to ensure understanding</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"So you're asking about how we'll manage the resource constraints..."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">E</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Explain</h5>
                            <p className="text-sm text-foreground/70">Provide a clear, concise answer with supporting evidence</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"We've addressed this by developing a three-phase approach that..."</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">R</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Redirect</h5>
                            <p className="text-sm text-foreground/70">Return to your key message or transition to the next point</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">"This approach supports our overall goal of increasing market share while..."</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Handling Difficult Questions:</h4>
                      <div className="space-y-3 text-foreground/70">
                        <div>
                          <p className="font-medium">When You Don't Know the Answer</p>
                          <p className="text-sm">"That's an important question. I don't have all the data to give you a complete answer right now, but I can tell you [what you do know] and will follow up with the full details by [specific time]."</p>
                        </div>
                        <div>
                          <p className="font-medium">When Faced With Criticism</p>
                          <p className="text-sm">"I appreciate that perspective. Here's how we've thought about that challenge..." (Avoid defensiveness; focus on the issue, not the person)</p>
                        </div>
                        <div>
                          <p className="font-medium">When Dealing With Tangents</p>
                          <p className="text-sm">"That touches on an interesting related point. To stay focused on our main objective today, let me briefly address that and then return to our key discussion."</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Q&A Preparation Strategy:</h4>
                      <p className="text-foreground/70 mb-2">
                        Before any important presentation:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Identify the 10 most likely questions you'll receive</li>
                        <li>Prepare concise, evidence-based answers for each</li>
                        <li>Anticipate the 3 most challenging questions and practice your responses</li>
                        <li>Identify key messages you want to reinforce regardless of questions asked</li>
                        <li>Practice transitioning from any answer back to your key messages</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Authentic Leadership Presence */}
              <section id="authentic-leadership" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Authentic Leadership Presence</h2>
                
                <div className="space-y-8">
                  {/* Personal Brand Alignment */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Aligning Your Personal Brand with Your Leadership Style</h3>
                    <p className="mb-4">
                      The most powerful executive presence comes from authenticity—when your external communication aligns with your internal values and natural leadership style. This alignment creates a consistent, trustworthy presence that resonates with others.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Personal Brand Clarity Exercise</h4>
                      <div className="space-y-4">
                        <div>
                          <h5 className="font-medium text-sm">1. Core Values Identification</h5>
                          <p className="text-sm text-foreground/70">What 3-5 principles guide your decisions and actions?</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs">Integrity</span>
                            <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs">Innovation</span>
                            <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs">Collaboration</span>
                            <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs">Excellence</span>
                            <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs">Empathy</span>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm">2. Unique Strengths Assessment</h5>
                          <p className="text-sm text-foreground/70">What capabilities set you apart from others in your field?</p>
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="bg-[var(--background)] p-2 rounded text-xs">Strategic thinking</div>
                            <div className="bg-[var(--background)] p-2 rounded text-xs">Cross-functional collaboration</div>
                            <div className="bg-[var(--background)] p-2 rounded text-xs">Technical expertise</div>
                            <div className="bg-[var(--background)] p-2 rounded text-xs">Problem-solving</div>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm">3. Leadership Philosophy</h5>
                          <p className="text-sm text-foreground/70">How would you describe your approach to leading others?</p>
                          <div className="mt-2 p-2 bg-[var(--background)] rounded text-xs italic">
                            "I believe in empowering teams through clear vision, removing obstacles, and recognizing contributions."
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-sm">4. Reputation Aspiration</h5>
                          <p className="text-sm text-foreground/70">How do you want to be known by others?</p>
                          <div className="mt-2 p-2 bg-[var(--background)] rounded text-xs italic">
                            "As someone who drives results while developing people, communicates with clarity, and approaches challenges with both analytical rigor and creativity."
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Brand-Presence Alignment Check:</h4>
                      <p className="text-foreground/70 mb-3">
                        Review your communication and leadership behaviors against these questions:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li>Do your speaking style, content choices, and delivery methods reflect your core values?</li>
                        <li>Are you leveraging your unique strengths in your communications?</li>
                        <li>Does your executive presence feel natural or forced?</li>
                        <li>Are there disconnects between how you want to be perceived and how you're presenting yourself?</li>
                        <li>What small adjustments would create greater alignment between your authentic self and your executive presence?</li>
                      </ul>
                    </div>
                    
                    <p className="mb-4">
                      Remember that authenticity doesn't mean lack of polish or preparation. It means that your polished, prepared presence is built on the foundation of your true self rather than an artificial persona.
                    </p>
                  </div>
                  
                  {/* Building Credibility */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Building Credibility Through Consistency</h3>
                    <p className="mb-4">
                      Credibility—the foundation of executive presence—is built through consistent demonstration of competence, character, and follow-through. It's earned incrementally but can be damaged quickly.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Competence Credibility</h4>
                            <p className="text-sm text-foreground/70">Demonstrated expertise and results in your domain</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Character Credibility</h4>
                            <p className="text-sm text-foreground/70">Consistent demonstration of values and integrity</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Consistency Credibility</h4>
                            <p className="text-sm text-foreground/70">Reliable follow-through on commitments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Credibility-Building Practices:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li><strong>Prepare thoroughly</strong> for every interaction, especially with senior stakeholders</li>
                        <li><strong>Speak with precision</strong> about topics in your domain; acknowledge limits of your knowledge</li>
                        <li><strong>Make commitments carefully</strong> and deliver on them consistently</li>
                        <li><strong>Admit mistakes quickly</strong> and focus on solutions rather than blame</li>
                        <li><strong>Maintain consistent messaging</strong> across different audiences and contexts</li>
                        <li><strong>Demonstrate respect</strong> for all organizational levels, not just those above you</li>
                      </ul>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Credibility Recovery:</h4>
                      <p className="text-foreground/70 mb-2">
                        If your credibility has been damaged, follow these steps:
                      </p>
                      <ol className="list-decimal pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Acknowledge the issue directly and take responsibility</li>
                        <li>Explain what happened without making excuses</li>
                        <li>Present a clear plan to address the situation</li>
                        <li>Follow through with visible, consistent actions</li>
                        <li>Recognize that rebuilding credibility takes time and patience</li>
                      </ol>
                    </div>
                  </div>
                  
                  {/* Cultural Adaptability */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Adapting Presence Across Different Cultural Contexts</h3>
                    <p className="mb-4">
                      Executive presence is not one-size-fits-all across cultures. Leaders with global influence develop cultural intelligence that allows them to adapt their presence while maintaining authenticity.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Cultural Dimensions of Executive Presence</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Communication Directness</h5>
                            <p className="text-sm text-foreground/70">Some cultures value direct communication while others prefer indirect approaches</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Example: U.S. executives often value direct feedback, while many Asian cultures prefer more nuanced communication</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Power Distance</h5>
                            <p className="text-sm text-foreground/70">How hierarchy and authority are perceived and respected</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Example: Nordic cultures often value flatter hierarchies, while many Latin American cultures respect clear authority structures</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Relationship Orientation</h5>
                            <p className="text-sm text-foreground/70">The importance of building relationships before conducting business</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Example: Middle Eastern and many Asian cultures prioritize relationship-building, while some Western cultures are more transaction-focused</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-medium">Expressiveness</h5>
                            <p className="text-sm text-foreground/70">Appropriate levels of emotion and enthusiasm in communication</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Example: Mediterranean cultures often value passionate expression, while many Northern European cultures prefer more measured communication</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Cultural Adaptation Strategies:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li><strong>Research before engagement</strong> - Understand cultural norms and business protocols</li>
                        <li><strong>Observe local leaders</strong> - Notice how respected leaders in that culture communicate</li>
                        <li><strong>Adjust your pace</strong> - Some cultures value quick decisions, others prefer deliberation</li>
                        <li><strong>Modify formality levels</strong> - Adapt your level of formality to match cultural expectations</li>
                        <li><strong>Seek feedback</strong> - Ask trusted colleagues from that culture for guidance</li>
                        <li><strong>Balance adaptation with authenticity</strong> - Adapt your style without compromising your values</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Implementation Plan */}
              <section id="implementation-plan" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Implementation Plan</h2>
                
                <div className="space-y-8">
                  {/* 30-Day Development Roadmap */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">30-Day Executive Presence Development Roadmap</h3>
                    <p className="mb-4">
                      Developing executive presence requires deliberate practice and consistent attention. This 30-day roadmap provides a structured approach to building your presence systematically.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Week 1: Assessment & Foundation</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D1-2
                          </div>
                          <div>
                            <p className="text-sm font-medium">Complete Self-Assessment</p>
                            <p className="text-xs text-foreground/70">Use the executive presence assessment in this guide to identify your baseline</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D3-4
                          </div>
                          <div>
                            <p className="text-sm font-medium">Gather External Feedback</p>
                            <p className="text-xs text-foreground/70">Ask 3-5 trusted colleagues about your current presence strengths and growth areas</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D5-6
                          </div>
                          <div>
                            <p className="text-sm font-medium">Record Baseline Video</p>
                            <p className="text-xs text-foreground/70">Record yourself delivering a 3-minute presentation to establish your starting point</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D7
                          </div>
                          <div>
                            <p className="text-sm font-medium">Create Development Plan</p>
                            <p className="text-xs text-foreground/70">Identify your top 3 focus areas and specific improvement goals</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Week 2: Communication Fundamentals</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D8-9
                          </div>
                          <div>
                            <p className="text-sm font-medium">Master the PREP Method</p>
                            <p className="text-xs text-foreground/70">Practice structuring 3 different messages using the PREP framework</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D10-11
                          </div>
                          <div>
                            <p className="text-sm font-medium">Voice Modulation Practice</p>
                            <p className="text-xs text-foreground/70">Complete daily vocal exercises focusing on projection and pacing</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D12-13
                          </div>
                          <div>
                            <p className="text-sm font-medium">Eliminate Filler Words</p>
                            <p className="text-xs text-foreground/70">Record conversations and count filler words; practice strategic pausing</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D14
                          </div>
                          <div>
                            <p className="text-sm font-medium">Communication Progress Check</p>
                            <p className="text-xs text-foreground/70">Record a new video implementing the week's learnings and compare to baseline</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Week 3: Non-Verbal Mastery</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D15-16
                          </div>
                          <div>
                            <p className="text-sm font-medium">Power Posture Development</p>
                            <p className="text-xs text-foreground/70">Practice confident stance and posture; implement in at least 2 meetings</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D17-18
                          </div>
                          <div>
                            <p className="text-sm font-medium">Purposeful Gestures</p>
                            <p className="text-xs text-foreground/70">Develop 3-5 natural hand gestures that reinforce your key messages</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D19-20
                          </div>
                          <div>
                            <p className="text-sm font-medium">Facial Expressiveness</p>
                            <p className="text-xs text-foreground/70">Practice appropriate facial animation that matches your content</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D21
                          </div>
                          <div>
                            <p className="text-sm font-medium">Non-Verbal Integration</p>
                            <p className="text-xs text-foreground/70">Record yourself presenting with focus on integrated non-verbal elements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Week 4: Real-World Application</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D22-23
                          </div>
                          <div>
                            <p className="text-sm font-medium">Presentation Delivery</p>
                            <p className="text-xs text-foreground/70">Deliver a presentation implementing all elements learned so far</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D24-25
                          </div>
                          <div>
                            <p className="text-sm font-medium">Difficult Conversation Practice</p>
                            <p className="text-xs text-foreground/70">Role-play challenging interactions using the CEDAR framework</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D26-27
                          </div>
                          <div>
                            <p className="text-sm font-medium">Virtual Presence Optimization</p>
                            <p className="text-xs text-foreground/70">Upgrade your virtual setup and practice virtual engagement techniques</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 text-xs font-bold">
                            D28-30
                          </div>
                          <div>
                            <p className="text-sm font-medium">Progress Assessment & Next Steps</p>
                            <p className="text-xs text-foreground/70">Record final video, gather new feedback, and create ongoing development plan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Implementation Tips:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-foreground/70">
                        <li>Schedule 15-30 minutes daily for deliberate practice</li>
                        <li>Keep a journal to track observations and progress</li>
                        <li>Find an accountability partner to share the journey</li>
                        <li>Record yourself regularly to monitor improvement</li>
                        <li>Apply new skills immediately in low-stakes situations before high-stakes ones</li>
                        <li>Celebrate small wins and improvements along the way</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Micro-Practice Techniques */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Micro-Practice Techniques for Daily Improvement</h3>
                    <p className="mb-4">
                      Significant improvement in executive presence comes from consistent small practices integrated into your daily routine. These micro-practices take just minutes but compound over time.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Morning Message Prep</h4>
                            <p className="text-sm text-foreground/70">Before your first meeting, structure one key message using the PREP method</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Elevator Pitch Refinement</h4>
                            <p className="text-sm text-foreground/70">Practice your 30-second introduction before entering networking events</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Commute Voice Training</h4>
                            <p className="text-sm text-foreground/70">Use drive/commute time for vocal exercises and articulation practice</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Power Pose Moments</h4>
                            <p className="text-sm text-foreground/70">Take 2 minutes before important meetings to stand in a confident posture</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Meeting Contribution Planning</h4>
                            <p className="text-sm text-foreground/70">Before each meeting, prepare one valuable point to contribute</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card p-4 border border-foreground/10">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-medium">Evening Reflection</h4>
                            <p className="text-sm text-foreground/70">Spend 5 minutes reviewing communication wins and improvement opportunities</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Habit Formation Strategy:</h4>
                      <p className="text-foreground/70 mb-2">
                        To make these micro-practices stick:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Attach each practice to an existing daily habit (e.g., after your morning coffee)</li>
                        <li>Start with just one micro-practice and master it before adding another</li>
                        <li>Track your consistency with a simple habit tracker</li>
                        <li>Share your commitment with someone who will hold you accountable</li>
                        <li>Celebrate small wins to reinforce the habit formation</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Feedback Collection */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Feedback Collection Mechanisms</h3>
                    <p className="mb-4">
                      Continuous improvement in executive presence requires ongoing, honest feedback. Establishing systematic feedback mechanisms ensures you receive the insights needed to refine your approach.
                    </p>
                    
                    <div className="card p-5 shadow-sm hover:shadow-md transition-all mb-6">
                      <h4 className="font-medium mb-4">Structured Feedback Framework</h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Identify Feedback Partners</h5>
                            <p className="text-sm text-foreground/70">Select 3-5 trusted colleagues at different organizational levels</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Include peers, direct reports, and senior leaders for diverse perspectives</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Create Specific Questions</h5>
                            <p className="text-sm text-foreground/70">Develop targeted questions about your executive presence</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Example: "How clear and concise is my communication in meetings?"</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Establish Regular Cadence</h5>
                            <p className="text-sm text-foreground/70">Schedule feedback conversations at consistent intervals</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Monthly check-ins for focused development areas, quarterly for broader assessment</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">4</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Create Psychological Safety</h5>
                            <p className="text-sm text-foreground/70">Make it safe for others to give honest feedback</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Respond to feedback with gratitude rather than defensiveness</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3">
                            <span className="font-bold">5</span>
                          </div>
                          <div>
                            <h5 className="font-medium">Document and Track</h5>
                            <p className="text-sm text-foreground/70">Record feedback and track changes over time</p>
                            <p className="text-xs text-foreground/60 mt-1 italic">Maintain a feedback journal to identify patterns and progress</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--background-alt)] p-4 rounded-lg mb-6">
                      <h4 className="font-medium mb-2">Sample Feedback Questions:</h4>
                      <div className="space-y-3 text-foreground/70">
                        <div>
                          <p className="font-medium text-sm">Communication Clarity</p>
                          <p className="text-xs">"On a scale of 1-10, how clear and concise is my communication? What would make it a 10?"</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Meeting Presence</p>
                          <p className="text-xs">"How would you describe my impact in meetings? What one change would enhance my contribution?"</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Non-Verbal Communication</p>
                          <p className="text-xs">"What does my body language and tone convey about my confidence level?"</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Leadership Perception</p>
                          <p className="text-xs">"When you see me interact with others, what leadership qualities do you observe? What qualities seem missing?"</p>
                        </div>
                        <div>
                          <p className="font-medium text-sm">Executive Readiness</p>
                          <p className="text-xs">"What one aspect of my executive presence would you recommend I develop to be ready for the next level?"</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[var(--primary)]/5 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Feedback Integration Process:</h4>
                      <ol className="list-decimal pl-5 space-y-1 text-foreground/70 text-sm">
                        <li>Collect feedback without immediate judgment or response</li>
                        <li>Look for patterns across multiple sources</li>
                        <li>Identify 1-2 specific behaviors to modify based on feedback</li>
                        <li>Create concrete action steps for each behavior</li>
                        <li>Implement changes and request follow-up observations</li>
                        <li>Close the loop by sharing how you've applied the feedback</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Conclusion */}
              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
                
                <p className="mb-4">
                  Executive presence is not an innate quality reserved for a select few—it's a set of learnable skills that can be systematically developed through deliberate practice and feedback. By focusing on strategic communication, non-verbal mastery, and authentic leadership presence, you can significantly enhance your impact and influence.
                </p>
                
                <p className="mb-4">
                  Remember that developing executive presence is a journey, not a destination. Even the most accomplished leaders continuously refine their presence as they grow and as contexts change. The key is consistent attention to how you communicate, present yourself, and engage with others.
                </p>
                
                <p className="mb-8">
                  As you implement the strategies in this guide, focus on progress rather than perfection. Each small improvement compounds over time, gradually transforming how others perceive your leadership capabilities and how confidently you navigate leadership challenges.
                </p>
                
                <div className="p-6 border border-foreground/10 rounded-lg text-sm text-foreground/70 italic">
                  <p>
                    This resource was developed by Stride in consultation with executive coaches, communication experts, and leadership development professionals. While we strive to provide accurate and helpful information, this guide does not constitute personalized coaching advice. For individualized guidance, consider working with a qualified executive coach.
                  </p>
                </div>
              </section>
              
              {/* Share Links */}
              <div className="mb-12">
                <h3 className="font-semibold mb-4">Share this resource</h3>
                <ShareButtons 
                  title="The Executive Presence Blueprint: Communication Strategies for Leadership Impact" 
                  url={currentUrl}
                />
              </div>
              
              {/* Feedback */}
              <div className="card p-6 bg-[var(--background-alt)] mb-12">
                <h3 className="text-lg font-semibold mb-3">Was this resource helpful?</h3>
                <p className="mb-4 text-foreground/70">
                  We're constantly working to improve our resources. Your feedback helps us make them more useful.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm font-medium transition-all">
                    Very Helpful
                  </button>
                  <button className="px-4 py-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm font-medium transition-all">
                    Somewhat Helpful
                  </button>
                  <button className="px-4 py-2 bg-[var(--primary)]/10 hover:bg-[var(--primary)]/20 text-[var(--primary)] rounded-full text-sm font-medium transition-all">
                    Not Helpful
                  </button>
                </div>
              </div>
              
              {/* CTA */}
              <div className="card p-8 shadow-depth text-center">
                <h2 className="text-2xl font-bold mb-4">Need Personalized Coaching?</h2>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Stride provides personalized, AI-powered coaching support that adapts to your needs and is available whenever you need it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/chat?specialist=leadership" 
                    className="btn-primary px-8 py-3"
                  >
                    Get 3 Free Sessions
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="btn-secondary px-8 py-3"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Table of Contents */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">In This Guide</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    The Power of Executive Presence
                  </a>
                  <a href="#understanding-presence" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Understanding Executive Presence
                  </a>
                  <a href="#communication-frameworks" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Strategic Communication Frameworks
                  </a>
                  <a href="#nonverbal-communication" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Non-Verbal Communication Mastery
                  </a>
                  <a href="#presentation-excellence" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Presentation Excellence
                  </a>
                  <a href="#authentic-leadership" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Authentic Leadership Presence
                  </a>
                  <a href="#implementation-plan" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Implementation Plan
                  </a>
                  <a href="#conclusion" className="block text-foreground/70 hover:text-[var(--primary)] py-1 border-l-2 border-transparent hover:border-[var(--primary)] pl-3 transition-all">
                    Conclusion
                  </a>
                </nav>
              </div>
              
              {/* Related Resources */}
              <div className="card p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Strategic Thinking Framework</h4>
                      <p className="text-sm text-foreground/70 mb-2">Develop your strategic thinking capabilities to enhance leadership impact</p>
                      <Link href="/resources/strategic-thinking" className="text-xs text-[var(--primary)] font-medium hover:underline">
                        View Resource →
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Difficult Conversations Guide</h4>
                      <p className="text-sm text-foreground/70 mb-2">Master the art of navigating challenging workplace discussions</p>
                      <Link href="/resources/difficult-conversations" className="text-xs text-[var(--primary)] font-medium hover:underline">
                        View Resource →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download PDF */}
              <div className="card p-6 mb-6 bg-[var(--primary)]/5">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--primary)] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold">Download This Guide</h3>
                </div>
                <p className="text-sm text-foreground/70 mb-4">
                  Get a PDF version of this guide to read offline or share with your team.
                </p>
                <PDFDownloadButton
                  title="The Executive Presence Blueprint"
                  subtitle="Stride Resource Library"
                  filename="Stride-Executive-Presence-Blueprint.pdf"
                  contentId="executive-presence-content"
                  className="w-full btn-primary text-sm py-2"
                />
              </div>
              
              {/* Coaching CTA */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Accelerate Your Leadership Development</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  Work with Stride to develop your executive presence through personalized coaching that adapts to your unique leadership style and goals.
                </p>
                <Link href="/pricing" className="btn-primary w-full text-center block">
                  Explore Coaching Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
