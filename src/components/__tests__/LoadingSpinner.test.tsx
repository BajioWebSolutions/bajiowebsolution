import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/utils';
import { PageLoader } from '../LoadingSpinner';

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
