'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ProjectDetailCtrl
 * @description
 * # ProjectDetailCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProjectDetailCtrl', function ($scope, projectFactory, $routeParams, $mdDialog) {

      var id = $routeParams.id;

      var dataArray2 = '[{"sensor_id":"1","sensor_name":"PH01","sensor_unit":"N\/A","sensor_description":"PH","sensor_maxval":"14","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de r\u00e9tention","sensor_status":"WET"},{"sensor_id":"2","sensor_name":"OR01","sensor_unit":"mV","sensor_description":"Potentiel d\'oxyo-r.u00e9duction","sensor_maxval":"1019.9","sensor_minval":"-1019.9","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"3","sensor_name":"OX01","sensor_unit":"%","sensor_description":"Taux d\'oxygène dans l\'eau, pourcentage de saturation","sensor_maxval":"54","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"4","sensor_name":"EC01","sensor_unit":"uS","sensor_description":"Electrical conductivity","sensor_maxval":"200000","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"5","sensor_name":"TD01","sensor_unit":"mg\/L","sensor_description":"Total dissolved solids","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"6","sensor_name":"SA01","sensor_unit":"PSU","sensor_description":"Salinity","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"7","sensor_name":"SG01","sensor_unit":"N\/A","sensor_description":"Specific gravity of sea water","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"8","sensor_name":"TE01","sensor_unit":"C","sensor_description":"Température de l\'eau","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de r\u00e9tention","sensor_status":"WET"},{"sensor_id":"9","sensor_name":"TE02","sensor_unit":"C","sensor_description":"Temp\u00e9rature de l\'eau","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B01","sensor_location_description":"Dernier bassin des poissons (près de la porte)","sensor_status":"WET"},{"sensor_id":"11","sensor_name":"RR01","sensor_unit":"N\/A","sensor_description":"Couleur rouge de l\'eau (0-255)","sensor_maxval":"255","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"12","sensor_name":"GG01","sensor_unit":"N\/A","sensor_description":"Couleur verte de l\'eau (0-255)","sensor_maxval":"255","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"13","sensor_name":"BB01","sensor_unit":"N\/A","sensor_description":"Couleur bleu de l\'eau (0-255)","sensor_maxval":"255","sensor_minval":"0","sensor_arduino":"1","sensor_location":"B04","sensor_location_description":"Bassin de rétention","sensor_status":"WET"},{"sensor_id":"10","sensor_name":"HU01","sensor_unit":"%","sensor_description":"Humidité de l\'air ambiant","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"EXT01","sensor_location_description":"Extérieur","sensor_status":"OUT"},{"sensor_id":"14","sensor_name":"TA02","sensor_unit":"C","sensor_description":"Temp\u00e9rature de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P01-01","sensor_location_description":"Bassin de plantes en haut \u00e0 droite","sensor_status":"DRY"},{"sensor_id":"15","sensor_name":"HU02","sensor_unit":"%","sensor_description":"Humidit\u00e9 de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P01-01","sensor_location_description":"Bassin de plantes en haut \u00e0 droite","sensor_status":"DRY"},{"sensor_id":"16","sensor_name":"TA03","sensor_unit":"C","sensor_description":"Temp\u00e9rature de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P03-04","sensor_location_description":"Bassin de plantes en haut \u00e0 gauche","sensor_status":"DRY"},{"sensor_id":"17","sensor_name":"HU03","sensor_unit":"%","sensor_description":"Humidit\u00e9 de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P03-04","sensor_location_description":"Bassin de plantes en haut \u00e0 gauche","sensor_status":"DRY"},{"sensor_id":"18","sensor_name":"TA04","sensor_unit":"C","sensor_description":"Temp\u00e9rature de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"PL-01","sensor_location_description":"Plantes \u00e0 lampes","sensor_status":"DRY"},{"sensor_id":"19","sensor_name":"HU04","sensor_unit":"%","sensor_description":"Humidit\u00e9 de l\'air ambiante","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"PL-01","sensor_location_description":"Plantes \u00e0 lampes","sensor_status":"DRY"},{"sensor_id":"20","sensor_name":"TE03","sensor_unit":"C","sensor_description":"Température de l\'eau","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P01-01","sensor_location_description":"Bassin de plantes en haut \u00e0 droite","sensor_status":"WET"},{"sensor_id":"21","sensor_name":"TE04","sensor_unit":"C","sensor_description":"Température de l\'eau","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P03-04","sensor_location_description":"Bassin de plantes en haut \u00e0 gauche","sensor_status":"WET"},{"sensor_id":"22","sensor_name":"LU01","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re visible","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-01","sensor_location_description":"Bassin du milieu premier quart","sensor_status":"DRY"},{"sensor_id":"23","sensor_name":"UV01","sensor_unit":"N\/A","sensor_description":"Induce UV","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-01","sensor_location_description":"Bassin du milieu premier quart","sensor_status":"DRY"},{"sensor_id":"24","sensor_name":"LU02","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re visible","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-02","sensor_location_description":"Bassin du milieu deuxi\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"25","sensor_name":"IR02","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re infra rouge","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-02","sensor_location_description":"Bassin du milieu deuxi\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"26","sensor_name":"UV02","sensor_unit":"N\/A","sensor_description":"Indice UV","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-02","sensor_location_description":"Bassin du milieu deuxi\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"30","sensor_name":"LU04","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re visible","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-04","sensor_location_description":"Bassin du milieu quatri\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"31","sensor_name":"IR04","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re infra rouge","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-04","sensor_location_description":"Bassin du milieu quatri\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"32","sensor_name":"UV04","sensor_unit":"N\/A","sensor_description":"Indice UV","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P02-04","sensor_location_description":"Bassin du milieu quatri\u00e8me quart","sensor_status":"DRY"},{"sensor_id":"33","sensor_name":"CO","sensor_unit":"%","sensor_description":"Capteur de Co2","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"2","sensor_location":"P01-01","sensor_location_description":"Bassin de plantes en haut \u00e0 droite","sensor_status":"N\/A"},{"sensor_id":"27","sensor_name":"LU03","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re visible","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"28","sensor_name":"IR03","sensor_unit":"Lux","sensor_description":"Lumi\u00e8re infra rouge","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"29","sensor_name":"UV03","sensor_unit":"N\/A","sensor_description":"Indice UV","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"34","sensor_name":"PH02","sensor_unit":"N\/A","sensor_description":"PH","sensor_maxval":"14","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"35","sensor_name":"OR02","sensor_unit":"V","sensor_description":"Potentiel d\'oxydo-réduction en volt","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"36","sensor_name":"OX02","sensor_unit":"mg\/L","sensor_description":"Taux d\'oxygène dans l\'eau","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"37","sensor_name":"EC02","sensor_unit":"uS","sensor_description":"Electrical conductivity","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"38","sensor_name":"TD02","sensor_unit":"mg\/L","sensor_description":"Total dissolved solids","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"39","sensor_name":"SA02","sensor_unit":"PSU","sensor_description":"Salinity","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"},{"sensor_id":"40","sensor_name":"SG02","sensor_unit":"N\/A","sensor_description":"Specific gravity of sea water","sensor_maxval":"0","sensor_minval":"0","sensor_arduino":"N\/A","sensor_location":"SP-00","sensor_location_description":"Spare","sensor_status":"N\/A"}]';
      var sqlRequest2 = 'SELECT S.ID AS sensor_id, S.name AS sensor_name, S.unit AS sensor_unit, S.description AS sensor_description, S.max_val AS sensor_maxval, S.min_val as sensor_minval, A.name AS arduino, L.name AS location, L.description AS location_description, ST.name as sensor_status FROM Sensor S LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Project P ON P.ID = PS.ID_Project LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON ST.ID = SS.ID_Status WHERE PS.ID_Project =1';



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

      $scope.downloadCSV2 = function(){
          CSVFileDownload(dataArray2);

      }

      $scope.showSQL2 = function() {
          alert = $mdDialog.alert({
              title: 'Requête SQL',
              textContent: sqlRequest2,
              ok: 'Close'
          });
          $mdDialog
              .show( alert )
              .finally(function() {
                  alert = undefined;
              });
      };

  });


