// public/core.js
var App = angular.module('myApp', []);

    App.controller("employeeController", Test);
        function Test($scope, $http, $location){
            //$scope.test = '';
            //$scope.Designation = ["B.E", "MBA"];
            //find data display 
            $http.get('/index')
                .success(function(test) {
                    $scope.employees = test;
                    console.log('hellllll:' + JSON.stringify(test));
                })
                .error(function(test) {
                    console.log('Error: ' + test);
                });
            //save data
            $scope.submit = function(){
                var test = {
                    Firstname: $scope.Firstname,
                    Lastname: $scope.Lastname,
                    email: $scope.email,
                    Designation: $scope.Designation,
                    dob: $scope.dob
                    }
                    $http.post('/index', test)
                        .success(function(test) { 
                            console.log(test);
                        })
                        .error(function(test) {
                            console.log('Error: ' + test);
                        });

                console.log("click here" + JSON.stringify(test));
            }

            //delete data
        $scope.deleteTodo = function(id) {
            $http.delete('/index/' + id)
                .success(function(test) {
                    $scope.todos = test;
                    console.log('data Deleted :' + JSON.stringify(test));
                })
                .error(function(test) {
                    console.log('Error: ' + test);
                });
            }
        
        //update data
        $scope.UpdateInfo = function(data) {
            var id = data._id;
            console.log(id);
            $http.put('/index/' + id, data)
                .success(function(data) { 
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
            console.log("click here" + JSON.stringify(data));

            }

        };
    