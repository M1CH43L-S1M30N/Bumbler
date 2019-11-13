json.post do
  json.extract! @post, :title, :body
end
