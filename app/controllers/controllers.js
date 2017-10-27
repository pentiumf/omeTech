angular.module("appController", [])
.controller('navController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
    homeFactory.getNavDropDown(function(result) {
        $scope.navDropData = result;
        $scope.products = $scope.navDropData[0];
        $scope.payment = $scope.navDropData[1];
        $scope.pros = $scope.navDropData[2];
        //console.log($scope.pros)
    });
    
}])
.controller('homeController', ['$scope', function($scope) {
    $scope.name = "home";
}])

.controller('productController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
   
    
}])

.controller('productDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getProductsDetails(param, function(result) {
        $scope.data = result;
        $scope.loader = false;
        console.log($scope.data)
    });
    
    //$scope.name = "Products";
     

     
}])
.controller('paymentDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;

    //console.log(param)
    
    homeFactory.getPaymentsDetails(param, function(result) {
        $scope.data = result;
        $scope.loader = false;
        //console.log($scope.data);
        
    });
    
}])
.controller('applicationDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getApplicationDetails(param, function(result) {
        $scope.data = result;
        $scope.loader = false;
       // console.log($scope.data);
    });
    
}])
.controller('aboutUsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
//    $scope.loader = true;
//    var param = $stateParams.name;
//    
//    homeFactory.getApplicationDetails(param, function(result) {
//        $scope.data = result;
//        $scope.loader = false;
//        console.log($scope.data);
//    });
    
}])
.controller('careersController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    
//    $scope.loader = true;
//    var param = $stateParams.name;
//    
//    homeFactory.getApplicationDetails(param, function(result) {
//        $scope.data = result;
//        $scope.loader = false;
//        console.log($scope.data);
//    }); careersController
    
}]);






