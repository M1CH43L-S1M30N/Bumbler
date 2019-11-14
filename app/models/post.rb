class Post < ApplicationRecord
  validates :title, uniqueness: true
  validates :body, :authorId, presence: true

  belongs_to :author,
    foreign_key: :authorId,
    class_name: :User
end