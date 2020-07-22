import React, { useState } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

  const nameChangedHandler = (event, id) => {
    const personIndex = peopleState.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...peopleState.people[personIndex]
    };

    // const person = Object.assign({}, peopleState.people[personIndex]);

    person.name = event.target.value;

    const people = [...peopleState.people];
    people[personIndex] = person;

    setPeopleState({
      people: people,
      showPeople: peopleState.showPeople
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

  let people = null;
  let btnClasses = '';

  if (peopleState.showPeople) {
    people = (
      <div>
        {peopleState.people.map((person, index) => {
          return <ErrorBoundary key={person.id}>
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => nameChangedHandler(event, person.id)} />
          </ErrorBoundary>
        })}
      </div>
    );

    btnClasses = classes.Red;
  }

  const assignedClasses = []
  if (peopleState.people.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (peopleState.people.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.App}>
      <h1>Hi, this is a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={btnClasses} onClick={togglePeopleHandler}>
        Toggle People
      </button>
      {people}
    </div>
  );
};

export default App;