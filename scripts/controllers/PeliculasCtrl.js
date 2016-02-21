angular.module("misPelisSeriesApp").controller("PeliculasCtrl",["$scope","$routeSegment",function($scope,$routeSegment){
	

	$scope.rutaEsCartelera=function(){
		return $routeSegment.startsWith("peliculas.cartelera");
	};


	$scope.rutaEsProximamente=function(){
		return $routeSegment.startsWith("peliculas.proximamente");
	};

}]);