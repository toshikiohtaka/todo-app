Rails.application.routes.draw do
  root 'lists#index'
  resources :lists, only: [:index, :create] do
    resources :todos, only: [:index, :create]
  end
end
