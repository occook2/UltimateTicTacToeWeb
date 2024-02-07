import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App component', () => {
  const { getByTest } = render(<App />);
  const titleElement = getByText(/Ultimate Tic-Tac-Toe/i);
  expect(titleElement).toBeInTheDocument();
});
