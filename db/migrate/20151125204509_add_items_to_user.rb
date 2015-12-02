class AddItemsToUser < ActiveRecord::Migration
  def change
    add_column :users, :age, :integer
    add_column :users, :name, :string
  end
end
