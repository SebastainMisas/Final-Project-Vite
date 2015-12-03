Rails.application.routes.draw do
	get "/" => "posts#index"
  devise_for :users, controllers: {registrations: 'registrations'}
  resources :users do 
     resources :settings
     resources :posts
   end
   get "/api/user/:id" => "users#show"
end
