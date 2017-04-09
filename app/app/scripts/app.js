'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
var app = angular
  .module('appApp', [
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.morris'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl',
            controllerAs: 'main'
        })
        .when('/project/:id', {
            templateUrl: 'views/project-details.html',
            controller: 'ProjectDetailCtrl',
            controllerAs: 'projectDetails'
        })
        .when('/sensors', {
            templateUrl: 'views/sensor.html',
            controller: 'SensorCtrl',
            controllerAs: 'sensor'
        })
        .when('/sensors/:id', {
            templateUrl: 'views/sensor-details.html',
            controller: 'SensorDetailsCtrl',
            controllerAs: 'sensorDetails'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl',
            controllerAs: 'profile'
        })
        .otherwise({
            redirectTo: '/'
        });
    $locationProvider.hashPrefix('');
  });
