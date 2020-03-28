const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_AUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_EVENT:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            eventId: action.payload.eventId
          }
        ]
      };
    case UNLIKE_EVENT:
      return {
        ...state,
        likes: state.likes.filter(
          like => like.eventId !== action.payload.postId
        )
      };

    default:
      return state;
  }
}
