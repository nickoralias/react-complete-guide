import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <Person name="Nick" age="29"/>
      <Person name="Manu" age="29">My Hobbies: Racing</Person>
      <Person name="Stephanie" age="26"/>
    </div>
  );
}

export default App;
