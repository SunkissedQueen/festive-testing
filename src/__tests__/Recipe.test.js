import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Recipe from '../pages/Recipe';

describe("<Recipe />", () => {

  beforeEach( () => {
    render(
      <BrowserRouter>
        <Recipe />
      </BrowserRouter>
    )}
  )
  
  it("renders without crashing", () => {
  })

  it('renders two cards for ingredients and instructions', () => {
    const cardTitle = screen.getAllByRole('heading')
    expect(cardTitle.length).toEqual(2)
    expect(cardTitle[0]).toHaveTextContent("Ingredients")
    expect(cardTitle[1]).toHaveTextContent("Instructions")
  })
})
