var controllers, receta, recipes;

receta = angular.module('receta', ['templates', 'ngRoute', 'ngResource', 'controllers']);

receta.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'RecipesController'
    }).when('/recipes/:recipeId', {
      templateUrl: "show.html",
      controller: 'RecipeController'
    });
  }
]);

recipes = [
  {
    id: 1,
    name: 'Baked Potato w/ Cheese'
  }, {
    id: 2,
    name: 'Garlic Mashed Potatoes'
  }, {
    id: 3,
    name: 'Potatoes Au Gratin'
  }, {
    id: 4,
    name: 'Baked Brussel Sprouts'
  }
];

controllers = angular.module('controllers', []);
