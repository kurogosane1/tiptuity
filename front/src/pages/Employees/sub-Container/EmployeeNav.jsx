import React from "react";

export default function EmployeeNav() {
  return (
    <div className="flex flex-row justify-between items-center px-11 pt-5 mt-1 mb-2">
      <h1 className="text-center text-2xl">Employee</h1>
      <button className="bg-green-600 rounded-full px-3 py-2 text-green-100">
        Add Employee
      </button>
    </div>
  );
}
