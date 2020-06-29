import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [ peopleState, setPeopleState ] = useState({
    people: [
      { id: 'asfa1', name: "Nick", age: 29 },
      { id: 'vasdf1', name: "Manu", age: 29 },
      { id: 'asdf1', name: "Stephanie", age: 26 },
    ],
    showPeople: false
  });

  // const [otherState, setOtherState] = useState('some other value');

  const nameChangedHandler = (event) => {
    setPeopleState({
      people: [
        { name: "Nick", age: 29 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 },
      ]
    });
  }

  const deletePersonHandler = (personIndex) => {
    // const people = peopleState.people.slice();
    const people = [...peopleState.people];
    people.splice(personIndex, 1);
    setPeopleState({people: people, showPeople: peopleState.showPeople});
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
        {peopleState.people.map((person, index) => {
          return <Person
            click={deletePersonHandler}
            name={person.name}
            age={person.age}
            key={person.id} />
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <button
        click={deletePersonHandler}
        style={style}
        onClick={togglePeopleHandler}>Toggle People</button>
      {people}
    </div>
  );
};

export default App;