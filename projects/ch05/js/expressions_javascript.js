var expressions_javascript = angular.module('expressions_javascript', []);
expressions_javascript.controller('array_manipulation', function($scope) {
    $scope.active_array = [];
    $scope.remove_array = [];
    $scope.active_array_max = 0;
    $scope.remove_array_max = 0;
    
    $scope.generate = function() {
        $scope.active_array.push(Math.floor(Math.random() * 100 + 1));
        $scope.active_array_max = Math.max.apply(Math, $scope.active_array);
    };
    
    $scope.remove = function() {
        var active_shift = $scope.active_array.shift();
        $scope.remove_array.push(active_shift);
        
        $scope.remove_array_max = Math.max.apply(Math, $scope.remove_array);
        if (active_shift === $scope.active_array_max) {
            $scope.active_array_max = Math.max.apply(Math, $scope.active_array);
        }
    };
});
