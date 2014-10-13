'use strict';


var factoris = angular.module('factoris', []);

factoris.factory("zodicDescService", function ($http) {
	return {
						
		getMagicNumber: function(zodiaclink) {
			
//			var zodiaclink ="horoskooppi-harka-204-205"
//			var zodiaclink =link;
			
			//select * from html where url="http://ellit.fi/horoskoopit/horoskooppimerkit/horoskooppi-vesimies-201-192" and xpath="//div[@class='columnA']/p"			
			var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Fellit.fi%2Fhoroskoopit%2Fhoroskooppimerkit%2F"+zodiaclink+"%22%20and%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'columnA'%5D%2Fp%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK";

			return $http.jsonp(url);
				
			}
				        
	      }	
	
})
