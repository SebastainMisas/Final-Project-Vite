class Request < ActiveRecord::Base
	#whoeevr owns the event goes first whoever gets accepted goes second
	belongs_to :post
	belongs_to :user
	belongs_to :sender, class_name: "User"
end
