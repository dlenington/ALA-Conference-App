import React, { Component, Fragment } from "react";
import axios from "axios";
import Event from "./event";
import PropTypes from "prop-types";

//Redux stuff
import { getEvents } from "../redux/actions/dataActions";
import { connect } from "react-redux";

//Mui Stuff
import Grid from "@material-ui/core/Grid";

class Day extends Component {
  componentDidMount() {
    const { day } = this.props;
    this.props.getEvents(day);
  }
  render() {
    const { events } = this.props.data;

    let eventsMarkup = events.map((event) => (
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

Day.propTypes = {
  getEvents: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getEvents })(Day);
