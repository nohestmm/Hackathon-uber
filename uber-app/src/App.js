import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
        <Switch> 
        <Route exact path="/" component= {Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
       </Switch>
       </Router>
  );
}

export default App;
