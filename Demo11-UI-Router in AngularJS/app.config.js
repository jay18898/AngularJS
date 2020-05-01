angular
    .module('UIRouterDemo')
    .config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('business', {
            url: '/business',
            templateUrl: 'Templates/business.html'
        })
        .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'Templates/portfolio.html'
        })
        .state('business.products', {
            url: '/products',
            templateUrl: 'Templates/products.html',
            controller: 'productsController',
            controllerAs: 'productsCtrl'
        })
        .state('business.services', {
            url: '/services',
            templateUrl: 'Templates/services.html',
            controller: 'servicesController',
            controllerAs: 'servicesCtrl'
        })
}
/*
App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, send to /business
    $urlRouterProvider.otherwise("/business")

    $stateProvider
        .state('business', {
            url: "/business",
            templateUrl: "business.html"
        })
        .state('business.products', {
            url: "/products",
            templateUrl: "products.html",
            controller: function ($scope) {
                $scope.products = ["Computer", "Printers", "Phones", "Bags"];
            }
        })
        .state('business.services', {
            url: "/services",
            templateUrl: "services.html",
            controller: function ($scope) {
                $scope.services = ["Selling", "Support", "Delivery", "Reparation"];
            }
        })

        .state('portfolio', {
            url: "/portfolio",
            views: {
                "": { templateUrl: "portfolio.html" },
                "view1@portfolio": { template: "Write whatever you want, it's your virtual company." },
                "view2@portfolio": {
                    templateUrl: "clients.html",
                    controller: function ($scope) {
                        $scope.clients = ["HP", "IBM", "MicroSoft"];
                    }
                }
            }
        })
}]);
*/