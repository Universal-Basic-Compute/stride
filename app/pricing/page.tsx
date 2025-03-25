'use client';

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import CheckoutButton from '../components/CheckoutButton';

export default function Pricing() {
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
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Coaching Plan</h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Select the plan that fits your professional development needs. All plans include our core coaching features and can be canceled anytime.
            </p>
          </div>
          
          {/* Pricing Toggle */}
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
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Essentials Plan */}
            <div className="card p-8 hover:shadow-depth transition-all flex flex-col h-full">
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
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Standard privacy protections</span>
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
            <div className="card card-highlight p-8 hover:shadow-depth transition-all flex flex-col h-full relative border-2 border-[var(--primary)]">
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
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority support</span>
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
            <div className="card card-primary p-8 hover:shadow-depth transition-all flex flex-col h-full">
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
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--accent)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dedicated support</span>
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
          {/* Plan Comparison */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Plan Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[var(--background-alt)]">
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">Essentials</th>
                    <th className="p-4 text-center">Professional</th>
                    <th className="p-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Coaching Sessions</td>
                    <td className="p-4 text-center">Daily limit</td>
                    <td className="p-4 text-center">Unlimited</td>
                    <td className="p-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Coaching Modes</td>
                    <td className="p-4 text-center">3 modes</td>
                    <td className="p-4 text-center">All 7 modes</td>
                    <td className="p-4 text-center">All 7 modes + custom</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Progress Analytics</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Advanced + team</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Tool Integrations</td>
                    <td className="p-4 text-center">2 integrations</td>
                    <td className="p-4 text-center">All integrations</td>
                    <td className="p-4 text-center">All + custom</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Platforms</td>
                    <td className="p-4 text-center">Web + mobile</td>
                    <td className="p-4 text-center">All platforms</td>
                    <td className="p-4 text-center">All platforms</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Team Features</td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-[var(--accent)] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">White Labeling</td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="p-4 text-center">
                      <svg className="h-5 w-5 text-[var(--accent)] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="p-4 font-medium">Support</td>
                    <td className="p-4 text-center">Standard</td>
                    <td className="p-4 text-center">Priority</td>
                    <td className="p-4 text-center">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">What's included in the free trial?</h3>
                <p className="text-foreground/70">
                  Your 14-day free trial includes full access to all features of the Professional plan. This gives you a chance to experience the full power of Stride before choosing your plan. No credit card required to start.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Can I change plans later?</h3>
                <p className="text-foreground/70">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">How do I cancel my subscription?</h3>
                <p className="text-foreground/70">
                  You can cancel anytime through your account settings. There are no cancellation fees or long-term commitments.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">How secure is my data?</h3>
                <p className="text-foreground/70">
                  Your privacy and data security are our top priorities. All conversations are encrypted, and we follow industry-leading security practices. We never share your personal information with third parties without your explicit consent.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">What are coaching modes?</h3>
                <p className="text-foreground/70">
                  Coaching modes are specialized approaches that Stride uses to address different aspects of your professional development. The seven modes include Strategy, Analysis, Facilitation, Connection, Implementation, Documentation, and Challenge.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">What integrations are available?</h3>
                <p className="text-foreground/70">
                  Stride integrates with popular productivity tools including calendar apps (Google Calendar, Outlook), task managers (Asana, Trello, Monday), note-taking apps (Notion, Evernote), and communication platforms (Slack, Teams).
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">Is Stride a replacement for human coaching?</h3>
                <p className="text-foreground/70">
                  Stride is designed to complement human coaching, not replace it. While Stride provides consistent, data-driven guidance, some situations may benefit from human expertise. Many professionals use both for comprehensive development.
                </p>
              </div>
              
              <div className="card p-6">
                <h3 className="text-lg font-medium mb-3">What platforms can I use Stride on?</h3>
                <p className="text-foreground/70">
                  Stride is available on iOS, Android, web browsers, desktop applications (Windows and Mac), and has voice interfaces for smart speakers. Your coaching experience syncs seamlessly across all your devices.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to accelerate your growth?</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Begin your journey with Stride today and experience the benefits of a coaching companion that remembers, adapts, and grows with you.
            </p>
            <Link 
              href="/register" 
              className="btn-primary inline-flex items-center px-8 py-4 text-lg"
            >
              Start Your 14-Day Free Trial
            </Link>
            <p className="mt-4 text-foreground/60">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
