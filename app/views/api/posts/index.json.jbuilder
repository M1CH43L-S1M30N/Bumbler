@posts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :body, :id, :authorId
    json.authorName post.author.username
    if post.photo.attached?
      json.imageUrl url_for(post.photo)
    end
  end
end