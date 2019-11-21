import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.payload.posts
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.payload.post.id]: action.payload.post })
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    case RECEIVE_LIKE:
      return Object.assign({}, state, { [action.payload.post.id]: action.payload.post })
    case REMOVE_LIKE:
      return Object.assign({}, state, { [action.payload.post.id]: action.payload.post })
    default:
      return state;
  }
}

export default PostsReducer;