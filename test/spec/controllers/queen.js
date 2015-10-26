'use strict';

describe('Controller: QueenCtrl', function () {

  // load the controller's module
  beforeEach(module('appMusicaApp'));

  var QueenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QueenCtrl = $controller('QueenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  
});
