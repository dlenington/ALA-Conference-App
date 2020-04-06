import {
  SET_EVENTS,
  LOADING_DATA,
  LIKE_EVENT,
  UNLIKE_EVENT,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_EVENT,
  STOP_LOADING_UI,
} from "../types";
import axios from "axios";

export const getEvents = (day) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/events/${day}`)
    .then((res) => {
      dispatch({
        type: SET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        //clear out posts
        type: SET_POSTS,
        payload: [],
      });
    });
};

export const getEvent = (eventId) => (dispatch) => {
  dispatch({
    type: LOADING_UI,
  });
  axios
    .get(`/events/${eventId}`)
    .then((res) => {
      dispatch({
        type: SET_EVENT,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

export const likeEvent = (eventId) => (dispatch) => {
  axios
    .get(`/events/${eventId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const unlikePost = (postId) => (dispatch) => {
  axios
    .get(`/events/${eventId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
