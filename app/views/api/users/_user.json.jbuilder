json.extract! user, :id, :username
json.imageUrl url_for(user.photo)