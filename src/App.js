import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberProvider from './components/NumberProvider';
import NumberContext from './contexts/NumberContext';


function App() {
  return (
    <div className="App">
      <NumberProvider>
        <h1>kenh</h1>
        <NumberContext.Consumer>
        {({ number, updateNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={updateNumber}>Update Number</button>
            </div>
          )}
        </NumberContext.Consumer>
      </NumberProvider>
  
    </div>
  );
}

export default App;
