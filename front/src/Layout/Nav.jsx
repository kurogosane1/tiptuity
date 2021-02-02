import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex flow-row justify-between items-center bg-gray-200 gap-6 p-3 shadow-none">
      <div className="flex">
        <h2 className="text-3xl ml-8">Tiptuity</h2>
      </div>
      <div className="flex flex-row justify-start items-center justify-items-auto gap-8">
        <NavLink to="/">Statistics</NavLink>
        <NavLink to="/">Employee</NavLink>
        <NavLink to="/">Client</NavLink>
      </div>
      <div className="flex flex-row justify-between items-center gap-2 mr-8">
        <p>icons</p>
        <p>icons</p>
        <p>icons</p>
      </div>
    </div>
  );
}
