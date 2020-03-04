import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import Event from "./components/event";
import "./App.css";

const theme = createMuiTheme(themeFile);

class App extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main class="container">
          <Event />
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
