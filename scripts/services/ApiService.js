angular.module("misPelisSeriesApp").service("ApiService",["$http","configuracion",function($http,configuracion){

//uso .this para acceder desde cualquier punto,sino no lo puedo llmar desde fuera como un public

	this.consultaApi=function(servicio){

		var url="https://api.themoviedb.org/"
			+configuracion.apiVersion+"/"
			+servicio+"?api_key="
			+configuracion.apiKey;
		return $http.get(url);
	};


	this.obtenerRutaImagen=function(tamanyo,ruta){

		return ruta==null ?null :configuracion.rutaImagenApi+tamanyo+ruta;
	};

}]);


