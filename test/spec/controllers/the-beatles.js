'use strict';

describe('Controller: TheBeatlesCtrl', function () {

  // load the controller's module
  beforeEach(module('appMusicaApp'));

  var TheBeatlesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheBeatlesCtrl = $controller('TheBeatlesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  
});
