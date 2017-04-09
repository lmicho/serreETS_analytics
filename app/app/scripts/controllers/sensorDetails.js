'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:SensorDetailsCtrl
 * @description
 * # SensorDetailsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('SensorDetailsCtrl', function ($scope, sensorFactory, $routeParams) {

        var id = $routeParams.id;


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


    });
