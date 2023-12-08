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
    // console.log("current url: ", location.pathname)
    await userEvent.click(linkElement)
    // console.log("current url: ", location.pathname)
    expect(location.pathname).toEqual("/joke")
    console.log(location)
  })
})
