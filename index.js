//https://www.coindesk.com/api/
//https://www.socialexplorer.com/

// Create a new module
console.clear();
var i = 0;
//var btc_json = "https://api.coindesk.com/v1/bpi/currentprice.json";

var btc_app = angular.module('btc_app',[]);
	
btc_app.controller('price', function ($scope){
	//var current_btc = 5;
	console.log("controller!");
	
	$.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function(data){
		var current_btc = data.bpi.USD.rate_float;
		console.log(current_btc);
		//console.log(i++ + ": btc: " + "g");
		
		//var my = current_btc;
		
		
	});
	
	//var my = current_btc;
	//	console.log("current_btc: "+ my);
	//$scope.btc = 5;
	
	//current_btc = 9;
});






