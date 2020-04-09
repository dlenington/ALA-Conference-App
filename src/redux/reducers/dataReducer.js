import {
  SET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  LOADING_DATA,
  SET_EVENT,
} from "../types";

const initialState = {
  events: [],
  event: {},
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
        panels: action.payload,
      };
    case LIKE_EVENT:
    case UNLIKE_EVENT:
      let index = state.events.findIndex(
        (event) => event.eventId === action.payload.eventId
      );
      state.events[index] = action.payload;
      if (state.event.eventId === action.payload.eventId) {
        state.event.likeCount = action.payload.likeCount;
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
