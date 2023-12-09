import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Joke from "./pages/Joke"
import NotFound from "./pages/NotFound"
import Recipe from "./pages/Recipe"
import mockJokes from "./mockJokes"
import "./App.css"

const App = () => {
  const [laughter, setLaughter] = useState(mockJokes[0])
  const handleLaughter = () => {
    const randomNum =  Math.floor(Math.random() * mockJokes.length)
    setLaughter(mockJokes[randomNum])
  }
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/joke" 
          element={<Joke 
            laughter={laughter} 
            handleLaughter={handleLaughter} 
          />} 
        />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
