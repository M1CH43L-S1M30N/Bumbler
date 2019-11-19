class ChangePostTable < ActiveRecord::Migration[5.2]
  def change
    change_column_null :posts, :body, true
  end
end
