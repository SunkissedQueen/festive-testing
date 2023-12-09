import React from "react"
import { Button } from "reactstrap"
import { NavLink } from "react-router-dom"
import frosty from "../assets/frosty.png"
import chaCha from "../assets/chacha.png"

const Home = () => {
  return(
    <main className="content-position">
      <h1>❄️ Fa-la-la-la ❄️ a Joke or Recipe for Ya ❄️</h1>
      <h2>Click Frosty the Funnyman for instant hilarity or Hotpot ChaCha for a taste bud fiesta! Your click, your delight - let the festivities begin!</h2>
      <Button color="info">
        <NavLink to="/joke">
          <img src={frosty} alt="joyful snowman, complete with a carrot nose, orange buttons, green scarf, red mittens, and a red top hat, is rolling on the ground with laughter"/>
        </NavLink>
      </Button>
      {' '}
      <Button color="info">
        <NavLink to="/recipe">
          <img src={chaCha} alt="chef with brown skin is actively stirring food in a red skillet on the stovetop; wearing a red apron, a red shirt, and a yellow apron; and holding a red recipe book"/>
        </NavLink>
      </Button>
    </main>
  )
}

export default Home
