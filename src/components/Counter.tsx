import * as React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1),
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1),
    });
  };

  render() {
    return (
      <div className="counter">
        <h2 className="h2">{this.state.count}</h2>
        <button type="button" className="button" onClick={this.increment}>Increment</button>
        <button type="button" className="button" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
