var app = angular.module('employeeApp');

app
		.controller(
				"thisWeekShiftsController",
				[
						'$compile',
						'$window',
						'$http',
						'employeeWebService',
						'$scope',
						'$filter',
						function($compile, $window, $http, employeeWebService,
								$scope, $filter) {

							var vm = this;
							vm.thisWeekShifts = "";
							vm.tws = "";
							vm.MyRequests = "";
							var week = 0;
							vm.week = week;
							vm.shift = "";

							vm.sunMShift = "";
							vm.sunNShift = "";
							vm.sunEShift = "";
								vm.monMShift = "";
								vm.monNShift = "";
								vm.monEShift = "";
									vm.tueMShift = "";
									vm.tueNShift = "";
									vm.tueEShift = "";
										vm.wedMShift = "";
										vm.wedNShift = "";
										vm.wedEShift = "";
											vm.thuMShift = "";
											vm.thuNShift = "";
											vm.thuEShift = "";
												vm.friMShift = "";
												vm.friNShift = "";
												vm.friEShift = "";
													vm.satMShift = "";
													vm.satNShift = "";
													vm.satEShift = "";

							// console.log("inside employeeWebService");
							//					
							// this.getShiftEmployees(index)
							// {
							// this.employees =
							// thisWeekShifts(index).shift_employees
							// };

							if (week == 0) {
								(employeeWebService.thisWeekShifts()
										.then(
												function(data) {
													console.log(data);

													vm.thisWeekShifts = data;
													for (var i = 0; i < vm.thisWeekShifts.length; i++) {

														vm.shift = vm.thisWeekShifts[i];
//														console.log(vm.shift);
														this.shiftDate = new Date();
														this.shiftDate
																.setYear(vm.shift.shift_date
																		.slice(
																				0,
																				4));
														this.month = (parseInt(vm.shift.shift_date
																.slice(5, 7))) - 1;
														this.shiftDate
																.setMonth(month);
														this.shiftDate
																.setDate(vm.shift.shift_date
																		.slice(
																				8,
																				10));

//														console.log(this.shiftDate.getDay());

														switch (this.shiftDate
																.getDay()) {

														case 0:
															if (vm.shift.shiftTitle == "morning")
																vm.sunMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.sunNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.sunEShift = vm.shift;
															break;

														case 1:
															if (vm.shift.shiftTitle == "morning")
																vm.monMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.monNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.monEShift = vm.shift;
															break;

														case 2:
															if (vm.shift.shiftTitle == "morning")
																vm.tueMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.tueNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.tueEShift = vm.shift;
															break;

														case 3:
															if (vm.shift.shiftTitle == "morning")
																vm.wedMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.wedNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.wedEShift = vm.shift;
															break;

														case 4:
															if (vm.shift.shiftTitle == "morning")
																vm.thuMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.thuNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.thuEShift = vm.shift;
															break;

														case 5:
															if (vm.shift.shiftTitle == "morning")
																vm.friMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.friNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.friEShift = vm.shift;
															break;

														case 6:
															if (vm.shift.shiftTitle == "morning")
																vm.satMShift = vm.shift;
															else if (vm.shift.shiftTitle == "noon")
																vm.satNShift = vm.shift;
															else if (vm.shift.shiftTitle == "evening")
																vm.satEShift = vm.shift;
															break;

														default:
															console.log(vm.shift + "undefined");
															break;
														}
													}
												},

												function(data) {

													console.log(data);
												}));

							}

							(this.shiftIndex = function() {
								vm.week = vm.week + 1;
								vm.someWeekShifts();
							});

							(this.someWeekShifts = function() {
								var dateStart = new Date();
								console.log(dateStart);
								var days = vm.week * 7;
								console.log(days);
								dateStart.setDate((dateStart.getDate()) + days);
								console.log(dateStart);
								var dateS = dateStart;

								employeeWebService.someWeekShifts(dateS, dateS)
										.then(function(data) {
											console.log(data);

											vm.employees = data;
										},

										function(data) {
											console.log(data);
										});
								// location.reload();
							});

							// / function to set sorting table - problem with
							// returning
							// data from employeeServerAPI to loacalWebServer
							/*
							 * (employeeWebService.thisWeekShifts().then(function(data) {
							 * console.log(data);
							 * 
							 * vm.tws = data; },
							 * 
							 * function(data) { console.log(data); }));
							 */
							// ////////////////////////////////////////////////
							// getAllEmployees - works :)
							/*
							 * employeeWebService.getAllEmployees().then(function(data) {
							 * 
							 * console.log(data); vm.employees = data; },
							 * 
							 * function(data) { console.log(data); });
							 * 
							 */
							// ////////////////////////////////////////////////
							/*
							 * vm.startDate = ''; vm.endDate = '';
							 * vm.shiftsOfDates = '';
							 * 
							 * (this.applyCreate = function() {
							 * 
							 * console.log(vm.startDate);
							 * console.log(vm.endDate);
							 * employeeWebService.someWeekShifts(vm.startDate,
							 * vm.endDate) .then(function(data) {
							 * console.log(data); vm.shiftsOfDates; },
							 * 
							 * function(response) { console.log(response.data);
							 * }); });
							 */

							// someWeekShifts/{Date1}/{Date2}
						} ])

// app.directive('shiftView', function() {
// return {
// scope : true, // inherits parent scope
// templateUrl : 'shiftTAG.html', // url of injectel html piece
// restrict : 'AE', // default definition to interact as attribute and
// // an element
// replace : false
// }
// });
