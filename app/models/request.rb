class Request < ActiveRecord::Base
	belongs_to :post
	belongs_to :user
	belongs_to :sender, class_name: "User"
end
