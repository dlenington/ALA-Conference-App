import React, { Component } from "react";

//Mui Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Event extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardMedia />
        <CardContent>
          <Typography>Presenter</Typography>
          <Typography variant="body2" color="textSecondary">
            Time
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Event;
