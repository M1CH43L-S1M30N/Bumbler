json.extract! @post, :title, :body, :authorId, :id
json.authorName @post.author.username
if @post.photo.attached?
  json.imageUrl url_for(@post.photo)
end
