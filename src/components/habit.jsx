import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  }

  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    console.log(name, count);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>

        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>

        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    )
  }
}

export default Habit
