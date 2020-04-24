var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope) {
        var eployeeIdCount = 0;
        var employees = [
            { name: "joya", dateOfBirth: new Date('April 19, 2019'), gender: "Female", salary: 25000.785 },
            { name: "martin", dateOfBirth: new Date('December 05, 1996'), gender: "Male", salary: 35000 },
            { name: "marsh", dateOfBirth: new Date('February 20, 1978'), gender: "Male", salary: 45000 },
            { name: "sara", dateOfBirth: new Date('July 02, 1998'), gender: "Female", salary: 55000 },
        ];
        $scope.employees = employees;
        $scope.sortColumn = 'name';
    });