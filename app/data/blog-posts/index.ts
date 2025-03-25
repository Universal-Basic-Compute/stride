// Import blog posts
import { post as coachingGapPost } from './coaching-gap-traditional-executive-coaching';
import { post as careerAccelerationPost } from './career-acceleration-ai-coaching-compound-growth';

// Array of blog posts
export const blogPosts = [
  careerAccelerationPost,
  coachingGapPost
];

// Helper function to get a post by slug
export function getPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get posts by persona
export function getPostsByPersona(persona: string) {
  return blogPosts.filter(post => post.persona === persona);
}

// Helper function to get featured posts
export function getFeaturedPosts(count: number = 3) {
  return blogPosts.slice(0, count);
}
