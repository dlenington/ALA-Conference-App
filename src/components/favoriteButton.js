import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

//Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//Redux Stuff
import { connect } from "react-redux";
import { likeEvent, unlikeEvent } from "../redux/actions/dataActions";

class FavoriteButton extends Component {
  state = {};
  likedEvent = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.panelId === this.props.panelId)
    )
      return true;
    else return false;
  };

  likeEvent = () => {
    this.props.likeEvent(this.props.panelId);
  };
  unlikeEvent = () => {
    this.props.unlikeEvent(this.props.panelId);
  };

  render() {
    //TODO: implement SET_AUTHENTICATED action
    //TODO: check why login on website does not properly "set user" in state
    const { authenticated } = this.props.user;

    const favoriteButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Favorite">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedEvent() ? (
      <MyButton tip="Undo like" onClick={this.unlikeEvent}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeEvent}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );

    return favoriteButton;
  }
}

FavoriteButton.propTypes = {
  user: PropTypes.object.isRequired,
  panelId: PropTypes.string.isRequired,
  likeEvent: PropTypes.func.isRequired,
  unlikeEvent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  likeEvent,
  unlikeEvent,
};

export default connect(mapStateToProps, mapActionsToProps)(FavoriteButton);
