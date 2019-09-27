import React, { Component } from "react";
import "./Counter.css";
import Counterbutton from "./Counterbutton";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  render = () => {
    return (
      <div>
        <Counterbutton
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <Counterbutton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <Counterbutton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  };

  reset(){
    this.setState((prevState)=>{return{counter:0}} );
  }
  increment(by) {
    this.setState((prevState )=> {
      return { counter: prevState.counter + by };
    });
  }
  decrement(by) {
    this.setState((prevState )=> {
        return { counter: prevState.counter - by };
      });
  }
}

export default Counter;
