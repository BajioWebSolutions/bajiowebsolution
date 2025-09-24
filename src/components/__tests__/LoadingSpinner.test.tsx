import { render, screen } from '@testing-library/react';
import { LoadingSpinner, PageLoader, SkeletonLoader } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    
    // Check if the component renders without crashing
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    const customText = 'Loading content...';
    render(<LoadingSpinner text={customText} />);
    
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  it('renders different variants correctly', () => {
    const { rerender } = render(<LoadingSpinner variant="minimal" />);
    
    // Test minimal variant
    expect(screen.getByRole('generic')).toBeInTheDocument();
    
    // Test dots variant
    rerender(<LoadingSpinner variant="dots" />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
    
    // Test pulse variant
    rerender(<LoadingSpinner variant="pulse" />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(<LoadingSpinner size="sm" />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="lg" />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
    
    rerender(<LoadingSpinner size="xl" />);
    expect(screen.getByRole('generic')).toBeInTheDocument();
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
    
    // Should render 3 lines by default
    const lines = container.querySelectorAll('div > div');
    expect(lines).toHaveLength(3);
  });

  it('renders custom number of lines', () => {
    const { container } = render(<SkeletonLoader lines={5} />);
    
    const lines = container.querySelectorAll('div > div');
    expect(lines).toHaveLength(5);
  });
});