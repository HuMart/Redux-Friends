import { GET_FRIENDS, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE } from '../actions';

const initialState = {
    friends: [],
    error: null,
    fetching: false
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FRIENDS:
      return {
        ...state,
        fetching: true
      }
    }
}
export default reducer;