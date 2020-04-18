import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Event from "./event";
import Home from "../pages/home";

//Mui Stuff
import Grid from "@material-ui/core/Grid";

//Redux Stuff
import { connect } from "react-redux";
import { getEvent } from "../redux/actions/dataActions";

class EventDetails extends Component {
  state = { event: null, eventIdParam: null };

  componentDidMount() {
    const eventId = this.props.match.params.eventId;
    if (eventId) this.setState({ eventIdParam: eventId });

    this.props.getEvent(eventId);
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

EventDetails.propTypes = {
  getEvent: PropTypes.func.isRequired,
};

// const mapStateToProps = (state) => ({
//   event: state.data.event
// });

const mapActionsToProps = {
  getEvent,
};

export default connect(mapActionsToProps)(EventDetails);
