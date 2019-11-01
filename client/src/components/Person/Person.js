import React from "react";

const Person = ({ country, name, searches }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{country}</p>
      <p className="person-searches">{searches}</p>
    </div>
  );
};

export default Person;
