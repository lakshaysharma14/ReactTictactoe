import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tictactoe from "./Tictactoe.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tictactoe />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
