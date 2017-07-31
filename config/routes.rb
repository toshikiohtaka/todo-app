Rails.application.routes.draw do
  root 'lists#index'
  resources :lists, only: [:index, :create, :show]
end
