var controllers;

controllers = angular.module('controllers');

controllers.controller("RecipeController", [
  '$scope', '$routeParams', '$resource', '$location', 'flash', function($scope, $routeParams, $resource, $location, flash) {
    var Recipe;
    Recipe = $resource('/recipes/:recipeId', {
      recipeId: "@id",
      format: 'json'
    });
    if ($routeParams.recipeId) {
      Recipe.get({
        recipeId: $routeParams.recipeId
      }, (function(recipe) {
        return $scope.recipe = recipe;
      }), (function(httpResponse) {
        $scope.recipe = null;
        return flash.error = "There is no recipe with ID " + $routeParams.recipeId;
      }));
    } else {
      $scope.recipe = {};
    }
    $scope.back = function() {
      return $location.path("/");
    };
  }
]);
