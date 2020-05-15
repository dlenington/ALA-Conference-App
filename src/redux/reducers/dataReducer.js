import {
  SET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  LOADING_DATA,
  SET_EVENT,
  SET_LIKES,
} from "../types";

const initialState = {
  events: [],
  event: { panels: [] },
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case SET_EVENT:
      return {
        ...state,
        event: action.payload,
      };

    //Need to add the panelId to the likes array for the user in redux store.

    //Alternatively, when the like or unlike event is called, we can call SET_USER to reset the likes array for the user.
    case LIKE_EVENT:
    case UNLIKE_EVENT:
      // let index = state.events.findIndex(
      //   (event) => event.eventId === action.payload.eventId
      // );
      // state.events[index] = action.payload;
      // if (state.event.eventId === action.payload.eventId) {
      //   state.event.likeCount = action.payload.likeCount;
      // }

      state.user.likes.push(action.payload);

      return {
        ...state,
      };
    case SET_LIKES:
      return {
      state.user.likes[...action.payload.likes]
      };
    default:
      return state;
  }
}
