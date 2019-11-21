json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :title, :body, :id, :authorId
      json.authorName post.author.username
      json.likeCount post.likes.count
      json.liked current_user.liked_posts.include?(post)
      if post.photo.attached?
        json.imageUrl url_for(post.photo)
      end
    end
  end
end

json.postLikes do
  @posts.each do |post|
    post.likes.each do |like|
      json.set! like.id do
        json.extract! like, :id, :user_id, :post_id
      end
    end
  end
end