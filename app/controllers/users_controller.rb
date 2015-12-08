class UsersController < ApplicationController
before_action :authenticate_user!

  def show
  	id = params[:id]
    @user = User.find_by(id: id)
    # @user = User.find_by(:id => id)

    respond_to do |format|
        format.html # show.html.erb
        format.json { render :json => @user.to_json(:methods => [ :pic_one_url, :pic_two_url, :pic_three_url, :pic_four_url, :avatar_url]) }
    end
  end
end
