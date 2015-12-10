Rails.application.routes.draw do
	get "/" => "posts#index"
	post "/posts/:post_id/requests" => "requests#create"
	
	devise_for :users, controllers: {registrations: 'registrations'}
  	resources :requests
   	resources :messages
   	resources :settings
	resources :users do 
	   	resources :posts
   	end
   	get "/api/user/:id" => "users#show"
   	get "/api/request/:id/nexttime" => "requests#nexttime"
   	get "/api/request/:id/invited" => "requests#invited"
   	get "/api/messages/:id/remove" => "messages#remove"
   	get "/invited_list/messages" => "users#invited_list_messages"

end
