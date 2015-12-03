class AddAttachmentPicThreeToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :pic_three
    end
  end

  def self.down
    remove_attachment :users, :pic_three
  end
end
