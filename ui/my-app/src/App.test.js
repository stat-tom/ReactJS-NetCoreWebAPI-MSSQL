import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const headerElement = screen.getByText("React JS Frontend");
  expect(headerElement).toBeInTheDocument();
});
