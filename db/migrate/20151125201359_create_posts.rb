class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :description
      t.string :venue
      t.integer :time
      t.string :city

      t.timestamps null: false
    end
  end
end
