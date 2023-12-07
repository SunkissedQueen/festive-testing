import React from "react"
import logo from "../assets/logo.png"
import purpleLight from "../assets/purple.png"
import redLight from "../assets/red.png"

const Footer = () => {

  const imageStyle = {
    width: '20px',
    height: '20px',
    paddingLeft: "4px"
  }

  return(
    <footer>
      <p>&copy; 2023 Syntactical Astronaut Production 
        <img src={logo} style={imageStyle}/> 
        <a 
          target="blank" 
          href="https://www.linkedin.com/in/cmb-charlean-baxter"
          id="contact-link"
          style={{paddingLeft: "4px"}}    
        >
          Contact Me
        </a>
        <img src={logo} style={imageStyle}/> 
      </p>
    </footer>
  )
}

export default Footer