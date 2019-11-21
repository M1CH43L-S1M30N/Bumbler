import { RECEIVE_LIKE, REMOVE_LIKE} from "../actions/like_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions"

const LikesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LIKE:
      return Object.assign({}, state, action.payload.likes)
    case REMOVE_LIKE:
      const newState = Object.assign({}, state);
      // delete newState[action.id]
      return newState;
    case RECEIVE_POST:
      return Object.assign({}, state, action.payload.postLikes)
    case RECEIVE_POSTS:
      return Object.assign({}, state, action.payload.postLikes)
    default:
      return state;
  }
}

export default LikesReducer;