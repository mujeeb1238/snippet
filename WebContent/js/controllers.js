'use strict';

/* Controllers */

var spaControllers = angular.module('spaControllers', ['ngRoute']);



spaControllers.controller('SnippetsController', ['$scope', 'RESTCall','$location',
  function($scope, RESTCall, $location) {
	
		    RESTCall.getSnippet({}).then(function(data){
		    	console.log("Success Data: "+data);
		    	$scope.snippets = data;
		    },function(data){
		    	console.log("Error Data: "+data);
		    	$scope.snippets = [];
		    });
		  

  }]);


spaControllers.controller('CreateSnippetController', ['$scope', 'RESTCall','$location',                                
	  function($scope, RESTCall, $location) {       
	
	    console.log("CreateSnippetsController called..!");
	    $scope.create = function(e){
	    	
	    	var data = $scope.formData;
	    	
	    	RESTCall.postSnippet(data).then(function(data){
		    	console.log("Success Data: "+data);
		    	$scope.snippets = [];
		    	$location.path('/snippets');
		    },function(data){
		    	console.log("Error Data: "+data);
		    	$scope.snippets = [];		    	
		    
		    });
	    	
	    }
		
	  }]);

spaControllers.controller('EditSnippetController', ['$scope', 'RESTCall','$routeParams','$location', 
                                                    
	  function($scope, RESTCall, $routeParams,$location) {       
	    console.log("EditSnippetsController called..!"+$routeParams.quoteId);
	    
	    RESTCall.getSnippetForEdit($routeParams.quoteId).then(function(data){
	    	console.log("Success Data: "+data);
	    	$scope.formData = data.data;
	    	
	    },function(data){
	    	console.log("Error Data: "+data);
	    	$scope.snippets = [];
	    });
    	
    	
	    $scope.edit = function(){
	    	
	    	var data = {};
	    	var data = $scope.formData;
	    	data.quoteId = $routeParams.quoteId;
	    	
	    	RESTCall.putSnippet(data).then(function(data){
		    	console.log("Success Data: "+data);
		    	$scope.snippets = data;
		    	$location.path('/snippets');
		    },function(data){
		    	
		    });
	    	
	    }
	 	
	   }]);


spaControllers.controller('DeleteSnippetController', ['$scope', 'RESTCall','$location','$routeParams',                                
	  function($scope, RESTCall, $location,$routeParams) {       
	
		    $scope.delete = function(){
		    	
		    	var data = {};
		    	data.quoteId = $routeParams.quoteId;
		    	
		    	RESTCall.deleteSnippet(data).then(function(data){
				    	console.log("Success Data: "+data);
				    	$scope.snippets = data;
				    	$location.path("/snippets");
				 },function(data){
					 
				 });
		    	
		    };
	 	
	   }]);

