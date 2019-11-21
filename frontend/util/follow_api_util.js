export const createFollow = id => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { id }
  })
}

export const deleteFollow = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`
  })
}