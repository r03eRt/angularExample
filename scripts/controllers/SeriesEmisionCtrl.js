angular.module("misPelisSeriesApp").controller("SeriesEmisionCtrl",["$scope","Series",function($scope,Series){

			$scope.tvs=Series.data.results;

}]);