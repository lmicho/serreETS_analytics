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

                //console.log(response.data.records);



                var dataArray = new Array();


                for(var i=0; i<response.data.records.length; i++){

                    dataArray.push({
                        date: response.data.records[i]['input_date'],
                        data : response.data.records[i]['data_entry']
                    })




                }


                var myJsonString = JSON.stringify(dataArray);

                console.log(myJsonString);

                Morris.Line({
                    element: 'line-example',
                    data: myJsonString,
                    xkey: 'data',
                    ykeys: 'date',
                    labels: ['Series A', 'Series B']
                });






            }, function errorCallback(response){
                console.log("erreur");
            });
        }
        getDataInfoBySensorId(id);


    });
