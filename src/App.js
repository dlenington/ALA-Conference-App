import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeFile from "./util/theme";
import { createMuiTheme } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import EventDetails from "./components/eventDetails";

import "./App.css";
import Favorites from "./pages/favorites";

const theme = createMuiTheme(themeFile);

class App extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <NavBar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
              <Route exact path="/events/:eventId" component={EventDetails} />
              <Route exact path="/favorites" component={Favorites} />
            </Switch>
          </main>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
