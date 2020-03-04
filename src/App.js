import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

const theme = createMuiTheme();

class App extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
      </MuiThemeProvider>
    );
  }
}

export default App;
