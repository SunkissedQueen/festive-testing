import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe("<Home />", () => {

  beforeEach( () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )}
  )
  
  it("renders without crashing", () => {
  })

  it('renders jokes link', () => {
  
    const linkElement = screen.getByRole('button', {
      name: /joyful snowman, complete with/i
    })
    expect(linkElement).toBeInTheDocument();
  })
})
