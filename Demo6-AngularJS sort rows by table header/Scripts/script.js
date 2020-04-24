var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope) {
        var employees = [
            { name: "joya", dateOfBirth: new Date('April 19, 2019'), gender: "Female", city: 'California' },
            { name: "martin", dateOfBirth: new Date('December 05, 1996'), gender: "Male", city: 'Alabama' },
            { name: "marsh", dateOfBirth: new Date('February 20, 1978'), gender: "Male", city: 'Maryland' },
            { name: "sara", dateOfBirth: new Date('July 02, 1998'), gender: "Female", city: 'Ohio' },
        ];
        $scope.employees = employees;
        $scope.sortColumn = 'name';
        $scope.reverseSort = false;
        $scope.sortData = (column) => {
            $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
            $scope.sortColumn = column;
        }
        $scope.getSortClass = (column) => { return ($scope.sortColumn == column) ? ($scope.reverseSort ? 'arrow-down' : 'arrow-up') : ''; }

        $scope.search = function (item) {
            if ($scope.searchText == undefined) {
                return true;
            } else {
                if (item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                    return true;
                }
            }
            return false;
        }
    });