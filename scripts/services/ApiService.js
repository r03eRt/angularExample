angular.module("misPelisSeries").services("ApiService",["$http",function($http){

	this.consultaApi=function(servicio){

		
		return $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=ccaf7bb76ee50f227f4c7d1cb483d83d");

	}
}]);