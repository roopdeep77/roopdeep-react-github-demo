import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi DevOps', () => {
  render(<App />);
  const element = screen.getByText(/Hi DevOps/i);
  expect(element).toBeInTheDocument();
});
