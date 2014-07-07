'use strict';

/**
 * @ngdoc function
 * @name nodeBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodeBlogApp
 */
angular.module('nodeBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
