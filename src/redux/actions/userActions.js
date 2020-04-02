import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED
} from "../types";

import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.post("/login", userData).then(res => {
    setAuthorizationHeader(res.data.token);
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  });
};
