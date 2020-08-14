import React, { useState } from "react";

import classes from "./App.module.css";
import People from "../components/People/People";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import AuthContext from "../context/auth-context";

const App = (props) => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { id: "asfa1", name: "Nick", age: 29 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf1", name: "Stephanie", age: 26 },
    ],
    showPeople: false,
    authenticated: false,
  });

  // const [otherState, setOtherState] = useState('some other value');

  const nameChangedHandler = (event, id) => {
    const personIndex = peopleState.people.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...peopleState.people[personIndex],
    };

    // const person = Object.assign({}, peopleState.people[personIndex]);

    person.name = event.target.value;

    const people = [...peopleState.people];
    people[personIndex] = person;

    setPeopleState({
      people: people,
      showPeople: peopleState.showPeople,
    });
  };

  const deletePersonHandler = (personIndex) => {
    // const people = peopleState.people.slice();
    const people = [...peopleState.people];
    people.splice(personIndex, 1);
    setPeopleState({ people: people, showPeople: peopleState.showPeople });
  };

  const togglePeopleHandler = () => {
    const doesShow = peopleState.showPeople;
    setPeopleState({
      people: peopleState.people,
      showPeople: !doesShow,
    });
  };

  let people = null;

  if (peopleState.showPeople) {
    people = (
      <People
        people={peopleState.people}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
        isAuthenticated={peopleState.authenticated}
      />
    );
  }

  const loginHandler = () => {
    setPeopleState({ ...peopleState, authenticated: true });
  };

  return (
    <Aux>
      <AuthContext.Provider
        value={{
          authenticated: peopleState.authenticated,
          login: loginHandler,
        }}
      >
        <Cockpit
          title={props.appTitle}
          showPeople={peopleState.showPeople}
          peopleLength={peopleState.people.length}
          clicked={togglePeopleHandler}
        />
        {people}
      </AuthContext.Provider>
    </Aux>
  );
};

export default withClass(App, classes.App);
