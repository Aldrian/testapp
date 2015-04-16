'use strict';

/**
 * @ngdoc overview
 * @name testcafetApp
 * @description
 * # testcafetApp
 *
 * Main module of the application.
 */
angular
  .module('testcafetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
