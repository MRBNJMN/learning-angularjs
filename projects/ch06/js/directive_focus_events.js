var directive_focus_events = angular.module('directive_focus_events', []);

directive_focus_events.controller('directive_focus_events_cont', function($scope) {
    $scope.inputData = {
        input1: '',
        input2: ''
    };
    
    $scope.focusGained = function(input) {
        $scope.inputData[input] = '';
    };
    
    $scope.focusLost = function(event, input) {
        var element = angular.element(event.target);
        $scope.inputData[input] = element.val();
    };
});