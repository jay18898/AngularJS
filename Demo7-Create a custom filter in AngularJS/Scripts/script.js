var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope) {
        var employees = [
            { name: "joya", dateOfBirth: new Date('April 19, 2019'), gender: 2, city: 'California' },
            { name: "martin", dateOfBirth: new Date('December 05, 1996'), gender: 1, city: 'Alabama' },
            { name: "marsh", dateOfBirth: new Date('February 20, 1978'), gender: 1, city: 'Maryland' },
            { name: "sara", dateOfBirth: new Date('July 02, 1997'), gender: 2, city: 'Ohio' },
            { name: "unknown", dateOfBirth: new Date('January 10, 1986'), gender: 3, city: 'Washington' },
            { name: "Alice", dateOfBirth: new Date('March 22, 1971'), gender: 2, city: 'Nevada' },
            { name: "Random", dateOfBirth: new Date('August 13, 1992'), gender: 3, city: 'Texas' },
        ];
        $scope.employees = employees;
    });