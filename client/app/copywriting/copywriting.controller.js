'use strict';

(function(){

class CopywritingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('etcAppApp')
  .component('copywriting', {
    templateUrl: 'app/copywriting/copywriting.html',
    controller: CopywritingComponent,
    controllerAs: 'copywritingCtrl'
  });

})();
