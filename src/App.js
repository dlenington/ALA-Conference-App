import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import home from "./pages/home";
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
            {/* <AuthRoute exact path="/login" component={login} /> */}
            {/* <AuthRoute exact path="/signup" component={signup} /> */}
          </Switch>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
