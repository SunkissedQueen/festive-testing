import React from "react"
import grinch from "../assets/grinch.png"

const NotFound = () => {
  return(
    <main className="content-position"> 
      <h2>Everything is here...except for the page you seek</h2>
      <img 
        src={grinch} 
        alt="mischievous tall slender character with green fur, wearing a red Christmas hat and red neckerchief, surrounded by wrapped christmas presents"
      />
    </main>
  )
}

export default NotFound