import React, { Component } from "react";
import PropTypes from "prop-types";
import PanelDetails from "./panelDetails";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//Redux
import { connect } from "react-redux";

class Panels extends Component {
  state = {};
  render() {
    const { panels } = this.props;

    const dialogMarkup = panels.map((panel) => (
      <Fragment>
        <Grid container spacing={2}>
          <Grid item sm={7}>
            <Typography color="primary" variant="h5">
              {panel.section}
            </Typography>
            <Typography color="textSecondary" variant="h6">
              {panel.title}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {panel.venue}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Chair: {panel.chair}
            </Typography>
          </Grid>
        </Grid>
        <hr className={classes.invisibleSeparator} />
        <PanelDetails panelId={panel.panelId} />
        <hr className={classes.invisibleSeparator} />
      </Fragment>
    ));
    return <div>{dialogMarkup}</div>;
  }
}

export default Panels;
