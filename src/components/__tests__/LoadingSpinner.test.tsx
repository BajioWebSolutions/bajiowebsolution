import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { LoadingSpinner, PageLoader, SkeletonLoader } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    const { container } = render(<LoadingSpinner />);
    
    // Check if the component renders without crashing
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const customText = 'Loading content...';
    render(<LoadingSpinner text={customText} />);
    
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  it('renders different variants correctly', () => {
    const { rerender, container } = render(<LoadingSpinner variant="minimal" />);
    
    // Test minimal variant
    expect(container.firstChild).toBeInTheDocument();
    
    // Test dots variant
    rerender(<LoadingSpinner variant="dots" />);
    expect(container.firstChild).toBeInTheDocument();
    
    // Test pulse variant
    rerender(<LoadingSpinner variant="pulse" />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies different sizes correctly', () => {
    const { rerender, container } = render(<LoadingSpinner size="sm" />);
    expect(container.firstChild).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="lg" />);
    expect(container.firstChild).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="xl" />);
    expect(container.firstChild).toBeInTheDocument();
  });
});

describe('PageLoader', () => {
  it('renders with default message', () => {
    render(<PageLoader />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByText('Please wait while we load the content')).toBeInTheDocument();
  });

  it('renders with custom message', () => {
    const customMessage = 'Loading page data...';
    render(<PageLoader message={customMessage} />);
    
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
});

describe('SkeletonLoader', () => {
  it('renders default number of lines', () => {
    const { container } = render(<SkeletonLoader />);
    
    // Should render 3 lines by default (with proper selector)
    const lines = container.querySelectorAll('.space-y-3 > div');
    expect(lines).toHaveLength(3);
  });

  it('renders custom number of lines', () => {
    const { container } = render(<SkeletonLoader lines={5} />);
    
    const lines = container.querySelectorAll('.space-y-3 > div');
    expect(lines).toHaveLength(5);
  });
});