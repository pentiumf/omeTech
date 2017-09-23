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
            url: 'data/products/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            $location.url('/404');
        });
    }
    
    
    homeServices.getPaymentsDetails = function(a, cb) {
        $http({
            url: 'data/payment/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    
    homeServices.getApplicationDetails = function(a, cb) {
        $http({
            url: 'data/application/'+a+'.json',
            method: 'GET',
        }).then(function(response){
            cb(response.data);
        }, function(response){
            //$location.url('/404');
        });
    }
    return homeServices;
    
}]);















