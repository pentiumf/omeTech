angular.module("appDirectives", [])
.directive("navBar", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {

            $(".drop-nav-link").click(function() {
                var data_id = $(this).attr("data-nav");
                $('.navbar-dropdown-wrapper').removeClass('currentNavDropDown');
                $("#"+data_id).addClass('currentNavDropDown');
            });
            
            $("body").on("click", ".nav-sub-link", function() {
                $('.navbar-dropdown-wrapper').removeClass('currentNavDropDown');
            });
            
            
            $("#pul").on("click", function(e) {
                $("#navFloatWrapper").toggleClass('display-float-wrapper');
            });
            
            $(".close-nav-drpdwn").on("click", function() {
                $(".navbar-dropdown-wrapper").removeClass("currentNavDropDown");
            });
            
            
        },
        templateUrl: 'views/directives/navBar.html',
        controller: 'navController',
        bindToController: true
    }
})
.directive("homeCarosel", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
            var carousel = elem.find("#homeAddCarousel");
            
            carousel.owlCarousel({
                  loop: true,
                  center: true,
                  items: 1,
                  margin: 0,
                  autoplay: true,
                  dots: true,
                  nav: true,
                  navText: [
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/left-arrow_grqonx.png'/>",
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/right-arrow_ixpnkr.png'/>",
                  ],
                  autoplayTimeout: 5000,
                  smartSpeed: 450,
                  responsive: {
                    0: {
                      items: 1
                    },
                    768: {
                      items: 1
                    },
                    1170: {
                      items: 1
                    }
                  }
              });
            
            //console.log(carousel.html())
        },
        templateUrl: 'views/directives/homeCarousel.html'
    }
})
.directive("prductsCarosel", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
            var carousel = elem.find("#productsCarousel");
            
            carousel.owlCarousel({
                  loop: true,
                  center: true,
                  items: 1,
                  margin: 0,
                  autoplay: true,
                  dots: true,
                  nav: true,
                  navText: [
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/left-arrow_grqonx.png'/>",
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/right-arrow_ixpnkr.png'/>",
                  ],
                  autoplayTimeout: 5000,
                  smartSpeed: 450,
                  responsive: {
                    0: {
                      items: 1
                    },
                    768: {
                      items: 1
                    },
                    1170: {
                      items: 1
                    }
                  }
              });
        },
        templateUrl: 'views/directives/productsCarousel.html'
//        controller: 'productDetailsController',
//        bindToController: true
    }
})
.directive("stickyNav", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
            scope.id = attr.id;
            
            var navHeight = $("#navBar").height();
            $("#"+scope.id).sticky({ topSpacing: navHeight });
            $("#"+scope.id).on('sticky-start', function() { console.log("Started"); });
            
//            $('.scroll-mover').on('click',function (e) {
//                e.preventDefault();
//
//                var target = this.hash;
//                var $target = $(target);
//
//                $('html, body').stop().animate({
//                    'scrollTop': $target.offset().top
//                }, 900, 'swing', function () {
//                    window.location.hash = target;
//                });
//            });
            
        },
        templateUrl: 'views/directives/stickyNav.html'
    }
})
.directive("testimonialCarousel", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
            var carousel = elem.find("#testimonialsCarousel");
           
            carousel.owlCarousel({
                  loop: true,
                  //center: true,
                  items: 3,
                  margin: 10,
                  autoplay: true,
                  dots: true,
                  nav: true,
                  navText: [
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/left-arrow_grqonx.png'/>",
                    "<img src='https://res.cloudinary.com/hjp6lmmoa/image/upload/v1503760804/right-arrow_ixpnkr.png'/>",
                  ],
                  autoplayTimeout: 5000,
                  smartSpeed: 450,
                  responsive: {
                    0: {
                      items: 1
                    },
                    768: {
                      items: 2
                    },
                    1170: {
                      items: 3
                    }
                  }
              });
            
        },
        templateUrl: 'views/directives/testimonialCarousel.html'
    }
})
.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
})
.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);



