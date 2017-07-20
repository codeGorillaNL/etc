'use strict';

(function(){

class CoachingComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('etcAppApp')
  .component('coaching', {
    templateUrl: 'app/coaching/coaching.html',
    controller: CoachingComponent,
    controllerAs: 'coachingCtrl'
  });

})();
