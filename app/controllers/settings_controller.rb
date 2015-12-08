class SettingsController < ApplicationController
	def index
		
	# to update the navigations (reqeusts/ messsages) count
		@requests = current_user.requests.where(status: "pending")
		@invited_requests= current_user.invitations.where(status: "invited")
		render "index"
	end
end
