var controllers, receta;

receta = angular.module('receta', ['templates', 'ngRoute', 'controllers']);

receta.config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: "index.html",
      controller: 'RecipesController'
    });
  }
]);

controllers = angular.module('controllers', []);

controllers.controller("RecipesController", ['$scope', function($scope) {}]);
