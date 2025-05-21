import React from "react";

const Employee = ({ employee, deleteEmployee }) => {
  return (
    <>
      <tr key={employee.id} className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b">{employee.firstName}</td>
        <td className="px-4 py-2 border-b">{employee.lastName}</td>
        <td className="px-4 py-2 border-b">{employee.email}</td>
        <td className="px-4 py-2 border-b text-right">
          <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
            Edit
          </button>
          <button
            onClick={(e) => deleteEmployee(e, employee.empId)}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 ml-2"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Employee;
