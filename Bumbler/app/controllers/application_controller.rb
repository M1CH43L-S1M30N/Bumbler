# Top level comment
class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  skip_before_action :verify_authenticity_token
  
   # clllr
  def current_user
    @curent_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @curent_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    redirect_to new_api_session_url unless logged_in?
  end
end