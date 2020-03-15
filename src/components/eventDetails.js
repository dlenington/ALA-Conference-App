import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Event from "./event";
import Home from "../pages/home";

//Mui Stuff
import Grid from "@material-ui/core/Grid";

class eventDetails extends Component {
  state = { event: null, eventIdParam: null };

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    if (eventId) this.setState({ eventIdParam: eventId });

    axios.get(`/event/${eventId}`).then(res => {
      this.setState({
        event: res.data
      });
    });
  }

  render() {
    const { event, eventIdParam } = this.state;

    const eventMarkup =
      event === null ? (
        <p>Event not found</p>
      ) : !eventIdParam ? (
        <Home />
      ) : (
        <Event event={event} openDialog />
      );

    return <Fragment>{eventMarkup}</Fragment>;
  }
}

export default eventDetails;
