'use strict';


var app = angular.module('controllers', ['zodiacsmaker','luckytellersmaker','factoris']);

app.controller('LoadCtrl', function ($scope,makezodiacs,makeluckytellers,zodicDescService) {
	
	
	$scope.zodiacSelected = false;
		
	$scope.zodiacs =makezodiacs.zodiacs;
	var luckytellers =makeluckytellers.luckytellers; 
	
	
	  $scope.selectZodiac = function(zodiac) {
		  
		  	$scope.zodiacSelected = true;
		  	$scope.zodiacSelectedObj = zodiac;
		  	
		  	var rndnb = Math.floor((Math.random()*11))
		  	
		  	$scope.luckyteller =luckytellers[rndnb];
		  	$scope.luckytellerId = rndnb;
		  	
		  	var promise = zodicDescService.getMagicNumber(zodiac.link);
		  	
		  	promise.then(
		  			function(payload) { 
		  				
		  				var outitems = payload.data["query"]["results"]["p"];
		  				$scope.zodiacdesc =outitems[0];
		  						  				
		  			},
		  			function(errorPayload) {
		                $log.error('failure loading movie', errorPayload);		  			}    
		  					  			
		  	)		 		  	
			
		}
	  
	  $scope.closeLuckyteller = function() {
		  
		  $scope.zodiacSelected = false;
	  }
	  	  
	
});







