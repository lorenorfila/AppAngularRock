'use strict';

describe('Controller: TheRollingStonesCtrl', function () {

  // load the controller's module
  beforeEach(module('appMusicaApp'));

  var TheRollingStonesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TheRollingStonesCtrl = $controller('TheRollingStonesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TheRollingStonesCtrl.awesomeThings.length).toBe(3);
  });
});
