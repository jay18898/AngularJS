var app = angular
    .module("Form", [])
    .controller('formController', function ($scope) {
        $scope.name = "Home Page";
        $scope.email = "";
        $scope.reset = function () {
            document.getElementById('myForm').reset();
        }
        $scope.submit = function () {
            alert('Submitted');
            document.getElementById('myForm').reset();

        }
    });