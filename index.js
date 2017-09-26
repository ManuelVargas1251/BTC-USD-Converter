//https://www.coindesk.com/api/
//https://www.socialexplorer.com/

// Create a new module
console.clear();
var api_url = "https://api.coindesk.com/v1/bpi/currentprice.json";

var btc_app = angular.module('btc_app',[]);
	
btc_app.controller('price', function ($scope){
	console.log("-- price controller --");
	
	$.getJSON(api_url, function(data){
		var current_btc = data.bpi.USD.rate_float;
		console.log(current_btc);
		$scope.btc = current_btc;
		$scope.$apply();	//vital piece of the puzzle
	});
	//console.log("wa " + get_price());
});


//update price
$('#update_price').click(function(){
	console.log("update price");
	
	$.getJSON(api_url, function(data){
		var current_btc = data.bpi.USD.rate_float;
		console.log(current_btc);
		$scope.btc = current_btc;
		$scope.$apply();	//vital piece of the puzzle
	});
});

//round toggle
$('#round_toggle').click(function(){
	console.log("round price");
	//get_price();
});

//$('#button').css

//cursor blinking
//$("#focus").focus();
