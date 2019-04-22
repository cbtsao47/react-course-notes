import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Coinflipper from "./components/Coinflipper";
import Colorbox from "./components/Colorbox";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Coinflipper /> */}
        <Colorbox />
      </div>
    );
  }
}

export default App;
