import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App correctly', () => {
  render(<App />);
  const component = screen.getByText("Home");
  expect(component).toBeInTheDocument();
});
