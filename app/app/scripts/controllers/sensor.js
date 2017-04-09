'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SensorCtrl
 * @description
 * # SensorCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('SensorCtrl', function ($scope, sensorFactory, $mdDialog) {

      var dataArray4 = '[{"ID":"1","name":"PH01","unit":"N\/A","description":"PH","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"2","name":"OR01","unit":"mV","description":"Potentiel d\'oxyo-réduction","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"3","name":"OX01","unit":"%","description":"Taux d\'oxygène dans l\'eau, pourcentage de saturation","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"4","name":"EC01","unit":"uS","description":"Electrical conductivity","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"5","name":"TD01","unit":"mg\/L","description":"Total dissolved solids","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"6","name":"SA01","unit":"PSU","description":"Salinity","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"7","name":"SG01","unit":"N\/A","description":"Specific gravity of sea water","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"8","name":"TE01","unit":"C","description":"Température de l\'eau","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"9","name":"TE02","unit":"C","description":"Température de l\'eau","arduino":"1","location":"B01","location_description":"Dernier bassin des poissons (près de la porte)","status":"WET"},{"ID":"11","name":"RR01","unit":"N\/A","description":"Couleur rouge de l\'eau (0-255)","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"12","name":"GG01","unit":"N\/A","description":"Couleur verte de l\'eau (0-255)","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"13","name":"BB01","unit":"N\/A","description":"Couleur bleu de l\'eau (0-255)","arduino":"1","location":"B04","location_description":"Bassin de rétention","status":"WET"},{"ID":"10","name":"HU01","unit":"%","description":"Humidité de l\'air ambiant","arduino":"2","location":"EXT01","location_description":"Extérieur","status":"OUT"},{"ID":"14","name":"TA02","unit":"C","description":"Température de l\'air ambiante","arduino":"2","location":"P01-01","location_description":"Bassin de plantes en haut à droite","status":"DRY"},{"ID":"15","name":"HU02","unit":"%","description":"Humidité de l\'air ambiante","arduino":"2","location":"P01-01","location_description":"Bassin de plantes en haut à droite","status":"DRY"},{"ID":"16","name":"TA03","unit":"C","description":"Température de l\'air ambiante","arduino":"2","location":"P03-04","location_description":"Bassin de plantes en haut à gauche","status":"DRY"},{"ID":"17","name":"HU03","unit":"%","description":"Humidité de l\'air ambiante","arduino":"2","location":"P03-04","location_description":"Bassin de plantes en haut à gauche","status":"DRY"},{"ID":"18","name":"TA04","unit":"C","description":"Température de l\'air ambiante","arduino":"2","location":"PL-01","location_description":"Plantes à lampes","status":"DRY"},{"ID":"19","name":"HU04","unit":"%","description":"Humidité de l\'air ambiante","arduino":"2","location":"PL-01","location_description":"Plantes à lampes","status":"DRY"},{"ID":"20","name":"TE03","unit":"C","description":"Température de l\'eau","arduino":"2","location":"P01-01","location_description":"Bassin de plantes en haut à droite","status":"WET"},{"ID":"21","name":"TE04","unit":"C","description":"Température de l\'eau","arduino":"2","location":"P03-04","location_description":"Bassin de plantes en haut à gauche","status":"WET"},{"ID":"22","name":"LU01","unit":"Lux","description":"Lumière visible","arduino":"2","location":"P02-01","location_description":"Bassin du milieu premier quart","status":"DRY"},{"ID":"23","name":"UV01","unit":"N\/A","description":"Induce UV","arduino":"2","location":"P02-01","location_description":"Bassin du milieu premier quart","status":"DRY"},{"ID":"24","name":"LU02","unit":"Lux","description":"Lumière visible","arduino":"2","location":"P02-02","location_description":"Bassin du milieu deuxième quart","status":"DRY"},{"ID":"25","name":"IR02","unit":"Lux","description":"Lumière infra rouge","arduino":"2","location":"P02-02","location_description":"Bassin du milieu deuxième quart","status":"DRY"},{"ID":"26","name":"UV02","unit":"N\/A","description":"Indice UV","arduino":"2","location":"P02-02","location_description":"Bassin du milieu deuxième quart","status":"DRY"},{"ID":"30","name":"LU04","unit":"Lux","description":"Lumière visible","arduino":"2","location":"P02-04","location_description":"Bassin du milieu quatrième quart","status":"DRY"},{"ID":"31","name":"IR04","unit":"Lux","description":"Lumière infra rouge","arduino":"2","location":"P02-04","location_description":"Bassin du milieu quatrième quart","status":"DRY"},{"ID":"32","name":"UV04","unit":"N\/A","description":"Indice UV","arduino":"2","location":"P02-04","location_description":"Bassin du milieu quatrième quart","status":"DRY"},{"ID":"33","name":"CO","unit":"%","description":"Capteur de Co2","arduino":"2","location":"P01-01","location_description":"Bassin de plantes en haut à droite","status":"N\/A"},{"ID":"27","name":"LU03","unit":"Lux","description":"Lumière visible","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"28","name":"IR03","unit":"Lux","description":"Lumière infra rouge","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"29","name":"UV03","unit":"N\/A","description":"Indice UV","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"34","name":"PH02","unit":"N\/A","description":"PH","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"35","name":"OR02","unit":"V","description":"Potentiel d\'oxydo-réduction en volt","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"36","name":"OX02","unit":"mg\/L","description":"Taux d\'oxygène dans l\'eau","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"37","name":"EC02","unit":"uS","description":"Electrical conductivity","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"38","name":"TD02","unit":"mg\/L","description":"Total dissolved solids","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"39","name":"SA02","unit":"PSU","description":"Salinity","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"},{"ID":"40","name":"SG02","unit":"N\/A","description":"Specific gravity of sea water","arduino":"N\/A","location":"SP-00","location_description":"Spare","status":"N\/A"}]';
      var sqlRequest4 = 'SELECT S.*, A.name AS arduino, L.name AS location, L.description AS location_description, ST.name AS status FROM Sensor S LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON SS.ID_Status = ST.ID WHERE PS.ID_Project IN (SELECT P.ID FROM Project P LEFT JOIN Member_Project MP ON MP.ID_Project = P.ID WHERE MP.ID_Member =1)';


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

      $scope.downloadCSV4 = function(){
          CSVFileDownload(dataArray4);

      }

      $scope.showSQL4 = function() {
          alert = $mdDialog.alert({
              title: 'Requête SQL',
              textContent: sqlRequest4,
              ok: 'Close'
          });
          $mdDialog
              .show( alert )
              .finally(function() {
                  alert = undefined;
              });
      };

  });
