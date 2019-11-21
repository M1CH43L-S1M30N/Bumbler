class Api::PostsController < ApplicationController

  def index
    @posts = Post.includes(:likes).all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end
  
  def create
    @post = Post.new(post_params)
    @post.authorId = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages
    end
  end
  
  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post
      @post.destroy
      render json: {}
    else
      render json: ["post cannot be found"], status: 422
    end
  end
  
  private

  def post_params
    params.require(:post).permit(:title, :body, :photo)
  end
end