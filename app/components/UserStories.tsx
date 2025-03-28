import React from "react";

export default function UserStories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">How People Use Stride</h2>
        <p className="text-center max-w-2xl mx-auto mb-16 text-foreground/70">
          Real stories from people who've made Stride part of their professional development journey
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">I use Stride to prepare for leadership meetings and debrief afterward. It helps me refine my communication strategy and identify opportunities I might have missed.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">A</div>
              <div>
                <p className="font-semibold">Alex</p>
                <p className="text-sm text-foreground/60">Senior Project Manager</p>
              </div>
            </div>
          </div>
          
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">Stride helps me implement action items from my executive coaching sessions and tracks my progress. It's the perfect accountability partner between my monthly coaching meetings.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">M</div>
              <div>
                <p className="font-semibold">Maya</p>
                <p className="text-sm text-foreground/60">Department Director</p>
              </div>
            </div>
          </div>
          
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">I was unsure about professional coaching, but Stride let me explore it on my terms without pressure. Now I'm more comfortable with the whole process.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">J</div>
              <div>
                <p className="font-semibold">Jordan</p>
                <p className="text-sm text-foreground/60">Designer</p>
              </div>
            </div>
          </div>
          
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">Living in a rural area, quality professional development support was hours away until Stride. It's been a lifeline for maintaining my career growth.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">S</div>
              <div>
                <p className="font-semibold">Sarah</p>
                <p className="text-sm text-foreground/60">Nurse</p>
              </div>
            </div>
          </div>
          
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">As a night shift worker, Stride is there when I need guidance at 3AM. No other coaching support was available during those hours.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">R</div>
              <div>
                <p className="font-semibold">Raj</p>
                <p className="text-sm text-foreground/60">Security Professional</p>
              </div>
            </div>
          </div>
          
          <div className="card p-8 relative shadow-depth card-hover-lift">
            <div className="absolute -top-4 -left-4 text-6xl text-[var(--primary)] opacity-20">"</div>
            <p className="mb-6 relative z-10">I appreciate how Stride remembers everything we've discussed. I don't have to repeat my story, which makes each coaching session more productive.</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary)] font-bold mr-3">L</div>
              <div>
                <p className="font-semibold">Leila</p>
                <p className="text-sm text-foreground/60">Marketing Executive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
