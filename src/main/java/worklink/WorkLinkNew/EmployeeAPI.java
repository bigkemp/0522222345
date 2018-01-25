package worklink.WorkLinkNew;


import java.sql.Date;
//import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
//import java.util.Collection;
import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
//import javax.ws.rs.core.Response;

import facade.EmployeeFacade;
import infra.*;
//import exceptions.CompanyAlreadyExist;

/**
 * Root resource (exposed at "employeeAPI" path)
 */
@Path("/employeeAPI")
public class EmployeeAPI {

	@Context
	HttpServletRequest request;
	@Context
	private HttpServletResponse response;

	/**
	 * simple get method to check if the service is on
	 * 
	 * @return simple string to inform the user/tester that the service is on
	 */
	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String getIt() {
		return "Got it on employeeService!";
	}

	/**
	 * a private method to return the facade attribute checks if the session is
	 * still on
	 * 
	 * @return facade attribute
	 */

	private EmployeeFacade getEmployeeFacade() {
		return ((EmployeeFacade) request.getSession().getAttribute("currentFacade")); 
	}

	// 1 // gets a collection of shifts the employee can not work at, insert
	// into working order table
	@POST
	@Path("/sendShiftRequests")
	@Consumes(MediaType.APPLICATION_JSON)
	public void sendShiftRequests(Collection<Request> shfitRequests)
			throws ClassNotFoundException, SQLException, InterruptedException {
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		empolyeefacade.sendShiftRequests(shfitRequests);
	}

	// 2 // update personal info restricted to password, email, and phone only
	@POST
	@Path("/upadateMyInfo")
	@Consumes(MediaType.APPLICATION_JSON)
	public void upadateMyInfo(Employee employee) throws ClassNotFoundException, SQLException, InterruptedException {
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		empolyeefacade.upadateMyInfo(employee);
	}

	// 3 // returns all employees working at your firm - for contact purposes &
	// for shift build
	@GET
	@Path("/getAllEmployees")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Employee> getAllEmployees() throws ClassNotFoundException, SQLException, InterruptedException {
		System.out.println("inside getAllEmployees resource");
		Collection<Employee> employeeList = new ArrayList<Employee>();
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		System.out.println(empolyeefacade);
		employeeList = empolyeefacade.getAllEmployees();
		System.out.println(employeeList);
		return employeeList;
	}

	// 5 // this function set the dates for the shift function (1) for this
	// current week - returns a collection of shifts
	@GET
	@Path("/thisWeekShifts")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Shift> thisWeekShifts() throws ClassNotFoundException, SQLException, InterruptedException {
		System.out.println("im at thisWeekShifts at serviceAPI " );
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		Collection<Shift> thisWeekShifts = empolyeefacade.thisWeekShifts();
//		System.out.println(" registered date:" + WorkLinkSystem.localDate);
		System.out.println("thisWeekShifts = "+thisWeekShifts);
		return thisWeekShifts;
	}

	// 6 // this function receives dates from user and set the dates for the
	// shift function (1) for those dates - returns a collection of shifts
	@GET
	@Path("/someWeekShifts/{Date1}/{Date2}")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Shift> someWeekShifts(@PathParam("Date1") String Date1, @PathParam("Date2") String Date2)
			throws ClassNotFoundException, SQLException, InterruptedException {
		System.out.println("someWeekShifts at service api");
		System.out.println(Date1);
		System.out.println(Date2);
		Date startDate = Date.valueOf(Date1);
		Date startEnd = Date.valueOf(Date2);
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		System.out.println("someWeekShifts " + empolyeefacade);
		Collection<Shift> someWeekShifts = empolyeefacade.someWeekShifts(startDate, startEnd);
		System.out.println(someWeekShifts);
		return someWeekShifts;

	}

	// 7 // this function set the dates for the shift function (1) for this
	// current week - returns a collection of shifts
	@GET
	@Path("/nextWeekShifts")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Shift> nextWeekShifts() throws ClassNotFoundException, SQLException, InterruptedException {
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		Collection<Shift> nextWeekShifts = empolyeefacade.nextWeekShifts();
		return nextWeekShifts;
	}

	// 8 // update my requests
	@POST
	@Path("/updateRequests")
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateRequests(Collection<Request> thisWeekRequests)
			throws ClassNotFoundException, SQLException, InterruptedException {
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		empolyeefacade.updateRequests(thisWeekRequests);
	}

	// 10 // gets the requests for next week of the user
	@GET
	@Path("/getMyRequests")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Request> getMyRequests() throws ClassNotFoundException, SQLException, InterruptedException {
		System.out.println("im at getMyRequests");
		EmployeeFacade empolyeefacade = getEmployeeFacade();
		
		Collection<Request> myRequests = empolyeefacade.getMyRequests();
		System.out.println("myRequests");
		return myRequests;
	}

	// 11 // request vacations
	@POST
	@Path("/requestVacations")
	@Consumes(MediaType.APPLICATION_JSON)
	public void requestVacations(Collection<Date> vacDates)
			throws ClassNotFoundException, SQLException, InterruptedException {
			EmployeeFacade empolyeefacade = getEmployeeFacade();
			empolyeefacade.requestVacations(vacDates);
	}

}
