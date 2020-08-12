import React, { useEffect, useRef } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  console.log('[Cockpit.js]');
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.peopleLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
