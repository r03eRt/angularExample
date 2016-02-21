angular.module("misPelisSeriesApp",["ngRoute","route-segment","view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider",function($routeSegmnetProvider){
	$routeSegmnetProvider.when("/peliculas","peliculas");
	$routeSegmnetProvider.when("/series","series");
	$routeSegmnetProvider.when("/peliculas/proximamente","peliculas.proximamente");
	$routeSegmnetProvider.when("/peliculas/cartelera","peliculas.cartelera");
	$routeSegmnetProvider.when("/series/emision","series.emision");
	$routeSegmnetProvider.when("/series/hoy","series.hoy");



	$routeSegmnetProvider.segment("peliculas",{
		controller:"PeliculasCtrl",
		templateUrl:"views/Peliculas.html"
	});

		$routeSegmnetProvider.within("peliculas").segment("proximamente",{
			controller:"PeliculasProximamenteCtrl",
			templateUrl:"views/PeliculasProximamente.html"
		});

		$routeSegmnetProvider.within("peliculas").segment("cartelera",{
			controller:"PeliculasCarteleraCtrl",
			templateUrl:"views/PeliculasCartelera.html"
		});

	$routeSegmnetProvider.segment("series",{
		controller:"SeriesCtrl",
		templateUrl:"views/Series.html"
	});
		$routeSegmnetProvider.within("series").segment("emision",{
			controller:"SeriesEmisionCtrl",
			templateUrl:"views/SeriesEmision.html"
		});

		$routeSegmnetProvider.within("series").segment("hoy",{
			controller:"SeriesHoyCtrl",
			templateUrl:"views/SeriesHoy.html"
		});


}]);