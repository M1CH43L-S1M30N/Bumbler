@likes.each do |like|
  json.set! like.id do
    json.extract! like, :user_id, :post_id
  end
end