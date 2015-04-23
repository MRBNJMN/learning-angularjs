var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('myController', function($scope) {
    $scope.myImgClass = 'start-class';
});

myApp.animation('.fadeOut', function() {
    return {
        enter: function(element, parentElement, afterElement, doneCallback) {
            
        },
        leave: function(element, doneCallback) {
            
        },
        move: function(element, parentElement, afterElement, doneCallback) {
            
        },
        addClass: function(element, className, done) {
            jQuery(element).animate({opacity: 0}, 250);
        },
        removeClass: function(element, className, done) {
            jQuery(element).animate({opacity: 1}, 250);
        }
    };
});