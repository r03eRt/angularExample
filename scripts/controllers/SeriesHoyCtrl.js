angular.module("misPelisSeriesApp").controller("SeriesHoyCtrl",["$scope","Series",function($scope,Series){
	
			$scope.tvs=Series.data.results;
		
}]);