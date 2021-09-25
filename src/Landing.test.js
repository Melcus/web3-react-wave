import { render, screen } from '@testing-library/react';
import Landing from './Landing';

test('renders php', () => {
  render(<Landing />);
  const linkElement = screen.getByText(/php/i);
  expect(linkElement).toBeInTheDocument();
});
