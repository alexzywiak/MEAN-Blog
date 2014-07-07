'use strict';

/**
 * @ngdoc function
 * @name nodeBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodeBlogApp
 */
angular.module('nodeBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
