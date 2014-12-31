'use strict';

/* Directives */
	var spaDirective = angular.module('spaDirective',[]);
	spaDirective.directive('circle', function() {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */

        directive.link = function($scope, element, attributes) {
                
                element.css("width", attributes.width);
                element.css("height", attributes.width);
                element.css("background-color", attributes.color);
                console.log(attributes.width);
        };

        return directive;
	});