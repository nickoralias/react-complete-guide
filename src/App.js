import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [ peopleState, setPeopleState ] = useState({
    people: [
      { name: "Nick", age: 29 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(peopleState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.people[0].name = 'Nicholas';
    setPeopleState({
      people: [
        { name: "Nicholas", age: 29 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>
        My Hobbies: Racing
      </Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age} />
    </div>
  );
};

export default App;