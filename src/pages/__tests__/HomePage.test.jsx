import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage.jsx';

test("renders home page", () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
});