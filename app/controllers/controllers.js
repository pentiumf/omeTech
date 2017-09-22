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
    
//    jQuery('#fullpage').fullpage({
//      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
//      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//      menu: '#menu',
//      slidesNavigation: true
//    });
    
//    var _this = this;
//
//      _this.mainOptions = {
//        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
//        navigation: true,
//        navigationPosition: 'right',
//        scrollingSpeed: 1000
//      }
    $scope.mainOptions = 
        {
          sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
          anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
          menu: '#menu'
    };
    
    var _this = this;

//    this.mainOptions = {
//      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
//			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
//			menu: '#menu'
//    };
    
    $scope.slides = [
      {
        title: 'Simple',
        description: 'Easy to use. Configurable and customizable.',
        src: 'http://www.telegraph.co.uk/content/dam/Travel/2016/July/nice-beach-AP-TRAVEL-xlarge.jpg'
      },
      {
        title: 'Cool',
        description: 'It just looks cool. Impress everybody with a simple and modern web design!',
        src: 'http://pre14.deviantart.net/9feb/th/pre/f/2011/025/f/6/glass_apples_widescreen_remake_by_furumaru-d380jeo.jpg'
      },
      {
        title: 'Compatible',
        description: 'Working in modern and old browsers too!',
        src: 'http://images.all-free-download.com/images/graphiclarge/nice_flowers_202676.jpg'
      }
    ];

//    this.slides = [
//      {
//        title: 'Simple',
//        description: 'Easy to use. Configurable and customizable.',
//        src: 'http://www.telegraph.co.uk/content/dam/Travel/2016/July/nice-beach-AP-TRAVEL-xlarge.jpg'
//      },
//      {
//        title: 'Cool',
//        description: 'It just looks cool. Impress everybody with a simple and modern web design!',
//        src: 'http://pre14.deviantart.net/9feb/th/pre/f/2011/025/f/6/glass_apples_widescreen_remake_by_furumaru-d380jeo.jpg'
//      },
//      {
//        title: 'Compatible',
//        description: 'Working in modern and old browsers too!',
//        src: 'http://images.all-free-download.com/images/graphiclarge/nice_flowers_202676.jpg'
//      }
//    ];

    this.addSlide = function() {
      _this.slides.push({
        title: 'New Slide',
        description: 'I made a new slide!',
        src: 'https://2.bp.blogspot.com/-O3zdZkYKZ-o/UrUzzAHDypI/AAAAAAAAC3w/r8Mrz42U9-I/s1600/swiming+bird+looking+very+nice.jpg'
      });

      console.log('added slide');

      console.log(_this);
    };
    
}])
.controller('productDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getProductsDetails(param, function(result) {
        $scope.data = result;
        $scope.loader = false;
    });
    
}])
.controller('paymentDetailsController', ['$scope', '$stateParams', 'homeFactory', function($scope, $stateParams, homeFactory) {
    $scope.loader = true;
    var param = $stateParams.name;
    
    homeFactory.getPaymentsDetails(param, function(result) {
        $scope.data = result;
        $scope.loader = false;
    });
    
}])
.controller('carouselController', ['$scope', '$stateParams', function($scope, $stateParams) {
    
    
    
}]);















