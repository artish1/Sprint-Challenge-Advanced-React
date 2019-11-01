import React from "react";
import Person from "../Person/Person";
import "./PersonContainer.css";
const PersonContainer = ({ people }) => {
  return (
    <div className="people">
      {people.map((person, key) => (
        <Person {...person} key={key} />
      ))}
    </div>
  );
};

export default PersonContainer;
