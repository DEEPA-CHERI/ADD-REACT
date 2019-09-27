import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/counter/Counter";
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
