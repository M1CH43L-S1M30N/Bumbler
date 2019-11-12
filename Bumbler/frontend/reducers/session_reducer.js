import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions'

const _nullSession = {
  id: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUserId = action.user.id;
      return Object.assign({}, { id: currentUserId });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};