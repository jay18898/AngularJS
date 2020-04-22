var app = angular
    .module("myApp", [])
    .controller("myCtrl", function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        var employee = {
            name: "abc",
            designation: "Developer"
        }
        $scope.employee = employee;
    });