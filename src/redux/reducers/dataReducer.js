import {
  SET_EVENTS,
  LIKE_EVENT,
  UNLIKE_EVENT,
  LOADING_DATA,
  SET_EVENT,
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
    //Purpose of these reducers are to update the like count on events. This function is not necessary for this application.
    //Need to add the panelId to the likes array in redux store.
    //might want to condsider updating a like field on each panel with the userId instead. This would allow ease of locating and deleting like.
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
    default:
      return state;
  }
}
