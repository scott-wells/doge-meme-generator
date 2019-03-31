angular.module('dogeMemeApp', [])
.controller('mainCtrl', function($scope) {
    
    $scope.returnInputs = function() {
        console.log($scope.input);
    };
   
});