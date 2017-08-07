Rails.application.routes.draw do
  root 'lists#index'
  get '/search_field' => 'search#index'
  get '/search' => 'search#search'
  resources :lists, only: [:index, :create] do
    resources :todos, only: [:index, :create]
  end
end
