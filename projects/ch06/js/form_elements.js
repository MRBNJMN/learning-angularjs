var form_elements = angular.module('form_elements', []);

form_elements.controller('form_elements_ctrl', function($scope) {
    $scope.cameras = [
        {make: "Canon", model: "70D"},
        {make: "Canon", model: "6D"},
        {make: "Nikon", model: "D7100"},
        {make: "Nikon", model: "D5200"}
    ];
    
    $scope.form_text = "";
    $scope.form_checkbox = "Not so checked!";
    $scope.form_radio = "Second!";
    $scope.camera = $scope.cameras[0];
});