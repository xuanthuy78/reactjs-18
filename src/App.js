import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card">
              <div className="card-header bg-primary">Color Picker</div>
              <div className="card-body">Content</div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="card">
              <div className="card-header bg-warning">Size: 15px</div>
              <div className="card-body">Content</div>
            </div>
            <button type="button" className="btn btn-primary mt-2">
              Reset
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <p>Color: red - Fontsize: 15px</p>
            <div id="content">Nội dung setting</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
