import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import SectionTitle from '.';

describe('SectionTitle Component', () => {
  it('should render the title correctly based on props', () => {
    const mockTitle = 'Produtos em Destaque';

    render(<SectionTitle title={mockTitle} />);

    const titleElement = screen.getByText(mockTitle);

    expect(titleElement).toBeInTheDocument();
  });

  it('should be use an h2 tag for better SEO and accessibility', () => {
    render(<SectionTitle title="Accessibility" />);

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it('should contain the correct Tailwind CSS classes for styling', () => {
    render(<SectionTitle title="Style Test" />);

    const heading = screen.getByRole('heading');

    expect(heading).toHaveClass('text-3xl');
    expect(heading).toHaveClass('font-semibold');
    expect(heading).toHaveClass('text-center');
    expect(heading).toHaveClass('mb-12');
  });

  it('should be wrapped in a div with the "wrapper" class', () => {
    const { container } = render(<SectionTitle title="Wrapper Test" />);

    const warpperDiv = container.firstChild;

    expect(warpperDiv).toHaveClass('wrapper');
  });
});
