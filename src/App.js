import React, { useState } from "react";
import styled from 'styled-components';
import "./App.css";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => props.alt? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
  }
`

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

  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let people = null;

  if (peopleState.showPeople) {
    people = (
      <div>
        {peopleState.people.map((person, index) => {
          return <Person
            click={() => deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => nameChangedHandler(event, person.id)} />
        })}
      </div>
    );

    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  }

  let classes = []
  if (peopleState.people.length <= 2) {
    classes.push('red'); // classes = ['red']
  }
  if (peopleState.people.length <= 1) {
    classes.push('bold'); // classes = ['red', 'bold']
  }

  return (
    <div className="App">
      <h1>Hi, this is a React App</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <StyledButton alt={peopleState.showPeople} onClick={togglePeopleHandler}>
        Toggle People
      </StyledButton>
      {people}
    </div>
  );
};

export default App;