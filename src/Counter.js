import React from "react";
import { connect } from "react-redux";
import { increment, decrement, resetIt } from "./actions";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.resetIt();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
          <button onClick={this.reset}>R</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.counterReducer.count };
}

const mapDispatchToProps = {
  increment,
  decrement,
  resetIt
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
