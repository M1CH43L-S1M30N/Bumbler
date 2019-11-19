export const fetchAllPosts = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts"
  });
};

export const fetchPost = id => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${id}`
  });
};

export const createImagePost = post => {

  return $.ajax({
    url: "/api/posts",
    method: "POST",
    data: post,
    contentType: false,
    processData: false
  })
}

export const createPost = post => {
  return $.ajax({
    url: "/api/posts",
    method: "POST",
    data: { post }
  })
}

export const updatePost = post => {
  return $.ajax({
    method: "PATCH",
    url: `/api/posts/${post.id}`,
    data: { post }
  })
}

export const deletePost = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${id}`
  })
}