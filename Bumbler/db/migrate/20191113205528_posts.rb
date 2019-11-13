class Posts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false, index: true
      t.string :body, null: false
      t.integer :authorId, null: false

      t.timestamps
    end
  end
end
