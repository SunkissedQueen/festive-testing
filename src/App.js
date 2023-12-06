import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Joke from "./pages/Joke"
import NotFound from "./pages/NotFound"
import Recipe from "./pages/Recipe"
import "./App.css"

const App = () => {
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
