@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username
    json.imageUrl url_for(user.photo)
    json.followed current_user.followees.include?(user)
  end
end