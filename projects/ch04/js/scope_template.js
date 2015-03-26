var my_app = angular.module('my_app', []);

my_app.controller('live_test', function($scope) {
    $scope.value_a = 1;
    $scope.value_b = 2;
    
    $scope.calc_val = function() {
        $scope.value_clicked = $scope.value_a + $scope.value_b;
    };
});