var app = angular
    .module("myApp", [])
    .controller("employeeController", function ($scope) {
        var eployeeIdCount = 0;
        var employees = [
            { employeeId: 1, firstName: "joya", lastName: "Dan", gender: "Female", salary: 25000 },
            { employeeId: 2, firstName: "martin", lastName: "abc", gender: "Male", salary: 35000 },
            { employeeId: 3, firstName: "sara", lastName: "unknown", gender: "Female", salary: 45000 },
            { employeeId: 4, firstName: "marsh", lastName: "kan", gender: "Male", salary: 55000 },
        ];
        eployeeIdCount = employees[employees.length - 1].employeeId;
        $scope.employees = employees;
        $scope.editEmployeeDetails = function (employeeId) {
            document.getElementById('btnSubmit').style = 'display:none';
            document.getElementById('btnUpdate').style = 'display:block';
            console.log('employeeId', employeeId);
            employees.map((e) => {
                if (e.employeeId == employeeId) {
                    document.getElementById('employeeId').value = e.employeeId
                    document.getElementById('firstName').value = e.firstName
                    document.getElementById('lastName').value = e.lastName
                    document.getElementById('gender').value = e.gender
                    document.getElementById('salary').value = e.salary
                }
            });
        }

        $scope.updateBtnClick = function () {
            employees.map((e) => {
                let eId = document.getElementById('employeeId').value;
                console.log('eId', eId);
                if (e.employeeId == eId) {
                    e.firstName = document.getElementById('firstName').value;
                    e.lastName = document.getElementById('lastName').value;
                    e.gender = document.getElementById('gender').value;
                    e.salary = document.getElementById('salary').value;
                }

            })
            document.getElementById('formEmployeeDetails').reset();
            document.getElementById('btnSubmit').style = 'display:block';
            document.getElementById('btnUpdate').style = 'display:none';
        }

        $scope.deleteBtnClick = function (employeeId) {
            console.log('employeeId', employeeId);
            employees = employees.filter((e) => e.employeeId != employeeId);
            $scope.employees = employees;
        }

        $scope.submitBtnClick = function () {
            eployeeIdCount += 1;
            let tempEmpObj = {};
            console.log('eployeeIdCount', eployeeIdCount);
            document.getElementById('employeeId').value = eployeeIdCount;
            tempEmpObj.employeeId = eployeeIdCount;
            tempEmpObj.firstName = document.getElementById('firstName').value;
            tempEmpObj.lastName = document.getElementById('lastName').value;
            tempEmpObj.gender = document.getElementById('gender').value;
            tempEmpObj.salary = document.getElementById('salary').value;
            employees.push(tempEmpObj);
            console.log('obj emp', employees);
            document.getElementById('formEmployeeDetails').reset();
        }
    });