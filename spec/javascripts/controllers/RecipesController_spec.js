describe("RecipesController", function() {
  var ctrl, location, resource, routeParams, scope, setupController;
  scope = null;
  ctrl = null;
  location = null;
  routeParams = null;
  resource = null;
  setupController = function(keywords) {
    return inject(function($location, $routeParams, $rootScope, $resource, $controller) {
      scope = $rootScope.$new();
      location = $location;
      resource = $resource;
      routeParams = $routeParams;
      routeParams.keywords = keywords;
      return ctrl = $controller('RecipesController', {
        $scope: scope,
        $location: location
      });
    });
  };
  beforeEach(module("receta"));
  beforeEach(setupController());
  return it('defaults to no recipes', function() {
    return expect(scope.recipes).toEqualData([]);
  });
});
