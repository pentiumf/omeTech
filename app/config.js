angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/pages/home.html',
        controller: 'homeController'
    })
    .state('product', {
        url: '/product',
        templateUrl: 'views/pages/product.html',
        controller: 'productController'
    })
    .state('productDetails', {
        url: '/product/:name',
        templateUrl: 'views/pages/productDetails.html',
        controller: 'productDetailsController'
    })
    .state('paymentDetails', {
        url: '/payment/:name',
        templateUrl: 'views/pages/paymentDetails.html',
        controller: 'paymentDetailsController'
    })
//    .state('home', {
//        url: '/',
//        template: '<h1>Home</h1>'
//    })
    .state('404', {
        url: '/404',
        templateUrl: 'views/pages/404.html'
    });
    $urlRouterProvider.otherwise('/');
    //$locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

