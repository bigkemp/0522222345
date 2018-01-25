package worklink.WorkLinkNew;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import facade.*;

import infra.WorkLinkSystem;

/**
 * Servlet implementation class Login
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Login() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	@Produces(MediaType.TEXT_PLAIN)
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name = request.getParameter("nameBox");
		String password = request.getParameter("passBox");
		String clientString = request.getParameter("radio");
		Long companyId = Long.valueOf(request.getParameter("companyBox"));

//		
//		ClientFacade ccf = null;

		String redirectURL = "";

		switch (clientString)

		{
		/*
		 * case "Admin": AdminFacade adFacade= null; try { adFacade =
		 * (AdminFacade)CouponSystem.getInstance().login(name, password, type);
		 * } catch (ClassNotFoundException | SQLException | InterruptedException
		 * | LogginErrorExcption e) { // TODO Auto-generated catch block
		 * e.printStackTrace(); };
		 * 
		 * if (adFacade!=null) {
		 * request.getSession().setAttribute("currentFacade", adFacade);
		 * redirectURL =
		 * "http://localhost:8080/wl1/admin/test.html"; } else {
		 * System.out.println("failed to log as an Administrator"); } break;
		 */

		case "Employee":
			EmployeeFacade empFacade = null;
			try {
				empFacade = (EmployeeFacade) WorkLinkSystem.getInstance().login(name, password, companyId);
			} catch (ClassNotFoundException | SQLException | InterruptedException  e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			if (empFacade != null) {
				request.getSession().setAttribute("currentFacade", empFacade);
				redirectURL = "./Employee/employee.html";
			} else {
				System.out.println("failed to log as an Employee");
			}
			break;

		case "ShiftManager":
			ShiftManagerFacade shmFacade = null;
			try {
				shmFacade = (ShiftManagerFacade) WorkLinkSystem.getInstance().login(name, password, companyId);
				System.out.println(shmFacade);

			} catch (ClassNotFoundException | SQLException | InterruptedException e) {
				e.printStackTrace();
			}
			if (shmFacade != null) {

				request.getSession().setAttribute("currentFacade", shmFacade);
				// System.out.println((request.getSession().getAttribute("currentFacade")));
				redirectURL = "./ShifManager/shifManager.html";
			} else {
				System.out.println("failed to log as a Shift Manager");
			}
			break;

		case "StoreManager":
			ShiftManagerFacade stmFacade = null;
			try {
				stmFacade = (ShiftManagerFacade) WorkLinkSystem.getInstance().login(name, password, companyId);
				System.out.println(stmFacade);

			} catch (ClassNotFoundException | SQLException | InterruptedException e) {
				e.printStackTrace();
			}
			if (stmFacade != null) {

				request.getSession().setAttribute("currentFacade", stmFacade);
				// System.out.println((request.getSession().getAttribute("currentFacade")));
				redirectURL = "./storeManager/storeManager.html";
			} else {
				System.out.println("failed to log as a Store Manager");
			}
			break;

		default:
			redirectURL = "./loginError.html";
			break;
		}

		System.out.println("at login servlet");
		System.out.println((request.getSession().getAttribute("currentFacade")));
		response.sendRedirect(redirectURL);
	}
	

}
