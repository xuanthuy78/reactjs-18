import React from 'react';
// import ReactDOM from "react-dom";
// import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingPage';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AppLayout from './components/AppLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import Kenh from './components/Kenh';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Protected</h1>
        <Link to="/kenh">Kenh</Link>
      <Switch>
        <Route exact path="/" component= {LandingPage} />
        <ProtectedRoute exact path="/app" component={AppLayout} />
        <ProtectedRoute exact path="/kenh" component={Kenh} />
        <Route path="" component={() => "404 NOT FOUND"} />
      </Switch>  
      </div>
    </Router>
  );
}

export default App;