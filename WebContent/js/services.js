  'use strict';

  /* Services */

  var spaServices = angular.module('spaServices', ['ngResource']);


  spaServices.factory('RESTCall', ['$http',
  function($http){
    return {
      getSnippet: function(data){
        return $http({
          method: 'GET',
          url: 'http://localhost:8080/snippet/rest/getSnippets'
        });
      },
      postSnippet: function(data){
    	 return $http({
              method: 'POST',
              url: 'http://localhost:8080/snippet/rest/createSnippet',
              data: data
            });
      },
      
      /*
       * By default tomcat will not accept PUT & DELETE calls, configure tomcat to accept PUT & DELETE
       * 
       * Performing PUT and DELETE functionalities using POST method call
       */
      
      putSnippet: function(data){
    	  return $http({
              method: 'POST',  
              url: 'http://localhost:8080/snippet/rest/editSnippet/'+data.quoteId,
              data: data              
            });
      },
      deleteSnippet: function(data){
    	  return $http({
              method: 'POST',
              url: 'http://localhost:8080/snippet/rest/deleteSnippet/'+data.quoteId
            });
      },
      getSnippetForEdit: function(quoteId){
    	  return $http({
              method: 'GET',
              url: 'http://localhost:8080/snippet/rest/getSnippets/'+quoteId
            });
      }
    };
  }
  ]);

 