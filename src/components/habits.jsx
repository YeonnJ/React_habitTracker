import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [
      { name: 'Reading', count: 0 },
      { name: 'Exercising', count: 0 },
      { name: 'Coding', count: 0 },
    ],
  }
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit habit={habit}/> // 자식
        ))}
      </ul>
    )
  }
}

export default Habits
