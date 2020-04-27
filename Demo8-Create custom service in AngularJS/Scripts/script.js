var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        }
    });