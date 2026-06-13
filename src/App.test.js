// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinA title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinA/i);
    expect(titleElement).toBeInTheDocument();
});
