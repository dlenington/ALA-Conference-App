import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

//Mui stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  ...theme.spreadThis,
  details: {
    marginLeft: 20
  }
});

class PanelDetails extends Component {
  state = { panelists: [] };

  componentDidMount() {
    console.log(`panelDetails: ${this.props.panelId}`);
    axios
      .get(`/panel/${this.props.panelId}`)
      .then(res => {
        console.log(res.data);
        this.setState({ panelists: res.data.panelists });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { panelists } = this.state;
    const { classes } = this.props;
    return (
      <Grid container>
        {panelists.map(panelist => {
          const { order, name, details, panelistId } = panelist;
          return (
            <Fragment key={panelistId}>
              <Grid item sm={12}>
                <Grid item sm={12}>
                  <Typography variant="h5" color="primary">
                    {order}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {name}
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography color="textSecondary" variant="body2">
                    {details}
                  </Typography>
                </Grid>
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(PanelDetails);
