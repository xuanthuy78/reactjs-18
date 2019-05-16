import React from 'react';
import logo from './logo.svg';
import './App.css';
import HoverOpacity from './components/HoverOpacity';
import AwesomeImage from './components/AwesomeImage';

import withHoverOpacity from "./components/withHoverOpacity";

const HoverOpacityAwesomeImage = withHoverOpacity(AwesomeImage,0.5);

function App() {
  return (
    <div className="App">
      <h1>Kenh</h1>
      {/* <HoverOpacity>
        <AwesomeImage src="https://images.pexels.com/photos/2249962/pexels-photo-2249962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      </HoverOpacity> */}

      <HoverOpacityAwesomeImage src="https://images.pexels.com/photos/2249962/pexels-photo-2249962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </div>
  );
}

export default App;
