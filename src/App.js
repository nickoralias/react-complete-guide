import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { name: 'Nick', age: 29 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, this is a React App</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age}/>
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age}/>
      </div>
    );
  }
}

export default App;
