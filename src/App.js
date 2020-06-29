import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [ peopleState, setPeopleState ] = useState({
    people: [
      { name: "Nick", age: 29 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    showPeople: false
  });

  // const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.people[0].name = 'Nicholas';
    setPeopleState({
      people: [
        { name: newName, age: 29 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPeopleState({
      people: [
        { name: "Nick", age: 29 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });
  }

  const togglePeopleHandler = () => {
    const doesShow = peopleState.showPeople;
    setPeopleState({
      people: peopleState.people,
      showPeople: !doesShow
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let people = null;

  if (peopleState.showPeople) {
    people = (
      <div>
        {peopleState.people.map(person => {
          return <Person
            name={person.name}
            age={person.age} />
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <button
        style={style}
        onClick={togglePeopleHandler}>Toggle People</button>
      {people}
    </div>
  );
};

export default App;