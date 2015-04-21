var directive_custom_dom = angular.module('directive_custom_dom', []);

directive_custom_dom.controller('directive_custom_dom_controller', function($scope) {
    $scope.title = "myApplication";
});

directive_custom_dom.directive('mybox', function() {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            bwidth: '@'
        },
        transclude: true,
        template: '<div>' +
            '<span class="titleBar">{{title}}</span>' +
            '<div ng-transclude></div>' +
            '</div>',
        link: function(scope, elem) {
            elem.append('<span class="footer">' + scope.$parent.title + '</span>');
            elem.css('border', '2px ridge black');
            elem.css('display', 'inline-block');
            elem.css('width', scope.bwidth);
        }
    };
});