var filter_sort = angular.module("filter_sort", []);
filter_sort.controller("plane_sort", ["$scope", "strongFilter", function($scope, myStrongFilter) {
    $scope.planes = [
        {make: "Boeing", model: "777", capacity: 440},
        {make: "Boeing", model: "747", capacity: 700},
        {make: "Airbus", model: "A380", capacity: 850},
        {make: "Airbus", model: "A340", capacity: 420},
        {make: "McDonnell", model: "DC10", capacity: 380},
        {make: "McDonnell", model: "MD11", capacity: 410},
        {make: "Lockheed", model: "L1011", capacity: 380}
    ];
    $scope.filtered_planes = angular.copy($scope.planes);
    
    $scope.filter_string = '';
    
    $scope.column = 'make';
    $scope.reverse = false;
    
    $scope.set_sort = function(column_val) {
        if ($scope.column === column_val) {
            $scope.reverse = !($scope.reverse);
        }
        else {
            $scope.column = column_val;
            $scope.reverse = false;
        }
    };
    
    $scope.set_filter = function() {
        $scope.filtered_planes = angular.copy($scope.planes);
        $scope.filtered_planes = myStrongFilter($scope.filtered_planes, $scope.filter_string);
    };
}]);

filter_sort.filter('strong', function() {
    return function(planes_ref, filter_string_ref) {
        if (filter_string_ref) {
            for (var i = 0; i < planes_ref.length; i++) {
                for (var key in planes_ref[i]) {
                    var value = planes_ref[i][key];
                    planes_ref[i][key] =
                        value.toString().replace(filter_string_ref, "[" + filter_string_ref + "]");
                }
            }
        }
        
        return planes_ref;
    };
});