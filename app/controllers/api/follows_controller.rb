class Api::FollowsController < ApplicationController


  def create
    @user = User.find(params[:id])
    # debugger
    current_user.users_i_follow << @user unless current_user.users_i_follow.include?(@user)
    render 'api/users/show'
  end

  def destroy
    @user = User.find(params[:id])
    @follow = Follow.find_by(followee_id: params[:id], follower_id: current_user.id)
    if @follow
      @follow.destroy
      render "api/users/show"
    else
      render json: ["not followed"], status: 422
    end
  end


end