import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import NavBar from "./components/layout/NavBar"
import Dashboard from "./components/layout/Dashboard"
import PokemonDetail from './components/pokemon/PokemonDetail'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonNumber" component={PokemonDetail} /> 
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
