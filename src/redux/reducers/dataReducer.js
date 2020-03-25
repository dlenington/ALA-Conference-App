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
  }
}
