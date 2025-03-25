'use client';

import React from 'react';

export default function CoachingComparison() {
  return (
    <section className="py-20 px-4 bg-[var(--background-alt)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">How Stride Compares</h2>
        <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">
          Understanding the differences between traditional coaching and AI-powered coaching support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 shadow-depth">
            <h3 className="text-xl font-semibold mb-4 text-center">Traditional Coaching</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Deep human connection and empathy</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Specialized expertise in specific domains</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Nuanced understanding of complex situations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">Limited by scheduling constraints</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">Higher cost ($150-300+ per session)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">May forget details between sessions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">Limited implementation support between sessions</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6 shadow-depth border-2 border-[var(--primary)] relative">
            <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            <h3 className="text-xl font-semibold mb-4 text-center">Stride + Occasional Coaching</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Best of both worlds approach</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Human connection when needed</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Daily AI support between sessions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>More affordable overall solution</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Perfect memory of your journey</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consistent support and accountability</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic implementation support</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Data-driven performance insights</span>
              </li>
            </ul>
          </div>
          
          <div className="card p-6 shadow-depth">
            <h3 className="text-xl font-semibold mb-4 text-center">Stride AI Coach</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Available 24/7 whenever needed</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Affordable monthly subscription</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Perfect memory of your history</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--accent)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Consistent approach and methodology</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">Limited human intuition</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-foreground/70">Not suitable for crisis situations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
