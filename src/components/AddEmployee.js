import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    // Validate the form
    if (
      !employee.firstName?.trim() ||
      !employee.lastName?.trim() ||
      !employee.email?.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
        alert("Error adding employee");
      });
  };
  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div>
      <div
        className="flex flex-col max-w-2xl  
    shadow border-b mx-auto"
      >
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1> Add New Employee</h1>
          </div>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 font-semibold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            required
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="First Name"
          />
        </div>

        {/* //lastname */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            required
            onChange={(e) => handleChange(e)}
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="Last Name"
          />
        </div>
        {/* //email */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            required
            onChange={(e) => handleChange(e)}
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="Email"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4">
          <button
            className=" bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-green-500"
            onClick={saveEmployee}
          >
            Save
          </button>
          <button
            onClick={reset}
            className=" bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-red-500 "
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
