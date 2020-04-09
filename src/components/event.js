import React, { Component } from "react";
import EventDialog from "./eventDialog";

//Mui Stuff
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: { position: "relative", display: "flex", marginBottom: 20 },
  content: {
    padding: 25,
    objectFit: "cover",
  },
};

class Event extends Component {
  state = {};
  render() {
    const {
      classes,
      event: { title, time, eventId },
    } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {time}
          </Typography>
        </CardContent>
        <EventDialog eventId={eventId} openDialog={this.props.openDialog} />
      </Card>
    );
  }
}

export default withStyles(styles)(Event);
