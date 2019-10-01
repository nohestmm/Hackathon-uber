import React from 'react';
import Game from './views/Game'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
        <Switch> 
        <Route exact path="/" component= {Game}/>
        </Switch>
       </Router>
  );
}

export default App;
