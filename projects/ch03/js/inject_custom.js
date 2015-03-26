var myApp = angular.module('myApp', ['myMod']);

myApp.value('appMsg', 'Hello from myApp!');
myApp.controller('controllerA', ['$scope', 'appMsg', function($scope, msg) {
    $scope.message = msg;
}]);

var myMod = angular.module('myMod', []);

myMod.value('modMsg', 'Hello from myMod!');
myMod.controller('controllerB', ['$scope', 'modMsg', function($scope, msg) {
    $scope.message = msg;
}]);