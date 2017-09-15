angular.module("appController", [])
.controller('navController', ['$scope', 'homeFactory', function($scope, homeFactory) {
    
    homeFactory.getNavDropDown(function(result) {
        $scope.navDropData = result;
        $scope.products = $scope.navDropData[0];
        $scope.payment = $scope.navDropData[1];
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
    
//    homeFactory.getProductsDetails(param, function(result) {
//       $scope.data = result;
//       $scope.loader = false;
//    });
    
    console.log(param)
    
    $scope.name = "Products Details";
    
}])
.controller('paymentDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
//    homeFactory.getPaymentsDetails(param, function(result) {
//       $scope.data = result;
//       $scope.loader = false;
//    });
    
    console.log(param)
    
    $scope.name = "Payment Details";
    
}])
.controller('carouselController', ['$scope', '$stateParams', function($scope, $stateParams) {
    
    
    
    
    
    
}]);















