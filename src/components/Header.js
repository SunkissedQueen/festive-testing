import React, { useState } from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import limeFest from "../assets/lime-fest.png"
import tealFest from "../assets/teal-fest.png"

const Header = () => {
  const imageStyle = {
    width: '100px', // Set your initial width
    height: '45px', // Set your initial height
    transition: '0.3s', // Add a smooth transition effect
  }
  const [imageSrc, setImageSrc] = useState(limeFest)
  return(
    <header> 
      <Nav justified>
        <NavItem>
          <NavLink to="/">
            <img 
              src={imageSrc} 
              alt="two words festive testing written in black cursive font on separate lines and aligned to the left"
              // inline styling to change image on hover and transition back
              style={imageStyle}
              onMouseOver={() => {
                setImageSrc(tealFest)
              }}
              onMouseOut={() => {
                setImageSrc(limeFest)
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