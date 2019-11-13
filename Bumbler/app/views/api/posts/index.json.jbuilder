@posts.each do |post|
  json.set! post.id do
    json.extract! post, :title, :body
  end
end