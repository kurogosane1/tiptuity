import React from "react";
import { Avatar } from "@material-ui/core";

export default function Employee({ employees }) {
  return (
    <div className="flex flex-row justify-center items-center w-8/12  h-full rounder-large">
      <div className="container flex flex-col justify-center items-center w-full ">
        <div className="flex flex-row justify-evenly items-center w-full">
          <input
            type="checkbox"
            class="form-checkbox h-6 w-6 rounded-lg outline-none"
          />
          <span>EMPLOYEE</span>
          <span>EMPLOYEE TYPE</span>
          <span>JOINED DATE</span>
          <span>MANAGE</span>
        </div>
        {employees.map((data) => {
          return (
            <div className="flex flex-row justify-between items-center mt-5 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar src={data.ImageUrl} />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">
                    {data.FirstName} {data.LastName}{" "}
                  </span>
                  <span className="text-sm text-left">{data.JobTitle}</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">{data.Date_Joined}</span>
                  <span className="text-sm text-left">{data.EmployeeType}</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">{data.Date_Joined}</span>
                  <span className="text-sm text-left">{data.EmployeeType}</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">{data.Date_Joined}</span>
                  <span className="text-sm text-left">{data.EmployeeType}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
