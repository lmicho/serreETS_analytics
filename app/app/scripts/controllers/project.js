'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProjectCtrl', function ($scope, projectFactory) {

      // getProject
      function getProjects(){

          // use products factory
          projectFactory.getProjects().then(function successCallback(response){

              console.log(response);
              $scope.projects = response.data.records;
          }, function errorCallback(response){
              console.log("erreur");
          });

      }

      getProjects();


  });
