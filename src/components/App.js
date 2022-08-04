
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react';
// import NavBar from './NavBar'
import LandingPage from './LandingPage'
import TallGrass from './TallGrass';
import PokeDex from './PokeDex';
import Party from './Party';

const url = 'https://pokeapi.co/api/v2'

function App() {

  const [pocketMons, setPocketMons] = useState([])
  const [fetchedMons, setFetechedMons] = useState([])

  useEffect(() => { fetch(`${url}/pokemon/?limit=906`).then(r => r.json()).then(data => setPocketMons(data.results)) }, [])

  const randomMon = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const renderMons = i => {
    setFetechedMons([]);
    for (i = 0; i < 3; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pocketMons[randomMon(1, 906)].name}`)
        .then(r => r.json())
        .then(data => setFetechedMons(fetchedMons => [...fetchedMons, data]))
    }
  }
  // const dexEntry = ()


  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Switch>
        <Route exact path="/">
          <LandingPage handleClick={renderMons} randomMon={randomMon} />
        </Route>
        <Route exact path="/grass">
          <TallGrass wildPokemon={fetchedMons} />
        </Route>
        <Route exact path="/pokedex">
          <PokeDex />
        </Route>
        <Route exact path="/party">
          <Party />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
