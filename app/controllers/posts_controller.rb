class PostsController < ApplicationController
	def index
		
		@posts = Post.order("created_at DESC")
		render"index"
	end
	def new
		id = params[:user_id]
		@users = User.find_by(id: id)
		@post = @users.posts.new
		render"new"
	end
	def create
		new_post = Post.create(post_params)
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
