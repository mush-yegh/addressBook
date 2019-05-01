import React, { Component } from "react";
import Header from "./components/header";
import Content from "./components/content";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
