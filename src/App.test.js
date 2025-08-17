import { render, screen } from '@testing-library/react';
import App from './App';

test('shows maintenance message', () => {
  render(<App />);
  expect(screen.getByText(/under maintenance/i)).toBeInTheDocument();
});
