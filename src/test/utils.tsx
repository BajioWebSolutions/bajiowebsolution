import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { HelmetProvider } from 'react-helmet-async';

// Create a custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 0,
        gcTime: 0,
      },
    },
  });

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock data for tests
export const mockBlogPost = {
  id: '1',
  title: 'Test Blog Post',
  excerpt: 'This is a test blog post excerpt',
  content: 'This is the full content of the test blog post',
  author: 'Test Author',
  publishedAt: '2024-01-01T00:00:00Z',
  slug: 'test-blog-post',
  tags: ['test', 'blog'],
  category: 'Technology',
  featuredImage: '/test-image.jpg',
  readTime: 5,
};

export const mockService = {
  id: '1',
  title: 'Test Service',
  description: 'This is a test service description',
  icon: 'test-icon',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  pricing: '$100/month',
  slug: 'test-service',
};

export const mockTestimonial = {
  id: '1',
  name: 'John Doe',
  company: 'Test Company',
  role: 'CEO',
  content: 'This is a great service!',
  rating: 5,
  avatar: '/test-avatar.jpg',
};

// Mock functions
export const mockScrollTo = vi.fn();
Object.defineProperty(window, 'scrollTo', { value: mockScrollTo });

export const mockIntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override the default render with our custom render
export { customRender as render };