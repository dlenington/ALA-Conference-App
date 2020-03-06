import React, { Component, Fragment } from "react";
import axios from "axios";
import Event from "./event";
class Day extends Component {
  componentDidMount() {}
  state = {};
  render() {
    return (
      <Fragment>
        <Event />
        <Event />
        <Event />
      </Fragment>
    );
  }
}

export default Day;
