class RenameCollumDestance < ActiveRecord::Migration
  def change
  	 rename_column :settings, :destance, :distance
  end
end
