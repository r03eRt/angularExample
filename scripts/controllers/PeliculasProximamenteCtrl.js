angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl",
	["$scope","$filter","Peliculas","ApiService","$location",function($scope,$filter,Peliculas,ApiService,$location){
	$scope.peliculas=$filter('orderBy')(Peliculas.data.results,'release_date');

	$scope.verDetalle=function(id){
		$location.path("/peliculas/detalles").search({
			idPelicula:id
		});
	}


}]);