import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const RECEIVE_POST = "RECEIVE_POST";
const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
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
    .then(posts => dispatch(receivePosts(posts)))
);

export const requestPost = id => dispatch => (
  PostApiUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)))
)

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
)

export const createImagePost = post => dispatch => (
  PostApiUtil.createImagePost(post)
    .then(post => dispatch(receivePost(post)))
)

export const updatePost = post => dispatch => (
  PostApiUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)))
)

export const deletePost = id => dispatch => (
  PostApiUtil.deletePost(id)
    .then(() => dispatch(removePost(id)))
)
