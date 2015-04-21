var myApp = angular.module('myApp', []);

myApp.directive('zoomit', function() {
    return {
        link: function(scope, elem) {
            var dragging = false;
            var lastX = 0;
            
            elem.on('mousedown', function(event) {
                lastX = event.pageX;
                event.preventDefault();
                dragging = true;
            });
            
            elem.on('mouseup', function(event) {
                dragging = false;
            });
            
            elem.on('mouseleave', function(event) {
                dragging = false;
            });
            
            elem.on('mousemove', function(event) {
                if (dragging) {
                    var adjustment = null;
                    var width = elem.width();
                    var height = elem.height();
                    
                    if (event.pageX > lastX && width < 300) {
                        adjustment = 1.1;
                    }
                    else if (width > 100) {
                        adjustment = .9;
                    }
                    
                    if (adjustment) {
                        elem.width(width * adjustment);
                        elem.height(height * adjustment);
                    }
                    
                    lastX = event.pageX;
                }
            });
        }
    }
});

myApp.directive('fadeit', function() {
    return {
        link: function(scope, elem) {
            var dragging = false;
            var lastY = 0;

            elem.on('mousedown', function(event) {
                lastY = event.pageY;
                event.preventDefault();
                dragging = true;
            });

            elem.on('mouseup', function(event) {
                dragging = false;
            });

            elem.on('mouseleave', function(event) {
                dragging = false;
            });

            elem.on('mousemove', function(event) {
                if (dragging) {
                    var adjustment = null;
                    var currentOpacity = parseFloat(elem.css("opacity"));
                    
                    if (event.pageY > lastY && currentOpacity < 1) {
                        adjustment = 1.1;
                    }
                    else if (currentOpacity > 0.5) {
                        adjustment = .9
                    }

                    if (adjustment) {
                        elem.css("opacity", currentOpacity * adjustment);
                    }

                    lastY = event.pageY;
                }
            });
        }
    }
});