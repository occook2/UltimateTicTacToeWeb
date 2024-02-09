import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

test('renders app title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Ultimate Tic-Tac-Toe/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders BigBoard component', () => {
  const { getByTestId } = render(<App />);
  const bigBoardElement = getByTestId('big-board');
  expect(bigBoardElement).toBeInTheDocument();
});
