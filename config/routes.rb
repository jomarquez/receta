Receta::Application.routes.draw do
  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  root 'home#index'

  match '*path', via: :all, to: 'pages#error_404'
end
