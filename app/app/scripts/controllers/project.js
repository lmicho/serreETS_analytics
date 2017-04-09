'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProjectCtrl', function ($scope, projectFactory, $mdDialog) {

      var dataArray = '[{"id":1,"name":"Unité aquaponique ÉAU Jean-Talon"},{"id":2,"name":"Bacs à double fond"}]';
      var sqlRequest = 'SELECT P.* FROM Project P LEFT JOIN Member_Project MP ON MP.ID_Project = P.ID WHERE MP.ID_Member =1';

      // getProject
      function getProjects(){

          // use products factory
          projectFactory.getProjects().then(function successCallback(response){

              $scope.projects = response.data.records;

         }, function errorCallback(response){
              console.log("erreur");
          });

      }

      getProjects();

      $scope.downloadCSV = function(){
          CSVFileDownload(dataArray);

      }

      $scope.showSQL = function() {
          alert = $mdDialog.alert({
              title: 'Requête SQL',
              textContent: sqlRequest,
              ok: 'Close'
          });
          $mdDialog
              .show( alert )
              .finally(function() {
                  alert = undefined;
              });
      };



      //showSQL();



  });
