import React from 'react';
import logo from './logo.svg';
import './App.css';
import RandomNumber from './components/RandomNumber'
import { NumberProvider } from "./contexts/NumberContext";

function App() {
  return (
    <div className="App">
      <NumberProvider>
        <h1>kenh</h1>
          <RandomNumber/>
      </NumberProvider>
    </div>
  );
}

export default App;
