import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe("<Header />", () => {

  beforeEach( () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )}
  )
  
  it("renders without crashing", () => {
  })

  it('renders jokes link', () => {
    const jokeLink = screen.getByRole('link', {
      name: /random jokes/i
    })
    expect(jokeLink).toBeInTheDocument()
  })

  it("navigates to the joke page", async () => {
    expect(location.pathname).toEqual("/")
    // simulate the user clicking the joke link
    const jokeLink = screen.getByRole('link', {
      name: /random jokes/i
    })
    await userEvent.click(jokeLink)
    expect(location.pathname).toEqual("/joke")
  })

  it("navigates to the recipe page", async () => {
    expect(location.pathname).toEqual("/joke")
    // simulate the user clicking the recipe link
    const recipeLink = screen.getByRole('link', {
      name: /culinary/i
    })
    await userEvent.click(recipeLink)
    expect(location.pathname).toEqual("/recipe")
  })

  it("changes the logo image based on hovering", async () => {
    const logoElement = screen.getByRole('img', {
      name: /two words festive testing/i
    })
    // default image
    expect(logoElement).toHaveAttribute("src", "lime-fest.png")
    expect(logoElement).toHaveAttribute("alt", "two words festive testing written in black cursive font on separate lines and aligned to the left")
    // hover image
    await userEvent.hover(logoElement)
    expect(logoElement).toHaveAttribute("src", "teal-fest.png")
    // mouse is no longer hovering
    await userEvent.unhover(logoElement)
    expect(logoElement).toHaveAttribute("src", "lime-fest.png")
  })
})
