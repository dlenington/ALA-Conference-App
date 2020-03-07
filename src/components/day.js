import React, { Component, Fragment } from "react";
import axios from "axios";
import Event from "./event";

//Mui Stuff
import Grid from "@material-ui/core/Grid";

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
    let eventsMarkup = events.map(event => (
      <Event key={event.eventId} event={event} />
    ));
    return (
      <Grid container spacing={2}>
        <Grid item sm={12} xs={12}>
          {eventsMarkup}
        </Grid>
      </Grid>
    );
  }
}

export default Day;
