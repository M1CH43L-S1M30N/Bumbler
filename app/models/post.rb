class Post < ApplicationRecord
  validates :title, uniqueness: true
  validates :authorId, presence: true

  belongs_to :author,
    foreign_key: :authorId,
    class_name: :User

  has_one_attached :photo
end