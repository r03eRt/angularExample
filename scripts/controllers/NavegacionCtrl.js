angular.module("misPelisSeriesApp").controller("NavegacionCtrl",["$scope","$routeSegment",function($scope,$routeSegment){
	
	//comprobar la ruta actual para poner active en navbar
	$scope.rutaEsPeliculas=function(){
		return $routeSegment.startsWith("peliculas");

	};

	$scope.rutaEsSeries=function(){
		return $routeSegment.startsWith("series");
	};
}]);