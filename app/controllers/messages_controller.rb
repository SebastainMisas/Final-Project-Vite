class MessagesController < ApplicationController
	def index
		@invited_requests= current_user.requests.where(status: "invited")
		render"index"
	end
end
