import React from "react";
import EmployeeNav from "./sub-Container/EmployeeNav";
import SideClient from "./sub-Container/SideClient";
import Employee from "./sub-Container/Employee";

export default function Employees() {
  const employees = [
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Cafe Cool",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Inter Restaurant",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Bijan restaurant",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Hotel Hilton Downtown",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Hotel Intercontinental",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Hotel Moracoo",
    },
    {
      FirstName: "John",
      LastName: "Doe",
      JobTitle: "Valet",
      ImageUrl:
        "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
      Date_Joined: "01/20/2020",
      EmployeeType: "FullTime",
      Client: "Test Restaurant",
    },
  ];
  const client = [
    {
      name: "Hotel Hilton",
      image: "some Image",
    },
    {
      name: "Cafe Cool",
      image: "Some Image",
    },
    {
      name: "Hotel Moracoo",
      image: "Some Image",
    },
    {
      name: "Hotel Intercontinental",
      image: "Some Image",
    },
    {
      name: "Bijan Restaurant",
      image: "Some Image",
    },
  ];
  return (
    <div className="container h-screen mt-1">
      <EmployeeNav />
      <div className="Side-Clients flex flex-row justify-center items-start  gap-8 h-auto mt-8">
        <div className="flex flex-col justify-center items-center bg-white p-10 rounded-lg shadow-xl">
          <span className="text-3xl text-left">All Employees</span>
          <div className="container flex flex-col justify-evenly items-start">
            <span className="text-lg my-4">Clients</span>
            {client.map((data) => {
              return <SideClient name={data.name} image={data.image} />;
            })}
            <span className="text-lg my-2">Status</span>
            <span className="text-md my-2">Full Time</span>
            <span className="text-md my-2">Part Time Time</span>
          </div>
        </div>
        {/* <div className="flex flex-row justify-center items-center w-8/12  h-full rounder-large">
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
            <div className="flex flex-row justify-between items-center mt-5 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-5 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center mt-4 bg-white w-full p-4 rounded-lg gap-3 shadow-lg">
              <div className="flex flex-row justify-evenly items-center flex-grow">
                <input
                  type="checkbox"
                  class="form-checkbox h-6 w-6 rounded-lg outline-none"
                />
                <Avatar />
                <div className="flex flex-col justify-evenly items-start pl-2 pr-2">
                  <span className="text-lg">Roni James</span>
                  <span className="text-sm text-left">Valet</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
                <div className="flex flex-col justify-center items-center pl-2 pr-2">
                  <span className="text-lg">$3,200</span>
                  <span className="text-sm text-left">Full Time</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Employee employees={employees} />
      </div>
    </div>
  );
}
