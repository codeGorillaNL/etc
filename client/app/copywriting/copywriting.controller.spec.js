'use strict';

describe('Component: CopywritingComponent', function () {

  // load the controller's module
  beforeEach(module('etcAppApp'));

  var CopywritingComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CopywritingComponent = $componentController('copywriting', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
