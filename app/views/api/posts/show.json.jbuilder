json.post do
  json.extract! @post, :title, :body, :authorId, :id
  json.authorName @post.author.username
  json.likeCount @post.likes.count
  json.liked current_user.liked_posts.include?(@post)
  if @post.photo.attached?
    json.imageUrl url_for(@post.photo)
  end
end

json.postLikes do
  @post.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :user_id, :post_id
    end
  end
end
