angular.module('dogeMemeApp', [])
.controller('mainCtrl', function($scope) {
    
    $scope.returnInput = function() {
        console.log($scope.input);
    };
   
});