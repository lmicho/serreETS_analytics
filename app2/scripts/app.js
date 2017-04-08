'use strict';

/**
 * Déclaration de l'application ecommerceApp
 */
var app = angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    function ($httpProvider) {
    }
]);

/**
 * Routage
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .otherwise({
            redirectTo: 'home'
        });
});