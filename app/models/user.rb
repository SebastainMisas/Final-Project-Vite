class User < ActiveRecord::Base
	has_many :posts
	has_many :requests
	has_many :settings

  # class_name: no invitation model, use Request
  # foreign_key: on the Request model, use the sender_id to get my invitations
  has_many :invitations, class_name: "Request", foreign_key: "sender_id"
  # using paperclip documentation meathods
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/icon-user-default.png"
    validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

    has_attached_file :pic_one, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/icon-user-default.png"
  validates_attachment_content_type :pic_one, content_type: /\Aimage\/.*\Z/

  has_attached_file :pic_two, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/icon-user-default.png"
  validates_attachment_content_type :pic_two, content_type: /\Aimage\/.*\Z/

  has_attached_file :pic_three, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/icon-user-default.png"
  validates_attachment_content_type :pic_three, content_type: /\Aimage\/.*\Z/

  has_attached_file :pic_four, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/icon-user-default.png"
  validates_attachment_content_type :pic_four, content_type: /\Aimage\/.*\Z/
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # using devise here
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  #need to get these meathods when using ajax request to show on events users profile modal. 
  def pic_one_url
  	pic_one.url(:medium)
  end
  def pic_two_url
  	pic_two.url(:medium)
  end
  def pic_three_url
  	pic_three.url(:medium)
  end
  def pic_four_url
  	pic_four.url(:medium)
  end
  def avatar_url
    avatar.url(:medium)
  end

end
