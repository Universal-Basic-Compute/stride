import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Partnerships() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Join the Stride Network</h1>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              We're actively seeking professional coaches, industry experts, and strategic partners to help us expand our mission of making quality coaching support accessible to everyone.
            </p>
          </div>
          
          {/* Professional Coaches Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">For Professional Coaches</h2>
            
            <div className="card p-8 shadow-depth mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Join Our Expert Panel</h3>
                  <p className="text-foreground/70 mb-6">
                    We're actively recruiting experienced coaches, leadership trainers, and professional development specialists to join our expert panel. As a panel member, you'll help shape Stride's coaching approaches, provide professional oversight, and ensure our AI companion delivers evidence-based support.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Flexible Consulting Opportunities</strong> - Work with us on a schedule that fits your practice</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Shape the Future of Digital Coaching</strong> - Influence how AI can ethically support coaching work</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Competitive Compensation</strong> - Receive fair payment for your expertise and time</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="card p-6 shadow-depth bg-[var(--background-alt)]">
                    <h4 className="font-semibold mb-4">We're Looking For:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">1</div>
                        <div>
                          <p className="font-medium">Certified Professional Coaches</p>
                          <p className="text-sm text-foreground/70">Executive coaches, career coaches, and leadership development specialists</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">2</div>
                        <div>
                          <p className="font-medium">Specialists in Various Methodologies</p>
                          <p className="text-sm text-foreground/70">GROW model, strengths-based coaching, solution-focused approaches</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">3</div>
                        <div>
                          <p className="font-medium">Interest in Technology</p>
                          <p className="text-sm text-foreground/70">Passion for exploring how AI can ethically support professional development</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/contact?subject=Expert Panel" className="btn-primary w-full text-center block">
                        Apply to Join Our Expert Panel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Strategic Partnerships Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Strategic Partnerships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Corporate Partners</h3>
                <p className="text-foreground/70 mb-6">
                  We partner with organizations, HR departments, and L&D teams to provide Stride as a complementary resource for employees' professional development.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>White-label solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Integration with existing L&D systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom coaching approaches</span>
                  </li>
                </ul>
                <Link href="/contact?subject=Corporate Partnership" className="btn-secondary w-full text-center block">
                  Explore Corporate Partnerships
                </Link>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Institutions</h3>
                <p className="text-foreground/70 mb-6">
                  Partner with us to offer Stride as part of your student success program or professional development curriculum, providing accessible coaching support for your students and faculty.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Volume licensing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Usage analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom onboarding materials</span>
                  </li>
                </ul>
                <Link href="/contact?subject=Educational Partnership" className="btn-secondary w-full text-center block">
                  Explore Educational Partnerships
                </Link>
              </div>
              
              <div className="card p-6 hover:shadow-depth transition-all">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Research Collaborations</h3>
                <p className="text-foreground/70 mb-6">
                  We collaborate with academic institutions and research organizations to advance the field of AI-assisted professional development and coaching.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Efficacy studies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Joint publications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-[var(--primary)] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Grant opportunities</span>
                  </li>
                </ul>
                <Link href="/contact?subject=Research Collaboration" className="btn-secondary w-full text-center block">
                  Explore Research Collaborations
                </Link>
              </div>
            </div>
          </section>
          
          {/* Technology Partners Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Technology Partners</h2>
            
            <div className="card p-8 shadow-depth">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Integration & API Partners</h3>
                  <p className="text-foreground/70 mb-6">
                    We're seeking technology partners who share our vision of making professional development support more accessible. Whether you're developing complementary tools or platforms that could benefit from Stride integration, we'd love to explore collaboration opportunities.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>API Access</strong> - Integrate TherapyKin's capabilities into your platform</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>SDK Development</strong> - Build custom applications using our toolkit</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--primary)] mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Joint Marketing</strong> - Reach new audiences through collaborative promotion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="card p-6 shadow-depth bg-[var(--background-alt)]">
                    <h4 className="font-semibold mb-4">Ideal Technology Partners:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">1</div>
                        <div>
                          <p className="font-medium">Professional Development Platforms</p>
                          <p className="text-sm text-foreground/70">Apps and services focused on career growth and skills development</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">2</div>
                        <div>
                          <p className="font-medium">HR & Talent Management Systems</p>
                          <p className="text-sm text-foreground/70">Platforms connecting employees with development resources</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mr-3 mt-0.5">3</div>
                        <div>
                          <p className="font-medium">AI & NLP Companies</p>
                          <p className="text-sm text-foreground/70">Organizations developing complementary AI technologies</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Link href="/contact?subject=Technology Partnership" className="btn-primary w-full text-center block">
                        Discuss Technology Partnership
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section>
            <div className="card p-8 shadow-depth text-center">
              <h2 className="text-2xl font-bold mb-4">Let's Build the Future of Professional Development Together</h2>
              <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                Whether you're a professional coach, corporate organization, educational institution, or technology company, we'd love to explore how we can collaborate to make quality coaching support more accessible.
              </p>
              <Link 
                href="/contact?subject=Partnership Inquiry" 
                className="btn-primary px-8 py-3 text-lg"
              >
                Start the Conversation
              </Link>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
