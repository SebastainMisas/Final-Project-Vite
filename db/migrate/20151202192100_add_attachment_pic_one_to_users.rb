class AddAttachmentPicOneToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :pic_one
    end
  end

  def self.down
    remove_attachment :users, :pic_one
  end
end
