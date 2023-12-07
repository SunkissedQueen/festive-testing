import React from "react"
import grinch from "../assets/grinch.png"
const NotFound = () => {
  return(
    <main className="content-position"> 
      <h2>Everything is here...except for the page you seek</h2>
      <img src={grinch} alt="gray cat detective wearing a trench coat and holding magnifying glass"/>
    </main>
  )
}

export default NotFound