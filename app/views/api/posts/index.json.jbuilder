@posts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :body, :id, :authorId
    json.authorName post.author.username
  end
end