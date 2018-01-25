(function() {
	var employeeApp = angular.module('employeeApp');
	employeeApp.service('employeeWebService', employeeWebService);

	function employeeWebService($http) {
		//console.log("got into webservice")
		var self = this;

		// 1 // sendShiftRequests
		self.sendShiftRequests = function(requests) {
			console.log("im at sendShiftRequests")
			$http
					.post("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/sendShiftRequests",requests);
		}

		// 2 // upadateMyInfo
		self.upadateMyInfo = function(employee) {
			console.log("im at upadateMyInfo")
			console.log("data received " + employee)
			$http
					.post("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/upadateMyInfo", employee);
		}

		// 3 // getAllemployeeAPIs
/*		self.getAllemployeeAPIs = function() {
			console.log("im at getAllemployeeAPIs at the web service")
			var promise = $http
					.get("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/getAllemployeeAPIs");
			var promise2 = promise.then(function(response) {
				return response.data;
			});
			return promise2;
		}
*/
		
		self.getAllEmployees = function()
		{
			console.log("got into webservice getAllemployees")
			var promise =  $http.get("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/getAllEmployees");
			var promise2 = promise.then(function(response){
				return response.data;
				console.log(response.data);
			});
			return promise2;
		}
		
		
		
		
		
		// 5 // thisWeekShifts
		self.thisWeekShifts = function() {
			console.log("im at thisWeekShifts")
			var promise = $http
					.get("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/thisWeekShifts");
			var promise2 = promise.then(function(response) {
				return response.data;
			});
			return promise2;
		}

		// 6 // someWeekShifts
		self.someWeekShifts = function(Date1, Date2) {
			console.log("im at someWeekShifts");
			console.log("data received date start" + Date1);
			console.log("data received date end" + Date2);
			var startDate = Date1.toISOString().substring(0, 10);
			var endDate = Date2.toISOString().substring(0, 10);
			
			var promise = $http
					.get(
							"http://localhost:8080/WorkLinkNew/webapi/employeeAPI/someWeekShifts/{startDate}/{endDate}",
							startDate, endDate );
			var promise2 = promise.then(function(response) {
				return response.data;
			});
			return promise2;
		}

		// 7 // nextWeekShifts
		self.nextWeekShifts = function() {
			console.log("im at nextWeekShifts")

			var promise = $http
					.get("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/nextWeekShifts");
			var promise2 = promise.then(function(response) {
				return response.data;
			});
			return promise2;
		}

		// 8 // updateRequests
		self.updateRequests = function(requests) {
			console.log("im at updateRequests")
			console.log("date received requests list " + requests)

			$http
					.post(
							"http://localhost:8080/WorkLinkNew/webapi/employeeAPI/updateRequests",
							requests);
		}

		// 10 // getMyRequests
		self.getMyRequests = function() {
			var promise = $http
					.get("http://localhost:8080/WorkLinkNew/webapi/employeeAPI/getMyRequests");
			var promise2 = promise.then(function(response) {
				return response.data;
			});
			return promise2;
		}

		// 11 // requestVacations
		self.requestVacations = function(requests) {
			console.log("im at requestVacations")
			console.log("date received vacations list " + requests)

			$http
					.post(
							"http://localhost:8080/WorkLinkNew/webapi/employeeAPI/requestVacations",
							requests);
		}

	}
})();
