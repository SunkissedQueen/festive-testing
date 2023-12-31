import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("<App />", () => {

  beforeEach( () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  )

  it("renders without crashing", () => {
  })

  it('renders jokes link', () => {
    const linkElement = screen.getByText(/random jokes/i);
    expect(linkElement).toBeInTheDocument();
  })
})
