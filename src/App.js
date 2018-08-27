import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import Body from "./components/body";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  headerStyles = {
    align: "left"
  };

  render() {
    return (
      <div className="App">
        <ToastContainer />
        <PageHeader className="main-header">Hetero-DB</PageHeader>
        <hr />
        <div className="main-body">
          <Body />
        </div>
      </div>
    );
  }
}

export default App;
