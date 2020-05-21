import React, { Component } from "react";

//Redux stuff
import { connect } from "react-redux";

//MUI Stuff
import Grid from "@material-ui/core/Grid";

class Favorites extends Component {
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

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

export default connect(mapStateToProps, { getEvents })(Day);
