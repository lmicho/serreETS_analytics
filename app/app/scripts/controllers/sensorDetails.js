'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SensorDetailsCtrl
 * @description
 * # SensorDetailsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('SensorDetailsCtrl', function ($scope, sensorFactory, $routeParams, $mdDialog) {

        var id = $routeParams.id;

        var dataArray3 = '[{"id":"1","data_entry":"5","input_date":"2017-03-01"},{"id":"2","data_entry":"5","input_date":"2017-03-02"},{"id":"3","data_entry":"5","input_date":"2017-03-03"},{"id":"4","data_entry":"5","input_date":"2017-03-04"},{"id":"5","data_entry":"5","input_date":"2017-03-05"},{"id":"6","data_entry":"6","input_date":"2017-03-06"},{"id":"7","data_entry":"7","input_date":"2017-03-07"},{"id":"8","data_entry":"7","input_date":"2017-03-08"},{"id":"9","data_entry":"8","input_date":"2017-03-09"},{"id":"10","data_entry":"8","input_date":"2017-03-10"},{"id":"11","data_entry":"8","input_date":"2017-03-11"},{"id":"12","data_entry":"8","input_date":"2017-03-12"},{"id":"13","data_entry":"8","input_date":"2017-03-13"},{"id":"14","data_entry":"4","input_date":"2017-03-14"},{"id":"15","data_entry":"3","input_date":"2017-03-15"},{"id":"16","data_entry":"3","input_date":"2017-03-16"},{"id":"17","data_entry":"6","input_date":"2017-03-17"},{"id":"18","data_entry":"6","input_date":"2017-03-18"},{"id":"19","data_entry":"6","input_date":"2017-03-19"},{"id":"20","data_entry":"6","input_date":"2017-03-20"},{"id":"21","data_entry":"6","input_date":"2017-03-21"},{"id":"22","data_entry":"5","input_date":"2017-03-22"},{"id":"23","data_entry":"5","input_date":"2017-03-23"},{"id":"24","data_entry":"13","input_date":"2017-03-24"},{"id":"25","data_entry":"12","input_date":"2017-03-25"},{"id":"26","data_entry":"11","input_date":"2017-03-26"},{"id":"27","data_entry":"5","input_date":"2017-03-27"},{"id":"28","data_entry":"5","input_date":"2017-03-28"},{"id":"29","data_entry":"6","input_date":"2017-03-29"},{"id":"30","data_entry":"6","input_date":"2017-03-30"},{"id":"31","data_entry":"5","input_date":"2017-03-31"}]';
        var sqlRequest3 = 'SELECT S.ID AS ID, S.description as description, S.name as name, S.unit as unit, S.max_val as max_val, S.min_val as min_val, A.name as arduino, L.name as location, L.description as location_description, ST.name as status FROM Sensor S LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON A.ID = SA.ID_Arduino LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON ST.ID = SS.ID_Status WHERE S.ID=1';



        function getDataInfoBySensorId(id){
            // use products factory
            sensorFactory.getDataInfoBySensorId(id).then(function successCallback(response){

                var dataArray = new Array();
                var sum = 0;
                var gday = 0;
                for(var i=0; i<response.data.records.length; i++){

                    dataArray.push({
                        date: response.data.records[i]['input_date'],
                        data : response.data.records[i]['data_entry']
                    })

                    sum+=parseInt(response.data.records[i]['data_entry']);

                    if(response.data.records[i]['data_entry']==6 || response.data.records[i]['data_entry']==5){
                        gday+=1;
                    }

                }
                var jsonDataArray = JSON.stringify(dataArray);

                var avg = sum/response.data.records.length;

                console.log("moyenne " + avg.toFixed(2));
                console.log("good day " + gday);

                Morris.Line({
                    element: 'line-example',
                    data: [
                        { y: '2017-03-1', a: 5, b:6, c: 5},
                        { y: '2017-03-2', a: 5, b:6, c: 5},
                        { y: '2017-03-3', a: 5, b:6, c: 5},
                        { y: '2017-03-4', a: 5, b:6, c: 5},
                        { y: '2017-03-5', a: 5, b:6, c: 5},
                        { y: '2017-03-6', a: 6, b:6, c: 5},
                        { y: '2017-03-7', a: 7, b:6, c: 5},
                        { y: '2017-03-8', a: 7, b:6, c: 5},
                        { y: '2017-03-9', a: 8, b:6, c: 5},
                        { y: '2017-03-10', a: 8, b:6, c: 5},
                        { y: '2017-03-11', a: 8, b:6, c: 5},
                        { y: '2017-03-12', a: 8, b:6, c: 5},
                        { y: '2017-03-13', a: 8, b:6, c: 5},
                        { y: '2017-03-14', a: 4, b:6, c: 5},
                        { y: '2017-03-15', a: 3, b:6, c: 5},
                        { y: '2017-03-16', a: 3, b:6, c: 5},
                        { y: '2017-03-17', a: 6, b:6, c: 5},
                        { y: '2017-03-18', a: 6, b:6, c: 5},
                        { y: '2017-03-19', a: 6, b:6, c: 5},
                        { y: '2017-03-20', a: 6, b:6, c: 5},
                        { y: '2017-03-21', a: 6, b:6, c: 5},
                        { y: '2017-03-22', a: 5, b:6, c: 5},
                        { y: '2017-03-23', a: 5, b:6, c: 5},
                        { y: '2017-03-24', a: 13, b:6, c: 5},
                        { y: '2017-03-25', a: 12, b:6, c: 5},
                        { y: '2017-03-26', a: 11, b:6, c: 5},
                        { y: '2017-03-27', a: 5, b:6, c: 5},
                        { y: '2017-03-28', a: 5, b:6, c: 5},
                        { y: '2017-03-29', a: 6, b:6, c: 5},
                        { y: '2017-03-30', a: 6, b:6, c: 5},
                        { y: '2017-03-31', a: 5, b:6, c: 5}
                    ],
                    xkey: 'y',
                    ykeys: ['a', 'b', 'c'],
                    xLabels: 'day',
                    labels: ['PH', 'limite supérieure', 'limite inférieure']
                });

                $scope.DataInfo = response.data.records;

                $scope.DataSensorInfo = new Array({
                    'avg' : avg.toFixed(2),
                    'gday' : gday
                });
                //console.log($scope.DataSensorInfo);
                //console.log(response.data.records);

            }, function errorCallback(response){
                console.log("erreur");
            });
        }


        getDataInfoBySensorId(id);


        function getSensorInfo(id){


            // use products factory
            sensorFactory.getSensorInfo(id).then(function successCallback(response){

                console.log(response);
                $scope.sensorInfo = response.data.records;
            }, function errorCallback(response){
                console.log("erreur");
            });

        }

        getSensorInfo(id);

        $scope.downloadCSV3 = function(){
            CSVFileDownload(dataArray3);

        }

        $scope.showSQL3 = function() {
            alert = $mdDialog.alert({
                title: 'Requête SQL',
                textContent: sqlRequest3,
                ok: 'Close'
            });
            $mdDialog
                .show( alert )
                .finally(function() {
                    alert = undefined;
                });
        };


    });
