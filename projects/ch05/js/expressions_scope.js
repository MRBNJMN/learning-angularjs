var expressions_scope = angular.module('expressions_scope', []);

expressions_scope.controller('trans', function($scope) {
    $scope.speed = 'Slow';
    $scope.vehicle = 'Train';
    
    $scope.set_values = function(speed_ref, vehicle_ref) {
        $scope.speed = speed_ref;
        $scope.vehicle = vehicle_ref;
    }
    
    $scope.lower = function(to_lower) {
        return angular.lowercase(to_lower);
    }

    $scope.upper = function(to_upper) {
        return angular.uppercase(to_upper);
    }
});