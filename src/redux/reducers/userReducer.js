import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_EVENT,
  UNLIKE_EVENT,
  SET_ADMIN,
} from "../types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ADMIN:
      return {
        ...state,
        admin: true,
      };
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case LIKE_EVENT:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            panelId: action.payload.panelId,
          },
        ],
      };
    case UNLIKE_EVENT:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.panelId !== action.payload.panelId
        ),
      };

    default:
      return state;
  }
}
