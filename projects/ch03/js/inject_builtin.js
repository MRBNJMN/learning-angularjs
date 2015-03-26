var myMod = angular.module('myApp', []);

myMod.controller('controllerA', ['$scope', '$window', function($scope, $window) {
    $scope.message = 'My module has loaded!';
    $window.alert($scope.message);
}]);