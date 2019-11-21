export const createLike = postId => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { postId }
  })
}

export const deleteLike = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${id}`
  })
}