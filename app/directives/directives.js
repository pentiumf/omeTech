angular.module("appDirectives", [])
.directive("navBar", function() {
    return {
        restrict: 'EA',
        link: function(scope, elem, attr) {
            $(".drop-nav-link").click(function() {
                var data_nav = $(this).attr("data-nav");
                var currentDropdown = $(".navbar-dropdown-wrapper");
                currentDropdown.removeClass("currentNavDropDown")
                //console.log(data_nav);
                $("#" + data_nav).toggleClass("currentNavDropDown");
                //currentDropdown.removeClass("currentNavDropDown")
                
            });
        },
        templateUrl: 'views/directives/navBar.html'
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
});


