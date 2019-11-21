class User < ApplicationRecord

  validates :username, uniqueness: true
  validates :password, allow_nil: true, length: { minimum: 5 }

  has_one_attached :photo
  
  has_many :posts,
    foreign_key: :authorId,
    class_name: :Post

  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like
  
   has_many :liked_posts, through: :likes, source: :post
  

  has_many :followers,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followees,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :users_following_me, through: :followers, source: :follower

  has_many :users_i_follow, through: :followees, source: :followee

  #SSPIRE
  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
end