const initialState = {
  events: [],
  event: {},
  loading: false
};

export default function(state = initial, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_EVENTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload
      };
    case LIKE_EVENT:
    case UNLIKE_EVENT:
      let index = state.events.findIndex(
        event => event.eventId === action.payload.eventId
      );
      state.events[index] = action.payload;
      if (state.post.postId === action.payload.postId) {
        state.event.likeCount = action.payload.likeCount;
      }
  }
}
