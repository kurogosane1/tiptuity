import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export default function Employees() {
  const employees = [
    {
      First_Name: "John",
      Last_Name: "Doe",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Valet",
      Wage: "Hourly",
      Client: "Cafe Kora",
      Tips_Collected: 3200,
      EmploymentDate: "01 / 05 / 2020",
    },
    {
      First_Name: "James",
      Last_Name: "Anderson",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Valet",
      Wage: "Hourly",
      Client: "Bijan",
      Tips_Collected: 60,
      EmploymentDate: "01 / 05 / 2020",
    },
    {
      First_Name: "Neil",
      Last_Name: "Gaiman",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Valet",
      Wage: "Hourly",
      Client: "Bijan",
      Tips_Collected: 600,
      EmploymentDate: "01 / 05 / 2020",
    },
    {
      First_Name: "Dirk",
      Last_Name: "Gaiman",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Manager",
      Wage: "Salary",
      Client: "Bismillah",
      Tips_Collected: 200,
      EmploymentDate: "01 / 05 / 2020",
    },
    {
      First_Name: "Dan",
      Last_Name: "George",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Manager",
      Wage: "Salary",
      Client: "Bismillah",
      Tips_Collected: 200,
      EmploymentDate: "01 / 05 / 2020",
    },
    {
      First_Name: "Dirk",
      Last_Name: "Gaiman",
      Images:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
      Type: "Full Time",
      Position: "Manager",
      Wage: "Salary",
      Client: "Bismillah",
      Tips_Collected: 200,
      EmploymentDate: "01 / 05 / 2020",
    },
  ];

  const clients = [
    {
      Name: "Bismillah",
      Image:
        "https://www.logodesign.net/logo/pizza-inside-negative-space-circle-5389ld.png?size=2&industry=restaurant-food",
      Employees: 4,
    },
    {
      Name: "Bijan",
      Image:
        "https://media-cdn.tripadvisor.com/media/photo-s/06/c3/43/7c/restaurant-orange.jpg",
      Employees: 6,
    },
    {
      Name: "Bismillah",
      Image:
        "https://previews.123rf.com/images/andyadi/andyadi1806/andyadi180600264/103255512-pizza-vector-icon-logo-design-for-restaurant-and-cafe-bistro.jpg",
      Employees: 2,
    },
    {
      Name: "Bismillah",
      Image:
        "https://previews.123rf.com/images/andyadi/andyadi1806/andyadi180600264/103255512-pizza-vector-icon-logo-design-for-restaurant-and-cafe-bistro.jpg",
      Employees: 2,
    },
    {
      Name: "Bismillah",
      Image:
        "https://previews.123rf.com/images/andyadi/andyadi1806/andyadi180600264/103255512-pizza-vector-icon-logo-design-for-restaurant-and-cafe-bistro.jpg",
      Employees: 2,
    },
    {
      Name: "Bismillah",
      Image:
        "https://previews.123rf.com/images/andyadi/andyadi1806/andyadi180600264/103255512-pizza-vector-icon-logo-design-for-restaurant-and-cafe-bistro.jpg",
      Employees: 2,
    },
  ];
  return (
    <div className="Employees">
      {/* This is the Side filter  */}
      <div className="Side-Filter">
        <div className="side">
          <Avatar />
          <span className="side-title">Employee</span>
        </div>
        <div className="side">
          <Avatar />
          <span className="side-title">Clients</span>
        </div>
        <div className="client-side">
          <div className="client-information">
            <ul>
              {clients.map((data, index) => {
                return (
                  <li key={index} className="client-list">
                    <Avatar src={data.Image} className="client-image" />
                    <span className="clientName">{data.Name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="employementType">
          <div className="side">
            <Avatar />
            <span className="side-title">Employ Type</span>
          </div>
          <div className="employment-list">
            <ul>
              <li className="employee-list">
                <Avatar />
                <span className="employee-status">Full Time</span>
              </li>
              <li className="employee-list">
                <Avatar />
                <span className="employee-status">Part Time</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* this is a list */}
      <div className="mainContent">
        <div className="list-heading">
          <div>
            <input type="checkbox" />
          </div>
          <span> Employee Name</span>
          <span>Salary</span>
          <span>Tips</span>
          <span>Manage</span>
        </div>
        <div className="list-content">
          {employees.map((data, index) => {
            return (
              <div className="employeeName">
                <div className="employee-listing">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <Avatar src={data.Images} />
                    <div>
                      <h5>
                        {data.First_Name} {data.Last_Name}
                      </h5>
                      <span>{data.Position}</span>
                    </div>
                  </div>
                </div>
                <div className="employeeSalary">
                  <div>
                    <h5>{data.Tips_Collected}</h5>
                    <span>{data.Type}</span>
                  </div>
                </div>
                <div className="employeeStatus">
                  <div>
                    <h5>{data.Wage}</h5>
                    <span>{data.EmploymentDate}</span>
                  </div>
                </div>
                <div className="employeeStatus">
                  <div>
                    <button style={{ border: "none", outline: "none" }}>
                      <EditIcon fontSize="large" />
                    </button>
                    <button style={{ border: "none", outline: "none" }}>
                      <DeleteOutlineIcon fontSize="large" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
