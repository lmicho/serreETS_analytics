app.factory("projectFactory", function($http){

    var factory = {};

    // read all products
    factory.getProjects = function(){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/project/getProjects.php'
        });
    };

    // read one product
    factory.getProjectSensors = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/project/getProjectSensors.php?id=' + id
        });
    };

    factory.getProjectInfo = function(id){
        return $http({
            method: 'GET',
            url: 'http://localhost:8888/GTI791/api_dev/controllers/project/getProjectInfo.php?id=' + id
        });
    }

    // createProduct will be here

    return factory;
});