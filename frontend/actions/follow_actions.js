import * as FollowApiUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  }
}

export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
const removeFollow = user => {
  return {
    type: REMOVE_FOLLOW,
    user
  }
}

export const createFollow = id => dispatch => (
  FollowApiUtil.createFollow(id)
    .then(follow => dispatch(receiveFollow(follow)))
)

export const deleteFollow = id => dispatch => (
  FollowApiUtil.deleteFollow(id)
    .then(user => dispatch(removeFollow(user)))
)