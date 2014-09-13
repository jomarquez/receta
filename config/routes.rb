Receta::Application.routes.draw do
  resources :recipes, only: [:index]
  root 'home#index'
end
