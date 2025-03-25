'use client';

import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
}

export default function Testimonial({ quote, author, title }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-[var(--background-alt)]/50 p-6 rounded-lg border border-foreground/5">
      <div className="flex items-start mb-4">
        <svg className="w-10 h-10 text-[var(--primary)]/30 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <div>
          <p className="text-foreground/80 italic mb-4">
            "{quote}"
          </p>
          <p className="font-medium">{author}, {title}</p>
        </div>
      </div>
    </div>
  );
}
