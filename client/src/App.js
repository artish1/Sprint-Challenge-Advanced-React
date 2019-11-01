import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PersonContainer from "./components/PersonContainer/PersonContainer";
import DarkMode from "./components/DarkMode/DarkMode";
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({ people: res.data });
      })
      .catch(err => {
        console.log(err.message);
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
