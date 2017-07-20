'use strict';

angular.module('etcAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('coaching', {
        url: '/coaching',
        template: '<coaching></coaching>'
      });
  });
