var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope) {
        var employees = [
            { emplyeeId: 1, firstName: "joya", lastName: "Dan", gender: "Female", salary: 25000 },
            { emplyeeId: 2, firstName: "martin", lastName: "abc", gender: "Male", salary: 35000 },
            { emplyeeId: 3, firstName: "sara", lastName: "unknown", gender: "Female", salary: 45000 },
            { emplyeeId: 4, firstName: "marsh", lastName: "kan", gender: "Male", salary: 55000 },
        ];
        $scope.employees = employees;
    });