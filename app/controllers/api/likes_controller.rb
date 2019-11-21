class Api::LikesController < ApplicationController

  def index
    @likes = Like.all
    render :index
  end

  def show
    @like = Like.find(params[:id])
  end

  def create
    # debugger
    @post = Post.find(params[:postId])
    current_user.liked_posts << @post unless current_user.liked_posts.include?(@post)
    render "api/posts/show"
  end

  def destroy
    @post = Post.find(params[:id])
    @like = Like.find_by(post_id: params[:id], user_id: current_user.id)
    if @like
      @like.destroy
      render "api/posts/show"
    else
      render json: ["you never liked this"], status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:post_id)
  end

end