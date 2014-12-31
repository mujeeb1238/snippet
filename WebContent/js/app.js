'use strict';

/* App Module */

var spaApp = angular.module('spaApp', [
  'ngRoute',
  'spaControllers',
  'spaServices',
  'spaDirective'
]);



spaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/snippets', {
        templateUrl: 'partials/snippets.html',
        controller: 'SnippetsController'
      }).
      when('/create', {
          templateUrl: 'partials/createSnippet.html',
          controller: 'CreateSnippetController'
      }).
      when('/edit/:quoteId', {
            templateUrl: 'partials/editSnippet.html',
            controller: 'EditSnippetController'
      }).
      when('/delete/:quoteId', {
          templateUrl: 'partials/deleteSnippet.html',
          controller: 'DeleteSnippetController'
      }).
      otherwise({
        redirectTo: '/snippets'
      });
  }]);
