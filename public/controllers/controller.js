var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    $http.get('/contactList').success(function(response) { //route to get our data from

        console.log("I got the data I requested");
        $scope.contactList = response;  //will put the data into our html file
})

}]);