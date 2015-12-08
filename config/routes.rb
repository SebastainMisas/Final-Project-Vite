Rails.application.routes.draw do
	get "/" => "posts#index"
	post "/posts/:post_id/requests" => "requests#create"
	get "/requests" => "request#index"
	devise_for :users, controllers: {registrations: 'registrations'}
	resources :users do 
	  	resources :requests
	   	resources :settings
	   	resources :posts
	   	resources :messages
   	end
   	get "/api/user/:id" => "users#show"
   	get "/api/request/:id/nexttime" => "requests#nexttime"
   	get "/api/request/:id/invited" => "requests#invited"
   	get "/api/messages/:id/remove" => "messages#remove"

end
