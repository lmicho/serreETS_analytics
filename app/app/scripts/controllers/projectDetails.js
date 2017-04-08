'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProjectDetailCtrl', function ($scope, projectFactory, $routeParams) {

      var id = $routeParams.id;


      function getProjectInfo(id){
          // use products factory
          projectFactory.getProjectInfo(id).then(function successCallback(response){

              console.log(response);

              $scope.projectInfo = response.data.records;
          }, function errorCallback(response){
              console.log("erreur");
          });
      }

      getProjectInfo(id);

      function getProjectSensors(id){

          // use products factory
          projectFactory.getProjectSensors(id).then(function successCallback(response){

              console.log(response);

              $scope.sensors = response.data.records;
          }, function errorCallback(response){
              console.log("erreur");
          });


      }

      getProjectSensors(id);


  });
