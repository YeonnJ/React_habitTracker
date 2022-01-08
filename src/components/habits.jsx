import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { id:1, name: 'Reading', count: 0 },
      { id:2, name: 'Exercising', count: 0 },
      { id:3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {};

  handleDecrement = (habit) => {};

  handleDelete = (habit) => {};

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit 
          key={habit.id} 
          habit={habit} 
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          /> // 자식
        ))};
      </ul>
    );
  }
}

export default Habits;
