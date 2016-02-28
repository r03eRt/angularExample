angular.module("misPelisSeriesApp").controller("PeliculasCarteleraCtrl",["$scope","Peliculas","ApiService",function($scope,Peliculas,ApiService){

			$scope.peliculas=Peliculas.data.results;
				//ruta viene de la vista(backdrop path)
			$scope.rutaImagen=function(ruta){

				return ApiService.obtenerRutaImagen(45,ruta);
			}

}]);