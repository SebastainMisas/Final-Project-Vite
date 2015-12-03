class AddAttachmentPicFourToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :pic_four
    end
  end

  def self.down
    remove_attachment :users, :pic_four
  end
end
