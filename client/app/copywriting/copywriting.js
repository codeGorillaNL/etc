'use strict';

angular.module('etcAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('copywriting', {
        url: '/copywriting',
        template: '<copywriting></copywriting>'
      });
  });
