import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();

        setEmployees(response.data);
        console.log("Employees fetched successfully:", response.data);
      } catch (error) {
        setError(error);
        console.log("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id)
      .then((response) => {
        if (employees) {
          setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee.empId !== id)
          );
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error deleting employee");
      });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-slate-500 text-white px-6 py-2 rounded cursor-pointer font-semibold hover:bg-slate-600"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-300">
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-medium uppercase tracking-wider">
                First Name
              </th>
              <th className="px-4 py-2 text-left font-medium uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-4 py-2 text-left font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-2 text-right font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {loading ? (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            </tbody>
          ) : error ? (
            <tbody>
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Error: {error.message}
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {employees.map((employee, index) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.empId || index}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
