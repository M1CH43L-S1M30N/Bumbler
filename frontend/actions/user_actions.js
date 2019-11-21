import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const RECEIVE_USERS = "RECEIVE_USERS";
const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const requestUser = id => dispatch => (
  UserApiUtil.fetchUser(id)
    .then(user => dispatch(receiveUser(user)))
)

export const requestUsers = () => dispatch => (
  UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)))
)