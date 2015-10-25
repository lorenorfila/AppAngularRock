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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TheBeatlesCtrl.awesomeThings.length).toBe(3);
  });
});
