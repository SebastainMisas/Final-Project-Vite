Rails.application.routes.draw do
	get "/" => "posts#index"
  devise_for :users
  resources :users do 
     resources :settings
     resources :posts
   end
end
