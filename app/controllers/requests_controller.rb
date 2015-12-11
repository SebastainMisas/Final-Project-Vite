class RequestsController < ApplicationController
	
	def create
		post = Post.find_by(id: params[:post_id])
		user_id = post.user_id
		sender_id = current_user.id
		request = post.requests.create(status: "pending", user_id: user_id, sender_id: sender_id)
		render json: request
	end
	def index
		@requests = current_user.requests.where(status: "pending")
		@invited_requests= current_user.invitations.where(status: "invited")
	end
	def nexttime
		request = current_user.requests.find_by(id: params[:id])
		if request.destroy
			render json: { status: 200, request: request }
		end
	end
	def invited
		request = current_user.requests.find_by(id: params[:id])
		request.update(status: "invited")
		render json: request
	end
end
