//https://www.coindesk.com/api/

console.clear();
// create a new module
var btc_app = angular.module('btc_app',[]);

//api url
var api_url = "https://api.coindesk.com/v1/bpi/currentprice.json";

//price controller
btc_app.controller('price', function ($scope){
	console.log("-- price controller --");
	
	//initial api get
	$.getJSON(api_url, function(data){
		var current_btc = data.bpi.USD.rate_float;
		console.log(current_btc);
		$scope.btc = current_btc;
		$scope.$apply();	//vital piece of the puzzle
	});
	
	//when update button clicked 
	$scope.update_price = function(){
		$.getJSON(api_url, function(data){
			var current_btc = data.bpi.USD.rate_float;
			console.log(current_btc);
			$scope.btc = current_btc;
			$scope.$apply();	//vital piece of the puzzle
		});
	};
	
	$scope.round_toggle = function(){
		console.log("round!");
		//$scope.btc = Math.round(current_btc);
		
		$.getJSON(api_url, function(data){
			var current_btc = data.bpi.USD.rate_float;
			console.log(current_btc);
			$scope.btc = Math.round(current_btc);
			$scope.$apply();	//vital piece of the puzzle
		});
	};
		
});

//cursor blinking focus
//$("#focus").focus();