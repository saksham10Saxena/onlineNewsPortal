angular.module('aim').controller('topNews',function($scope,$routeParams,$http){
	$scope.channelId=$routeParams.channelId;
	$http.get('https://newsapi.org/v1/articles?source='+$scope.channelId+'&apiKey=eb3823b39f254191a9ed091f12728ae6&sortBy=top').then(
		function(response){
			// alert(response.status);
			$scope.articles=response.data.articles;
		},
		function(error){
			if(error.data.status=="error"){
				$scope.error="no data";
			}
		}
	);
	
});