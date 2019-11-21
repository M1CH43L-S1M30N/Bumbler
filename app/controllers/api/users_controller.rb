class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def new
    user = User.new
    render :new
  end
  
  def create
    @user = User.new(user_params)
    if !@user.photo.attached?
      file = File.open('app/assets/images/anonymous_profile.png')
      @user.photo.attach(io: file, filename: 'anonymous_profile.png')
    end

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
end