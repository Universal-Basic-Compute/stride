import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlexibleUsage from "./components/FlexibleUsage";
import PrivacySection from "./components/PrivacySection";
import FeatureHighlights from "./components/FeatureHighlights";
import UserStories from "./components/UserStories";
import CommunicationFlexibility from "./components/CommunicationFlexibility";
import TherapyComparison from "./components/TherapyComparison";
import GettingStarted from "./components/GettingStarted";
import PricingTiers from "./components/PricingTiers";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="pt-16">
      {/* Hero Section with improved gradient background */}
      <header className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-[#3563E9] via-[#4F74FF] to-[#6B8EFC] texture-overlay animated-bg relative">
        <div className="animate-fade-in max-w-6xl mx-auto text-white z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-md">Stride</h1>
          <h2 className="text-xl md:text-2xl max-w-3xl mb-8 text-white font-medium drop-shadow-md">
            AI-Powered Coaching That Helps You Achieve Your Goals
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-white drop-shadow-sm font-medium">
            Stride is an AI-powered coaching platform that helps individuals achieve their personal and professional goals through personalized guidance, actionable insights, continuous support, and data-driven feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="btn-primary bg-white text-[#3563E9] hover:bg-opacity-90 shadow-lg"
            >
              Get 3 Free Sessions
            </Link>
            <Link 
              href="/learn-more" 
              className="btn-secondary bg-transparent text-white border-white hover:bg-white/20 shadow-md"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Add semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        
        {/* Add decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-[-1] opacity-10">
          <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-[20%] left-[10%] w-40 h-40 rounded-full bg-white"></div>
        </div>
      </header>

      {/* Flexible Usage Scenarios - NEW SECTION */}
      <FlexibleUsage />

      {/* Privacy Section - MOVED HIGHER */}
      <PrivacySection />

      {/* How It Works - with timeline design */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">A simple process designed to provide meaningful support from day one.</p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 transform -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right">
                  <h3 className="text-2xl font-semibold mb-3">Connect</h3>
                  <p className="text-foreground/70">Start with a simple conversation. TherapyKin will get to know you, your challenges, and your goals.</p>
                </div>
                <div className="md:w-12 z-10 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="card p-4 bg-[var(--primary)]/5 border-none">
                    <p className="italic text-sm">"Tell me a bit about yourself and what brings you here today..."</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <div className="card p-4 bg-[var(--primary)]/5 border-none">
                    <p className="italic text-sm">"I notice you mentioned feeling anxious in social situations. Would you like to explore some techniques that might help?"</p>
                  </div>
                </div>
                <div className="md:w-12 z-10 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-left">
                  <h3 className="text-2xl font-semibold mb-3">Explore</h3>
                  <p className="text-foreground/70">Engage in evidence-based therapeutic approaches personalized to your needs and preferences.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right">
                  <h3 className="text-2xl font-semibold mb-3">Grow</h3>
                  <p className="text-foreground/70">Track your progress, receive insights, and develop new skills with a companion that evolves alongside you.</p>
                </div>
                <div className="md:w-12 z-10 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block">
                  <div className="card p-4 bg-[var(--primary)]/5 border-none">
                    <p className="italic text-sm">"I've noticed you've been practicing mindfulness consistently. Your anxiety scores have decreased by 23% over the past month."</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block">
                  <div className="card p-4 bg-[var(--primary)]/5 border-none">
                    <p className="italic text-sm">"How did that challenging conversation go yesterday? Were you able to use the assertive communication techniques we discussed?"</p>
                  </div>
                </div>
                <div className="md:w-12 z-10 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 text-left">
                  <h3 className="text-2xl font-semibold mb-3">Integrate</h3>
                  <p className="text-foreground/70">Apply what you've learned with TherapyKin's support, building lasting positive changes in your daily life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights - REORGANIZED */}
      <FeatureHighlights />

      {/* How People Use TherapyKin - NEW SECTION */}
      <UserStories />

      {/* Communication Flexibility - NEW SECTION */}
      <CommunicationFlexibility />

      {/* TherapyKin & Traditional Therapy - NEW SECTION */}
      <TherapyComparison />

      {/* Getting Started - NEW SECTION */}
      <GettingStarted />

      {/* Pricing - UPDATED */}
      <PricingTiers />


      {/* Final CTA - with blue-focused gradient background */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#3563E9] via-[#4F74FF] to-[#6B8EFC] texture-overlay animated-bg relative text-white">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 drop-shadow-md">Ready To Achieve Your Goals?</h2>
          <p className="text-xl mb-10 font-medium drop-shadow-sm">Start Your Coaching Journey Today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="rounded-full bg-white text-[#3563E9] px-8 py-3 font-medium hover:bg-opacity-90 transition-all shadow-lg"
            >
              Get 3 Free Sessions
            </Link>
            <Link 
              href="/learn-more" 
              className="rounded-full border border-white px-8 py-3 font-medium hover:bg-white/20 transition-all shadow-md"
            >
              Learn More
            </Link>
          </div>
          <p className="mt-10 font-medium">Questions? Contact us at <a href="mailto:info@stridecoaching.ai" className="underline hover:text-white/80">info@stridecoaching.ai</a></p>
          <p className="mt-4 text-xs max-w-2xl mx-auto font-medium">Stride is designed to complement your personal development journey. For professional advice, please consult with qualified specialists in your field of interest.</p>
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
