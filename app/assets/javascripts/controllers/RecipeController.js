var controllers;

controllers = angular.module('controllers');

controllers.controller("RecipeController", [
  '$scope', '$routeParams', '$resource', '$location', 'flash', function($scope, $routeParams, $resource, $location, flash) {
    var Recipe;
    Recipe = $resource('/recipes/:recipeId', {
      recipeId: "@id",
      format: 'json'
    }, {
      'save': {
        method: 'PUT'
      },
      'create': {
        method: 'POST'
      }
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
    $scope.edit = function() {
      return $location.path("/recipes/" + $scope.recipe.id + "/edit");
    };
    $scope.cancel = function() {
      if ($scope.recipe.id) {
        return $location.path("/recipes/" + $scope.recipe.id);
      } else {
        return $location.path("/");
      }
    };
    $scope.save = function() {
      var onError;
      onError = function(_httpResponse) {
        return flash.error = "Something went wrong";
      };
      if ($scope.recipe.id) {
        return $scope.recipe.$save((function() {
          return $location.path("/recipes/" + $scope.recipe.id);
        }), onError);
      } else {
        return Recipe.create($scope.recipe, (function(newRecipe) {
          return $location.path("/recipes/" + newRecipe.id);
        }), onError);
      }
    };
    return $scope["delete"] = function() {
      $scope.recipe.$delete();
      return $scope.back();
    };
  }
]);
