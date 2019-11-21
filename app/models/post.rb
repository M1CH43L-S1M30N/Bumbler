class Post < ApplicationRecord
  validates :title, uniqueness: true
  validates :authorId, presence: true

  belongs_to :author,
    foreign_key: :authorId,
    class_name: :User

  has_many :likes,
    foreign_key: :post_id,
    class_name: :Like

  has_one_attached :photo
end