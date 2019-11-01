import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
