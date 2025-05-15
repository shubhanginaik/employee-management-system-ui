import React from "react";

const Employee = () => {
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
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="First Name"
          />
        </div>

        {/* //lastname */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <input
            type="text"
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="Last Name"
          />
        </div>
        {/* //email */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            className="border-2 border-gray-300 rounded-md p-2 m-2 h-10 w-96"
            placeholder="Email"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4">
          <button className=" bg-green-400 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-green-500">
            Save
          </button>
          <button className=" bg-red-400 text-white font-semibold py-2 px-4 rounded cursor-pointer hover:bg-red-500 ">
            clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default Employee;
