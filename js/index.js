//https://www.coindesk.com/api/

console.clear();
//api url
var api_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// create a new module
var btc_app = angular.module('btc_app',[]);

//price controller
btc_app.controller('price', function ($scope){
	
	//update definition
	function update(round){
		
		$.getJSON(api_url, function(data){
			
			var current_btc = data.bpi.USD.rate_float;
			console.log(current_btc);

			//give unrounded number
			if(round === "round")
				$scope.btc = Math.round(current_btc);
			else	//give original number
				$scope.btc = current_btc;
			
			//flashing when trying to update
			$("#update_button").click(function() {
				$('#flash').fadeOut(100).fadeIn(100);
			});
			
			$scope.$apply();	//vital piece of the puzzle
		});
	}
	
	//initial call
	update();
	
	//update button click 
	$scope.update_price = function(){
		update();
	};
	
	//round button click
	$scope.round_toggle = function(){
		update("round");
	};
});

//cursor blinking focus
$("#focus").focus();