class RecipesController < ApplicationController
  def index
    @recipes = params[:keywords] ? Recipe.where('name ilike ?',"%#{params[:keywords]}%") : []
  end
end
