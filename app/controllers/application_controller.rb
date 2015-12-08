class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

	protected

	def configure_permitted_parameters
	devise_parameter_sanitizer.for(:sign_up) << :age
	devise_parameter_sanitizer.for(:sign_up) << :name
	devise_parameter_sanitizer.for(:sign_up) << :avatar

	devise_parameter_sanitizer.for(:account_update) << :age
	devise_parameter_sanitizer.for(:account_update) << :name
	devise_parameter_sanitizer.for(:account_update) << :bio
	devise_parameter_sanitizer.for(:account_update) << :avatar
	devise_parameter_sanitizer.for(:account_update) << :pic_one
	devise_parameter_sanitizer.for(:account_update) << :pic_two
	devise_parameter_sanitizer.for(:account_update) << :pic_three
	devise_parameter_sanitizer.for(:account_update) << :pic_four

	# devise_parameter_sanitizer.for(:sign_up) << :avatar_content_type
	end
end