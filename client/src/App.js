import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PersonContainer from "./components/PersonContainer/PersonContainer";
import DarkMode from "./components/DarkMode/DarkMode";

export const getData = cb => {
  axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      cb(res.data, true);
    })
    .catch(err => {
      console.log(err.message);
      cb(err.message, false);
    });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    getData((data, status) => {
      if (status) this.setState({ people: data });
    });
  }

  render() {
    return (
      <div className="App">
        <DarkMode />
        <PersonContainer people={this.state.people} />
      </div>
    );
  }
}

export default App;
