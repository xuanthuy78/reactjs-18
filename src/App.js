import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Product  from './pages/Products';
import TopMenu from './components/TopMenu';

import CartProvider from "./contexts/Cart";

function Index() {
  return <h2>Home</h2>;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/product/" component={Product} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
