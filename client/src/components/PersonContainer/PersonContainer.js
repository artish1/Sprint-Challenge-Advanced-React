import React from "react";
import Person from "../Person/Person";

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
