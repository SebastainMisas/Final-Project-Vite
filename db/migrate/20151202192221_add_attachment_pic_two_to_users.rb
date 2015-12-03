class AddAttachmentPicTwoToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :pic_two
    end
  end

  def self.down
    remove_attachment :users, :pic_two
  end
end
