angular.module("misPelisSeriesApp").directive("mediaItem",["ApiService",function(ApiService){
    return {
        restrict: "AE",//elemento como atributo
        replace:true,//directiva reemplazara elemento del DOM
        teamplateUrl:"views/MediaItem.html",
        scope:{
            datos:"=",//enlazo cada elemento pelicula
            alSeleccionar:"&"
        },
        link:function(scope){
            scope.rutaImagen=function(ruta){

                return ApiService.obtenerRutaImagen(45,ruta);
            };

            scope.clickEnMedia=function(id){
                debugger
                scope.alSeleccionar({mediaId:id});
            };
        }
    };
}]);