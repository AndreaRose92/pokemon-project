
import {Route, Switch} from 'react-router-dom'
// import { useEffect, useState } from 'react';
// import NavBar from './NavBar'
import LandingPage from './LandingPage'

function App() {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
