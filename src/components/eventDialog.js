import React, { Component, Fragment } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import MyButton from "./myButton";

//Mui stuff
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


//Icons
import UnfoldMore from "@material-ui/icons/UnfoldMore"
import CloseIcon from "@material-ui/icons/Close";

class EventDialog extends Component {
    state = {  }
    render() { 
        const {classes,
            event: {
                section,
                title,
                body:
            }} = this.props;
        return ( 
            <Fragment>
                <MyButton>
                {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
          <UnfoldMore color="primary"/>
                </MyButton>
                <Dialog open={this.state.open} onClose={this.handleClose}
                fullWidth
                maxWidth="sm"
                >
                    <MyButton
                    tip="Close"
                    onClick={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                    >
                        <CloseIcon/>
                    </MyButton>
                    <DialogContent className={classes.dialogContent}>
                        {dialogMarkup}
                    </DialogContent>
                </Dialog>
            </Fragment>
         );
    }
}
 
export default (withStyles)(styles)(EventDialog);