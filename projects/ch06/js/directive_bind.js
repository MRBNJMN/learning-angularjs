var directive_bind = angular.module('directive_bind', []);

directive_bind.controller('directive_bind_controller', function($scope) {
    $scope.colors = ["red", "green", "blue"];
    $scope.my_style = {
        "background-color": "blue"
    };
    $scope.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    $scope.msg = "Dynamic message from the model";
    $scope.checked = true;
});
