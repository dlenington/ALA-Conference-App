import {
  SET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  CLEAR_ERRORS,
  SET_EVENT,
} from "../types";
import axios from "axios";

export const getEvents = (day) => (dispatch) => {
  // dispatch({ type: LOADING_DATA });
  axios
    .get(`/events/${day}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SET_EVENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        //clear out posts
        type: SET_EVENTS,
        payload: [],
      });
    });
};

export const getEvent = (eventId) => (dispatch) => {
  // dispatch({
  //   type: LOADING_UI,
  // });
  axios
    .get(`/event/${eventId}`)
    .then((res) => {
      console.log(`getEvent ${res}`);
      dispatch({
        type: SET_EVENT,
        payload: res.data,
      });
      // dispatch({ type: STOP_LOADING_UI });
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

export const unlikePost = (eventId) => (dispatch) => {
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
