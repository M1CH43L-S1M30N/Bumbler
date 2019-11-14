import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from './entities_reducer';
import errorsReducer from "./errors_reducer";
import PostsReducer from "./posts_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  posts: PostsReducer,
  errors: errorsReducer
});

export default rootReducer;