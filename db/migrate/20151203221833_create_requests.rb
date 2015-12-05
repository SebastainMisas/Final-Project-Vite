class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :status
      t.integer :post_id
      t.integer :user_id
      t.integer :sender_id

      t.timestamps null: false
    end
  end
end
