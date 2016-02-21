angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl",["$scope","$http",function($scope,$http){



	$http
		.get("https://api.themoviedb.org/3/movie/upcoming?api_key=ccaf7bb76ee50f227f4c7d1cb483d83d")
			.then(

			function(resultado){
			$scope.peliculas=resultado.data.results;

			},function(){
				alert('Algo no salio bien');
			}
		);



}]);