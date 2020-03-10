import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

//Mui stuff
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";

//Icons
import HomeIcon from "@material-ui/icons/Home";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <Fragment>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/">
              Schedule
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </Fragment>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
