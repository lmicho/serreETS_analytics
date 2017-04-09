app.factory("sensorFactory", function($http){

    var factory = {};

    // read all products
    factory.getDataInfoBySensorId = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/dataInfo/getDataInfo.php?id=' + id
        });
    };


    return factory;
});