'use strict';

describe('Component: CoachingComponent', function () {

  // load the controller's module
  beforeEach(module('etcAppApp'));

  var CoachingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CoachingComponent = $componentController('coaching', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
