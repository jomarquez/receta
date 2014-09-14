describe("RecipeController", function() {
  var ctrl, fakeRecipe, httpBackend, flash, recipeId, routeParams, scope, setupController;
  scope = null;
  ctrl = null;
  routeParams = null;
  httpBackend = null;
  flash = null;
  recipeId = 42;
  fakeRecipe = {
    id: recipeId,
    name: "Baked Potatoes",
    instructions: "Pierce potato with fork, nuke for 20 minutes"
  };
  setupController = function(recipeExists) {
    if (recipeExists == null) {
      recipeExists = true;
    }
    return inject(function($location, $routeParams, $rootScope, $httpBackend, $controller, _flash_) {
      var location, request, results;
      scope = $rootScope.$new();
      location = $location;
      httpBackend = $httpBackend;
      routeParams = $routeParams;
      routeParams.recipeId = recipeId;
      flash = _flash_
      request = new RegExp("\/recipes/" + recipeId);
      results = recipeExists ? [200, fakeRecipe] : [404];
      httpBackend.expectGET(request).respond(results[0], results[1]);
      return ctrl = $controller('RecipeController', {
        $scope: scope
      });
    });
  };
  beforeEach(module("receta"));
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    return httpBackend.verifyNoOutstandingRequest();
  });
  return describe('controller initialization', function() {
    describe('recipe is found', function() {
      beforeEach(setupController());
      return it('loads the given recipe', function() {
        httpBackend.flush();
        return expect(scope.recipe).toEqualData(fakeRecipe);
      });
    });
    return describe('recipe is not found', function() {
      beforeEach(setupController(false));
      return it('loads the given recipe', function() {
        httpBackend.flush();
        expect(scope.recipe).toBe(null);
        return expect(flash.error).toBe("There is no recipe with ID " + recipeId);
      });
    });
  });
});
RunLink
