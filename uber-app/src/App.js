import React from 'react';
import Game from './views/Game'
import WinTheme from './views/WinTheme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from './views/Profile';
import QA from './views/QA';

const App = () => {
  return (
    <Router>
        <Switch> 
        <Route exact path="/profile" component= {Profile}/>
        <Route exact path="/qa" component= {QA}/>
        <Route exact path="/" component= {Game}/>
        <Route exact path="/win" component={WinTheme} ></Route>
        </Switch>
       </Router>
  );
}

export default App;
