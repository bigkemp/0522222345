var app = angular.module('employeeApp', ['ngRoute']);

// disable http get caching (for internet explorer)
app.config(function($httpProvider){
	  $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';
	  $httpProvider.defaults.cache = false;

	  if (!$httpProvider.defaults.headers.get) {
	      $httpProvider.defaults.headers.get = {};
	  }
	  $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
});

// configure our routes
app.config(['$routeProvider' ,function($routeProvider) { 
	$routeProvider
		
	
//	 route for the coupons list
	.when('/', 
	{
		templateUrl : 'employeeMenu.html',
		controller  : 'employeeMenuController as employeeMenuController'
	})	

	.when('/thisWeekShifts', 
			{
				templateUrl : 'thisWeekShifts.html',
				controller  : 'thisWeekShiftsController as thisWeekShiftsController'
			}
	);
//	console.log("using router")
}]);
