import React, { Component } from 'react';


//Redux Stuff

class FavoriteButton extends Component {
    state = {  }
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
        )
        
        return (  );
    }
}
 
export default FavoriteButton;