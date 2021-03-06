import {
  SET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  CLEAR_ERRORS,
  SET_EVENT,
  SET_LIKES,
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

//This function calls the 'like' http endpoint, which adds the panel to the likes collection in firebase alongside the userId.
export const likeEvent = (panelId) => (dispatch) => {
  axios
    .get(`/panel/${panelId}/like`)
    .then((res) => {
      //Need to import function below, or create new function here that will refresh the likes from the database
      // dispatch(getUserData());
      dispatch({
        type: LIKE_EVENT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const unlikeEvent = (panelId) => (dispatch) => {
  axios
    .get(`/panel/${panelId}/unlike`)
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

// export const getLikes = () => (dispatch) => {
//   axios
//     .get("/likes")
//     .then((res) => {
//       dispatch({ type: SET_LIKES });
//     })
//     .catch((err) => console.log(err));
// };
