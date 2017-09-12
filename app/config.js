angular.module("appRoutes", [])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
    .state('root', {
        url: '/',
        templateUrl: 'views/pages/home.html',
        controller: 'homeController'
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
    //$locationProvider.html5Mode(true);
}]);

