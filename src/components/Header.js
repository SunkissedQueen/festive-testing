import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import limeFest from "../assets/lime-fest.png"

const Header = () => {

  const imageStyle = {
    width: '100px', // Set your initial width
    height: '45px', // Set your initial height
    transition: '0.3s', // Add a smooth transition effect
  }

  return(
    <header> 
      <Nav justified>
        <NavItem>
          <NavLink to="/">
            <img 
              src={limeFest} 
              alt="two words festive testing written in black cursive font on separate lines and aligned to the left"
              // inline styling to change image on hover and transition back
              style={imageStyle}
              onMouseOver={(e) => {
                e.target.src = "http://localhost:3000/static/media/teal-fest.58ae1faa20790d2d29ac.png"
              }}
              onMouseOut={(e) => {
                e.target.src = "http://localhost:3000/static/media/lime-fest.5bc60668b5cd7d99cceb.png"
              }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/joke" className="nav-links">
            Random Jokes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/recipe" className="nav-links">
            Culinary Mystery
          </NavLink>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header