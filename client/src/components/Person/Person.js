import React from "react";
import "./Person.css";
const Person = ({ country, name, searches }) => {
  return (
    <div className="person">
      <h2>{name}</h2>
      <p>{country}</p>
      <p className="person-searches">Searches: {searches}</p>
    </div>
  );
};

export default Person;
