import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import List1 from './components/List1';
import Counter from './components/Counter';


const data = ['a', 'b', 'c'];
function App() {
  return (
    <div className="App">
      {/* <Counter render = {value => <h1>{value}</h1>} /> */}
      {/* <Counter>
        {value => <h1>{value}</h1>}
      </Counter> */}
      <Counter>
        {(state) => (
          <div>
            <h1>Count: {state.count}</h1> 
          </div>
        )}
        {/* { state =>  
          <React.Fragment>
            <div>
              <h1>Count: {state.count}</h1> 
            </div>
          </React.Fragment>
        } */}
      </Counter>
      {/* <Counter>{({ count }) => <h1>{count}</h1>}</Counter> */}
      <List1 data={data} render={(item, index) => <div key = {index}>{item}</div>} className="data"/>
      <List1 data={data} render={(item, index) => <div key = {index}> + {item}</div>} />
      <List1 data={data} render={(item, index) => <div key = {index}> + {item}</div>} />
    </div>
  );
}

export default App;
