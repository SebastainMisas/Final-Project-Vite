class MessagesController < ApplicationController
before_action :authenticate_user!
	def index
		@invited_requests= current_user.invitations.where(status: "invited")
	# to update the navigations (reqeusts/ messsages) count
		@requests = current_user.requests.where(status: "pending")
		render"index"
	end
	def remove
		message = current_user.invitations.find_by(id: params[:id])
		if message.destroy
			render json: { status: 200, request: message}
		else
			render json: { status: 404, error: "Message not found"}
		end
	end
	
end
