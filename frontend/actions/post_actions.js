import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
const receivePosts = payload => {
  return {
    type: RECEIVE_POSTS,
    payload
  }
}

export const RECEIVE_POST = "RECEIVE_POST";
const receivePost = payload => {
  return {
    type: RECEIVE_POST,
    payload
  }
}

export const REMOVE_POST = "REMOVE_POST";
const removePost = id => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const requestPosts = () => dispatch => (
  PostApiUtil.fetchAllPosts()
    .then(payload => dispatch(receivePosts(payload)))
);

export const requestPost = id => dispatch => (
  PostApiUtil.fetchPost(id)
    .then(payload => dispatch(receivePost(payload)))
)

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(payload => dispatch(receivePost(payload)))
)

export const createImagePost = post => dispatch => (
  PostApiUtil.createImagePost(post)
    .then(payload => dispatch(receivePost(payload)))
)

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
    .then(payload => dispatch(receivePost(payload)))
)

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id)
    .then(() => dispatch(removePost(id)))
)
