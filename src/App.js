import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import eventDetails from "./components/eventDetails";
import "./App.css";

const theme = createMuiTheme(themeFile);

class App extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/events/:eventId" component={eventDetails} />
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
