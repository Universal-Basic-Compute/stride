'use client';

import React, { useState } from "react";
import Link from "next/link";
import CheckoutButton from './CheckoutButton';

export default function PricingTiers() {
  // Add state for billing period
  const [isAnnual, setIsAnnual] = useState(true);
  
  // Calculate prices based on billing period
  const essentialsPrice = isAnnual ? 29 : 39; // ~25% discount for annual
  const professionalPrice = isAnnual ? 49 : 69; // ~29% discount for annual
  const enterprisePrice = isAnnual ? "Custom" : "Custom"; // Custom pricing
  
  // Calculate annual prices (for display)
  const essentialsAnnualTotal = essentialsPrice * 12;
  const professionalAnnualTotal = professionalPrice * 12;
  return (
    <section className="py-20 px-4 bg-pattern-dots">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Flexible Coaching Plans</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-foreground/70">
          Choose the level of coaching that works best for your goals
        </p>
        
        {/* Add Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-[var(--background-alt)] p-1 rounded-full">
            <button 
              className={`px-6 py-2 rounded-full cursor-pointer ${!isAnnual ? 'bg-[var(--primary)] text-white' : 'text-foreground/70'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-full cursor-pointer ${isAnnual ? 'bg-[var(--primary)] text-white' : 'text-foreground/70'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual (Save 25%)
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Essentials Plan */}
          <div className="card p-8 card-hover-lift transition-all flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Stride Essentials</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">${essentialsPrice}</span>
                <span className="text-foreground/60 ml-2">/{isAnnual ? 'month' : 'month'}</span>
              </div>
              {isAnnual && (
                <p className="text-sm text-[var(--primary)] mb-2">
                  ${essentialsAnnualTotal} billed annually
                </p>
              )}
              <p className="text-foreground/70 mb-6">Perfect for getting started with AI coaching</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Daily coaching access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Core coaching modes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic tool integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mobile and web apps</span>
                </li>
              </ul>
            </div>
            <CheckoutButton
              plan="essentials"
              isAnnual={isAnnual}
              className="mt-auto btn-primary w-full text-center cursor-pointer hover:cursor-pointer"
            >
              START FREE TRIAL
            </CheckoutButton>
          </div>
          
          {/* Professional Plan */}
          <div className="card card-highlight p-8 card-hover-glow transition-all flex flex-col h-full relative border-2 border-[var(--primary)]">
            <div className="absolute top-0 right-0 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Stride Professional</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">${professionalPrice}</span>
                <span className="text-foreground/60 ml-2">/{isAnnual ? 'month' : 'month'}</span>
              </div>
              {isAnnual && (
                <p className="text-sm text-[var(--primary)] mb-2">
                  ${professionalAnnualTotal} billed annually
                </p>
              )}
              <p className="text-foreground/70 mb-6">Ideal for consistent, comprehensive coaching</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Unlimited</strong> coaching access</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All coaching modes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complete integrations suite</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>All platforms</span>
                </li>
              </ul>
            </div>
            <CheckoutButton
              plan="professional"
              isAnnual={isAnnual}
              className="mt-auto btn-primary w-full text-center cursor-pointer hover:cursor-pointer"
            >
              START FREE TRIAL
            </CheckoutButton>
          </div>
          
          {/* Enterprise Plan */}
          <div className="card card-primary p-8 card-hover-border transition-all flex flex-col h-full">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Stride Enterprise</h3>
              <div className="flex items-end mb-1">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-foreground/70 ml-2">pricing</span>
              </div>
              <p className="text-foreground/70 mb-6">For teams and organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Team deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Admin dashboard</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>White labeling options</span>
                </li>
              </ul>
            </div>
            <Link 
              href="/contact-sales" 
              className="mt-auto btn-secondary w-full text-center block"
            >
              CONTACT SALES
            </Link>
          </div>
        </div>
        
        <p className="text-center mt-8 text-foreground/60">
          {isAnnual ? 'Annual plans are billed yearly. ' : ''}
          All plans include a 14-day free trial and can be canceled anytime.
        </p>
      </div>
    </section>
  );
}
