import React from "react";
import EmployeeNav from "./sub-Container/subNav";
import SideClient from "./sub-Container/SideClient.jsx";

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
    <div className="container mx-auto flex flex-col justify-center align-center gap-3">
      <EmployeeNav />
      <div className="container h-full text-center flex flex-row justify-center items-center bg-white gap-8">
        <div className="container">All Employees</div>
        <div className="container flex flex-col justify-center items-center gap-3 py-4">
          <span>Clients</span>
          <div className="flex flex-col justify-center items-center gap-3 py-4">
            {client.map((Data) => {
              return (
                <div>
                  <SideClient name={Data.name} image={Data.image} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container flex flex-grow justify-center items-center gap-3">
          <div className="table container  bg-white">
            {employees.map((data) => {
              return (
                <div className="flex justify-evenly items-center">
                  <span>{data.FirstName}</span>
                  <span>{data.LastName}</span>
                  <span>{data.JobTitle}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
