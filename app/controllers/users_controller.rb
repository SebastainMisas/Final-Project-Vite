class UsersController < ApplicationController
before_action :authenticate_user!

  def show
  	id = current_user.id
    @user = User.find_by(id: id)
    # @user = User.find_by(:id => id)

    respond_to do |format|
        format.html # show.html.erb
        format.json { render :json => @user }
    end
  end
end
