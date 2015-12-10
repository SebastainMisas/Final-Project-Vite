class PostsController < ApplicationController
before_action :authenticate_user!
	def index
		@posts = Post.order("created_at DESC")
	# to update the navigations (reqeusts/ messsages) count
	if user_signed_in?
		@invited_requests= current_user.invitations.where(status: "invited")
		@requests = current_user.requests.where(status: "pending")
		render"index"
	end
	end
	def new
	# to update the navigations (reqeusts/ messsages) count
		@invited_requests= current_user.invitations.where(status: "invited")
		@requests = current_user.requests.where(status: "pending")

		id = params[:user_id]
		@users = User.find_by(id: id)
		@post = @users.posts.new
		render"new"
	end
	def create
		id = params[:user_id]
		@users = User.find_by(id: id)
		new_post = @users.posts.new(post_params)
		if new_post.save
			redirect_to"/"
		else
			render"new"
		end
	end
	def delete
	end
	def edit
	end
	def update
	end


	private
	def post_params
		params.require(:post).permit(:venue,:city,:description,:time,:avatar)
	end
end
