var controllers;

controllers = angular.module('controllers');

controllers.controller("RecipeController", [
  '$scope', '$routeParams', '$resource', 'flash', function($scope, $routeParams,
    $resource, flash) {
    var Recipe;
    Recipe = $resource('/recipes/:recipeId', {
      recipeId: "@id",
      format: 'json'
    });
    return Recipe.get({
      recipeId: $routeParams.recipeId
    }, (function(recipe) {
      return $scope.recipe = recipe;
    }), (function(httpResponse) {
      $scope.recipe = null;
      return flash.error = "There is no recipe with ID " + $routeParams.recipeId;
    }));
  }
]);
