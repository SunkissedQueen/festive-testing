import React from "react"
import logo from "../assets/logo.png"

const Footer = () => {

  const imageStyle = {
    width: '20px',
    height: '20px',
    paddingLeft: "4px"
  }

  return(
    <footer>
      <p>&copy; 2023 Syntactical Astronaut Production 
        <img 
          src={logo} 
          alt="circular christmas ornament with green and white curvy border and a red border in the middle with green and white dots" 
          style={imageStyle}
        /> 
        <a 
          target="blank" 
          href="https://www.linkedin.com/in/cmb-charlean-baxter"
          id="contact-link"
          style={{paddingLeft: "4px"}}    
        >
          Contact Me
        </a>
        <img 
          src={logo} 
          alt="circular christmas ornament with green and white curvy border and a red border in the middle with green and white dots" 
          style={imageStyle}
        />  
      </p>
    </footer>
  )
}

export default Footer