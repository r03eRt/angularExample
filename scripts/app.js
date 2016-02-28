angular.module("misPelisSeriesApp",["ngRoute","route-segment","view-segment"]);

angular.module("misPelisSeriesApp").config(["$routeSegmentProvider","$routeProvider",function($routeSegmnetProvider,$routeProvider){
	$routeSegmnetProvider.when("/peliculas","peliculas");
	$routeSegmnetProvider.when("/series","series");
	$routeSegmnetProvider.when("/peliculas/proximamente","peliculas.proximamente");
	$routeSegmnetProvider.when("/peliculas/cartelera","peliculas.cartelera");
	$routeSegmnetProvider.when("/series/emision","series.emision");
	$routeSegmnetProvider.when("/series/hoy","series.hoy");
	$routeProvider.otherwise({ 
		redirectTo: '/peliculas/proximamente'
	});
	$routeSegmnetProvider.when("/peliculas/detalles","peliculas.detalles");



	$routeSegmnetProvider.segment("peliculas",{
		controller:"PeliculasCtrl",
		templateUrl:"views/Peliculas.html"
	});

	$routeSegmnetProvider.within("peliculas").segment("proximamente",{
		controller:"PeliculasProximamenteCtrl",
		templateUrl:"views/PeliculasProximamente.html",
		resolve: {
			Peliculas: ["ApiService",function(ApiService){
				return ApiService.consultaApi("movie/upcoming");
			}]
		}
	});

	$routeSegmnetProvider.within("peliculas").segment("cartelera",{
		controller:"PeliculasCarteleraCtrl",
		templateUrl:"views/PeliculasCartelera.html",
		resolve:{
			Peliculas:["ApiService",function(ApiService){
				return ApiService.consultaApi("movie/now_playing");
			}]
		}
	});


	$routeSegmnetProvider.within("peliculas").segment("detalles",{
		controller:"PeliculasDetallesCtrl",
		templateUrl:"views/PeliculasDetalles.html",
		resolve:{
			Pelicula:["ApiService","$routeParams",function(ApiService,$routeParams){
				return ApiService.consultaApi("movie/"+$routeParams.idPelicula);

			}]
		}
	});




	$routeSegmnetProvider.segment("series",{
		controller:"SeriesCtrl",
		templateUrl:"views/Series.html",
	});

	$routeSegmnetProvider.within("series").segment("emision",{
		controller:"SeriesEmisionCtrl",
		templateUrl:"views/SeriesEmision.html",
		resolve:{
			Series:["ApiService",function(ApiService){
				return ApiService.consultaApi("tv/on_the_air");
			}]
		}
	});

	$routeSegmnetProvider.within("series").segment("hoy",{
		controller:"SeriesHoyCtrl",
		templateUrl:"views/SeriesHoy.html",
		resolve:{
			Series:["ApiService",function(ApiService){
				return ApiService.consultaApi("tv/airing_today");
			}]
		}
	});


}]);