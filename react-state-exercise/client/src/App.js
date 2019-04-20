import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coinflipper from "./components/Coinflipper";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Coinflipper />
      </div>
    );
  }
}

export default App;
