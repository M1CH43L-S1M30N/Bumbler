json.extract! user, :id, :username
json.imageUrl url_for(user.photo)
json.followed current_user.users_i_follow.include?(user)
json.followCount user.followers.count