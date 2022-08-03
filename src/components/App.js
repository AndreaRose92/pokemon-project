
import {Route, Switch} from 'react-router-dom'
import { useEffect, useState } from 'react';
// import NavBar from './NavBar'
import LandingPage from './LandingPage'
import TallGrass from './TallGrass';

const url = 'https://pokeapi.co/api/v2'

function App() {

  const [pocketMons, setPocketMons] = useState([])
  const [fetchedMons, setFetechedMons] = useState([])

  useEffect(()=>{fetch(`${url}/pokemon/?limit=1154`).then(r=>r.json()).then(data=>setPocketMons(data.results))}, [])
  
  const randomMon = (min, max) => Math.floor(Math.random()*(max-min+1)+min)
  const renderMons = i => {
    setFetechedMons([]);
    for (i=0; i<3; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pocketMons[randomMon(1, 906)].name}`)
      .then(r=>r.json())
      .then(data=>setFetechedMons(fetchedMons=>[...fetchedMons, data]))
  }
}
  

  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Switch>
        <Route exact path="/">
          <LandingPage handleClick={renderMons} randomMon={randomMon} />
        </Route>
        <Route exact path="/team">
          <TallGrass wildPokemon={fetchedMons}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
