class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.integer :user_id
      t.integer :destance
      t.integer :ages
      t.boolean :public_profile

      t.timestamps null: false
    end
  end
end
