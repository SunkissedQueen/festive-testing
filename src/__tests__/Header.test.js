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
    const linkElement = screen.getByRole('link', {
      name: "Random Jokes"
    })
    expect(linkElement).toBeInTheDocument();
  })

  it("navigates to the jokes page", async () => {
    const linkElement = screen.getByRole('link', {
      name: "Random Jokes"
    })
    expect(location.pathname).toEqual("/")
    await userEvent.click(linkElement)
    expect(location.pathname).toEqual("/joke")
  })

  it("changes the logo image based whether or not user is hovering", async () => {
    const logoElement = screen.getByAltText(/festive testing/i)
    expect(logoElement).toHaveAttribute("src", "lime-fest.png")
    expect(logoElement).toHaveAttribute("alt", "two words festive testing written in black cursive font on separate lines and aligned to the left")
    // hover
    await userEvent.hover(logoElement)
    expect(location.pathname).toEqual("/joke")
    expect(logoElement).toHaveAttribute("src", "teal-fest.png")
    expect(logoElement).toHaveAttribute("alt", "two words festive testing written in black cursive font on separate lines and aligned to the left")
    // not hovering
    await userEvent.unhover(logoElement)
    expect(logoElement).toHaveAttribute("src", "lime-fest.png")
    expect(logoElement).toHaveAttribute("alt", "two words festive testing written in black cursive font on separate lines and aligned to the left")
  })
})
