class Likes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false, index: true
      t.integer :post_id, null: false

      t.timestamps
    end
  end
end
