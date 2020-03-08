import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MyButton from "./myButton";

//Mui stuff
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//Icons
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  ...theme.spreadThis,
  dialogContent: {
    padding: 20
  },
  closeButton: {
    position: "absolute",
    left: "90%"
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  }
});

class EventDialog extends Component {
  state = {
    open: false,
    oldPath: "",
    newPath: ""
  };

  componentDidMount() {
    if (this.props.openDialog) {
      this.handleOpen();
    }
  }
  handleOpen = () => {
    let oldPath = window.location.pathname;
    const { eventId } = this.props;
    const newPath = `/events/${eventId}`;

    this.setState({ open: true, oldPath, newPath });
    this.props.getEvent(this.props.eventId);
  };
  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      event: { section, title, venue, chair }
    } = this.props;

    const dialogMarkup = (
      <Grid container spacing={2}>
        <Grid item sm={7}>
          <Typography color="primary" variant="h5">
            {section}
          </Typography>
          <Typography color="primary" variant="h5">
            {title}
          </Typography>
          <Typography color="primary" variant="h5">
            {venue}
          </Typography>
          <Typography color="primary" variant="h5">
            {chair}
          </Typography>
        </Grid>
        <hr className={classes.invisibleSeparator} />
        //render the presenters as comments
        {/* {events.map => (event => { <Typography variant="body1">{event.presenter</Typography>} */}
      </Grid>
    );
    return (
      <Fragment>
        <MyButton
          onClick={this.handleOpen}
          tip="Expand Event"
          tipClassName={classes.expandButton}
        >
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
          <UnfoldMore color="primary" />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogContent className={classes.dialogContent}>
            {dialogMarkup}
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(EventDialog);
