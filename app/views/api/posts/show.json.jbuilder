json.extract! @post, :title, :body, :authorId, :id
json.authorName @post.author.username
