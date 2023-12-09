import React from "react"
import jokeVideo from "../assets/joke.mp4"

const Joke = ({laughter, handleLaughter}) => {
  return(
    <main>
      <video width="320" height="240" autoPlay loop>
        <source src={jokeVideo} type="video/mp4" />
      </video>
      <section className="joke-position" onClick={handleLaughter}>
        {laughter.joke}
        <button 
          style={{
            backgroundColor: "rgba(98, 225, 210, 0.9)",
            border: "6px outset rgba(98, 225, 210)",
            fontSize: "medium",
            fontWeight: "bold"
          }}
        >
          Click for a different joke
        </button>
        {laughter.answer}
      </section>
    </main>
  )
}

export default Joke
