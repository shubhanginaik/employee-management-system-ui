const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";
import axios from "axios";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }
}
export default new EmployeeService();
