var myApp = angular.module('myApp', []);

myApp.value('start', 200);

myApp.controller('Counter', ['$scope', 'start', function ($scope, start) {
    $scope.start = start;
    $scope.current = start;
    $scope.change = 1;
    $scope.difference = 0;
    
    $scope.inc = function() {
        $scope.current += $scope.change;
        $scope.calcDiff();
    };
    
    $scope.dec = function() {
        $scope.current -= $scope.change;
        $scope.calcDiff();
    };
    
    $scope.calcDiff = function() {
        $scope.difference = $scope.current - $scope.start;
    };
}]);