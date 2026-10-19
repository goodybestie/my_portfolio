import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero and key sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveAccessibleName(/frontend developer/i);
  expect(screen.getByText(/selected work/i)).toBeInTheDocument();
  expect(screen.getAllByText(/goodnessbassey003@gmail.com/i).length).toBeGreaterThan(0);
});
