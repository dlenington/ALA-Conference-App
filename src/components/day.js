import React, { Component, Fragment } from "react";
import axios from "axios";
import Event from "./event";
class Day extends Component {
  state = {
    events: null
  };
  componentDidMount() {
    axios.get("/events").then(res => {
      this.setState({
        events: res.data.events
      });
    });
  }
  render() {
    const { events } = this.state;
    return events.map(event => {
      <Event key={event.eventId} event={event} />;
    });
  }
}

export default Day;
