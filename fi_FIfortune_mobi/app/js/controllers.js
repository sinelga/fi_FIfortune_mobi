'use strict';


var app = angular.module('controllers', ['zodiacsmaker']);

app.controller('LoadCtrl', function ($scope,makezodiacs) {
	
	$scope.zodiacSelected = false;
	
	
	
	$scope.zodiacs =makezodiacs.zodiacs;
	
	
	  $scope.selectZodiac = function(zodiac) {
		  
		  	$scope.zodiacSelected = true;
		  	$scope.zodiacSelectedObj = zodiac;
		  			
//			$scope.selectedCharacter=character;
//			$scope.charaterSelected = true;
//			$scope.placeholderstr = "Hei "+character.name+"!"
			
		}
	
});







