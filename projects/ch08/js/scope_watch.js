var myApp = angular.module('myApp', []);

myApp.controller('scopeWatch', function($scope) {
    $scope.mColors = ['red', 'green', 'blue'];
    $scope.myColor = '';
    
    $scope.hitsArray = [0, 0];
    
    $scope.changes = 0;
    
    $scope.myObj = {
        color: '',
        hits: '',
        misses: ''
    };
    
    $scope.setColor = function(color) {
        $scope.myColor = color;
    };
    
    $scope.hit = function() {
        $scope.hitsArray[0] += 1;
    };

    $scope.miss = function() {
        $scope.hitsArray[1] += 1;
    };
    
    $scope.$watch('myColor', function(newValue, oldValue) {
        $scope.myObj.color = newValue;
    });

    $scope.$watchCollection('hitsArray', function(newValue, oldValue) {
        $scope.myObj.hits = newValue[0];
        $scope.myObj.misses = newValue[1];
    });
    
    $scope.$watchCollection('myObj', function(newValue, oldValue) {
        $scope.changes += 1;
    });
});