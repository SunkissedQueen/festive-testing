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

  const [jokes, setJokes] = useState("Click here to see a random joke")
  console.log("mockJokes: ", mockJokes)
  console.log("jokes: ", jokes)

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke" element={<Joke />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
