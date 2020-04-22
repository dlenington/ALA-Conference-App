import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Icons
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

//Redux Stuff
import { connect } from "react-redux";
import { likeEvent, unlikeEvent } from "../../redux/actions/dataActions";

class FavoriteButton extends Component {
  state = {};
  render() {
    const { authenticated } = this.props.user;
    const favoriteButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Favorite">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedPainting() ? (
      <MyButton tip="Undo like" onClick={this.unlikeEvent}>
        <FavoriteBorder color="primary" />
      </MyButton>
    ) : (
      <MyButton itp="Like" onClick={this.likeEvent}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );

    return favoriteButton;
  }
}

FavoriteButton.propTypes = {
  user: PropTypes.object.isRequired,
  eventId: PropTypes.string.isRequired,
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
