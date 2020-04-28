var app = angular
    .module("Demo", ["ngRoute"])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController"
            })
            .when("/news", {
                templateUrl: "Templates/news.html",
                controller: "newsController"
            })
            .when("/contact", {
                templateUrl: "Templates/contact.html",
                controller: "contactController"
            })
            .when("/about", {
                templateUrl: "Templates/about.html",
                controller: "aboutController"
            })
    }).controller('homeController', function ($scope) {
        $scope.title = "Home Page";
    })
    .controller('newsController', function ($scope) {
        $scope.title = "News Page";
    })
    .controller('contactController', function ($scope) {
        $scope.title = "Contact Page";
    })
    .controller('aboutController', function ($scope) {
        $scope.title = "About Page";
    })