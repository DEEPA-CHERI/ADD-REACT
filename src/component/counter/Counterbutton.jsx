import React, { Component } from 'react'
import PropTypes from 'prop-types';
 class Counterbutton extends Component {
  render = () => {
    return (
      <div>
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  };

  increment= () =>{
    this.props.incrementMethod(this.props.by);
  }
  decrement = () => {
    this.props.decrementMethod(this.props.by);
  }
}
// default props values React ES6
Counterbutton.defaultProps = {
    by: 1
  };
  //React Es6 constraints on prop types
Counterbutton.propTypes = {
    by : PropTypes.number
  }
  export default Counterbutton;