import { RECEIVE_POST, RECEIVE_POSTS, REMOVE_POST } from "../actions/post_actions";

const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
    case RECEIVE_POST:
      return Object.assign({}, state, { [action.post.id]: action.post })
    case REMOVE_POST:
      const newState = Object.assign({}, state);
      delete newState[action.id]
      return newState;
    default:
      return state;
  }
}

export default PostsReducer;