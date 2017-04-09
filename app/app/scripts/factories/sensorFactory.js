app.factory("sensorFactory", function($http){

    var factory = {};

    // read all products

    factory.getSensors = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/sensor/getSensors.php'
        });
    }


    factory.getDataInfoBySensorId = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/dataInfo/getDataInfo.php?id=' + id
        });
    };

    factory.getSensorInfo = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/sensor/getSensorInfo.php?id=' + id
        });
    }


    return factory;
});