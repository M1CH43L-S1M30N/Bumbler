class Like < ApplicationRecord
  validates :user_id, :post_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

end