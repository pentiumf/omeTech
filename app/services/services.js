angular.module("appServices", [])
.factory('homeFactory', ['$http', '$location', '$sce', function($http, $location, $sce) {
    var homeServices = {};
    
    homeServices.getNavDropDown = function(cb) {
        $http({
            url: 'data/navDropDown.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    } 
    
    
    homeServices.getProductsDetails = function(a, cb) {
        $http({
            url: 'data/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    
    homeServices.getPaymentsDetails = function(a, cb) {
        $http({
            url: 'data/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    return homeServices;
    
}]);















