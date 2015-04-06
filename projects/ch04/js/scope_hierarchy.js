var scope_hierarchy = angular.module('scope_hierarchy', []);

scope_hierarchy.controller('level_A', function($scope) {
    $scope.level_A_num = 1;
});

scope_hierarchy.controller('level_B', function($scope) {
    $scope.level_B_num = 1;
});

scope_hierarchy.controller('level_C', function($scope) {
    $scope.level_C_num = 1;
});