import React, { Component, Fragment } from "react";
import Event from "./event";
class Day extends Component {
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
