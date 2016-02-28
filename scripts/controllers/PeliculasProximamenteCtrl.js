angular.module("misPelisSeriesApp").controller("PeliculasProximamenteCtrl",
	["$scope","$filter","Peliculas","ApiService","$location",function($scope,$filter,Peliculas,ApiService,$location){
	$scope.peliculas=$filter('orderBy')(Peliculas.data.results,'release_date');
	
	//ruta viene de la vista(backdrop path)
	$scope.rutaImagen=function(ruta){

		return ApiService.obtenerRutaImagen(45,ruta);
	}

	$scope.verDetalle=function(id){
		$location.path("/peliculas/detalles").search({
			idPelicula:id
		});
	}


}]);