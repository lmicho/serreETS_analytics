'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SensorCtrl
 * @description
 * # SensorCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SensorCtrl', function ($scope, sensorFactory) {

      // getProject
      function getSensors(){

          // use products factory
          sensorFactory.getSensors().then(function successCallback(response){

              console.log(response);
              $scope.sensors = response.data.records;
          }, function errorCallback(response){
              console.log("erreur");
          });

      }

      getSensors();

  });
