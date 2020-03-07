import React, { Component } from "react";

//Mui Stuff
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Event extends Component {
  state = {};
  render() {
    const { event: {
      title,
      body,
      time,
      location,
      postId
    }}
    return (
      <Card>
        <CardContent>
          <Typography>{title}</Typography>
          <Typography>{body}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Event;
