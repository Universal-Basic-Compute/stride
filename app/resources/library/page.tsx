'use client';

import React, { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Resource categories
const categories = [
  { id: "all", name: "All Resources" },
  { id: "leadership", name: "Leadership" }
];

// Resource types
const resourceTypes = [
  { id: "all", name: "All Types" },
  { id: "guide", name: "Guides" }
];

// Resource data structure
interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  imageUrl?: string;
  url: string;
  featured?: boolean;
  new?: boolean;
}

// Sample resources data
const resources: Resource[] = [
  {
    id: 14,
    title: "The Executive Presence Blueprint: Communication Strategies for Leadership Impact",
    description: "Master the art of executive presence with research-backed techniques to command attention, communicate with clarity, and project confidence in any professional setting.",
    category: "leadership",
    type: "guide",
    imageUrl: "/resources/executive-presence-blueprint.jpg",
    url: "/resources/executive-presence-blueprint",
    new: true,
    featured: true
  }
];

export default function Library() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter resources based on active filters and search query
  const filteredResources = resources.filter(resource => {
    // Category filter
    const categoryMatch = activeCategory === "all" || resource.category === activeCategory;
    
    // Type filter
    const typeMatch = activeType === "all" || resource.type === activeType;
    
    // Search query
    const searchMatch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return categoryMatch && typeMatch && searchMatch;
  });
  
  // Get featured resources
  const featuredResources = resources.filter(resource => resource.featured);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Resource Library</h1>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              Access our collection of evidence-based resources to support your mental health journey. From guides and worksheets to videos and audio exercises, find the tools you need.
            </p>
          </div>
          
          {/* Featured Resources */}
          {featuredResources.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Resource</h2>
              <div className="grid grid-cols-1 gap-6">
                {featuredResources.map(resource => (
                  <div key={resource.id} className="card overflow-hidden shadow-depth">
                    <div className="aspect-w-16 aspect-h-9 bg-[var(--primary)]/10 relative overflow-hidden">
                      {resource.imageUrl ? (
                        <img 
                          src={resource.imageUrl} 
                          alt={resource.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, replace with a gradient background
                            e.currentTarget.style.display = 'none';
                            const parentElement = e.currentTarget.parentElement;
                            if (parentElement) {
                              parentElement.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)';
                              parentElement.innerHTML += `<div class="w-full h-full flex items-center justify-center text-white font-medium p-4 text-center">${resource.title}</div>`;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20">
                          <span className="text-[var(--primary)] font-medium">Resource Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-medium">
                            {categories.find(c => c.id === resource.category)?.name}
                          </span>
                          <span className="ml-2 px-2 py-1 bg-[var(--background-alt)] rounded-full text-xs font-medium">
                            {resourceTypes.find(t => t.id === resource.type)?.name}
                          </span>
                        </div>
                        {resource.new && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <p className="text-foreground/70 mb-4">{resource.description}</p>
                      <Link 
                        href={resource.id === 1 ? "/resources/anxiety-guide" : resource.id === 12 ? "/resources/depression-guide" : resource.url}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        View Resource
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Search and Filters */}
          <section className="mb-12">
            <div className="card p-6 shadow-sm">
              <div className="mb-6">
                <label htmlFor="search" className="block text-sm font-medium mb-2">Search Resources</label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by keyword..."
                  className="w-full px-4 py-2 rounded-lg border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Filter by Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          activeCategory === category.id 
                            ? "bg-[var(--primary)] text-white" 
                            : "bg-[var(--background-alt)] hover:bg-[var(--primary)]/10"
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Filter by Type</label>
                  <div className="flex flex-wrap gap-2">
                    {resourceTypes.map(type => (
                      <button
                        key={type.id}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          activeType === type.id 
                            ? "bg-[var(--primary)] text-white" 
                            : "bg-[var(--background-alt)] hover:bg-[var(--primary)]/10"
                        }`}
                        onClick={() => setActiveType(type.id)}
                      >
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Resource Grid */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Resources</h2>
              <p className="text-foreground/60 text-sm">{filteredResources.length} resources found</p>
            </div>
            
            {filteredResources.length === 0 ? (
              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--background-alt)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-foreground/70 mb-4">Try adjusting your filters or search query</p>
                <button 
                  className="btn-secondary text-sm px-4 py-2"
                  onClick={() => {
                    setActiveCategory("all");
                    setActiveType("all");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(resource => (
                  <div key={resource.id} className="card overflow-hidden hover:shadow-depth transition-all">
                    <div className="aspect-w-16 aspect-h-9 bg-[var(--primary)]/5 relative overflow-hidden">
                      {resource.imageUrl ? (
                        <img 
                          src={resource.imageUrl} 
                          alt={resource.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, replace with a gradient background
                            e.currentTarget.style.display = 'none';
                            const parentElement = e.currentTarget.parentElement;
                            if (parentElement) {
                              parentElement.style.background = 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)';
                              parentElement.innerHTML += `<div class="w-full h-full flex items-center justify-center text-white font-medium p-4 text-center">${resource.title}</div>`;
                            }
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {resource.type === 'video' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          )}
                          {resource.type === 'audio' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l-3.536 3.536M6.414 8.464l3.536 3.536" />
                            </svg>
                          )}
                          {resource.type === 'guide' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          )}
                          {resource.type === 'worksheet' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          )}
                          {resource.type === 'infographic' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          )}
                          {resource.type === 'research' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[var(--primary)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <span className="px-2 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-xs font-medium">
                            {categories.find(c => c.id === resource.category)?.name}
                          </span>
                        </div>
                        {resource.new && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                            New
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                      <p className="text-foreground/70 mb-4 text-sm line-clamp-2">{resource.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-foreground/60 bg-[var(--background-alt)] px-2 py-1 rounded">
                          {resourceTypes.find(t => t.id === resource.type)?.name}
                        </span>
                        <Link 
                          href={resource.id === 1 ? "/resources/anxiety-guide" : 
                               resource.id === 4 ? "/resources/stress-science" :
                               resource.id === 6 ? "/resources/relationship-communication" :
                               resource.id === 12 ? "/resources/depression-guide" : 
                               resource.url}
                          className="text-[var(--primary)] text-sm font-medium hover:underline"
                        >
                          View Resource →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
          
          {/* Resource Collections */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Resource Collections</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Leadership Resources</h3>
                <p className="text-foreground/70 mb-4">
                  A collection of resources designed to help you develop your leadership skills, enhance your executive presence, and advance your career.
                </p>
                <Link href="/resources/executive-presence-blueprint" className="text-[var(--primary)] font-medium hover:underline">
                  Explore Resources →
                </Link>
              </div>
            </div>
          </section>
          
          {/* Request a Resource */}
          <section className="mb-16">
            <div className="card p-8 shadow-depth bg-[var(--background-alt)]">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                  <p className="text-foreground/70 mb-6">
                    We're constantly expanding our resource library based on user needs. If there's a specific topic or type of resource you'd like to see, let us know and our team will consider adding it.
                  </p>
                  <Link 
                    href="/contact?subject=Resource%20Request" 
                    className="btn-primary px-6 py-2"
                  >
                    Request a Resource
                  </Link>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[var(--primary)]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Newsletter Signup */}
          <section>
            <div className="card p-8 shadow-depth text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive updates when new resources are added to our library, along with tips and insights from our mental health experts.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-2 rounded-lg border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn-primary whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-foreground/60 mt-2 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
