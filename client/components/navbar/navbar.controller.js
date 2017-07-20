'use strict';

class NavbarController {
  //start-non-standard
  menu = [
  {
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Coaching',
    'state': 'coaching'
  },
  {
    'title': 'Copywriting',
    'state': 'copywriting'
  }
];

  isCollapsed = true;
  //end-non-standard

}

angular.module('etcAppApp')
  .controller('NavbarController', NavbarController);
