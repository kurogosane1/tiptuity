import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../App.css";
import "../../style/Stats.css";
import "../../style/Employee.css";
import { GrMoney } from "react-icons/gr";
import { DataContext } from "../../Context/Data";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  PieChart,
  Pie,
} from "recharts";

export default function Stats() {
  const history = useHistory();
  //getting the used Data from the backend
  const { empTip } = useContext(DataContext);
  const [empTips, setEmpTips] = useState();
  const [topFives, setTopFives] = useState();
  const [topTens, setTopTens] = useState();

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //Setup data of employee and tips received
  const Sort = async () => {
    const result = await axios
      .get("/api/Employees")
      .then((response) => response.data.data);
    //Getting the employees data sorted
    const employees = result.map((data) => {
      const { client_id, tip_amount, createdAt, Client, Employee } = data;
      const { businessname } = Client;
      const {
        firstname,
        lastname,
        streetaddress,
        email,
        isAdmin,
        image,
      } = Employee;
      // console.log(createdAt);
      return {
        id: Employee.id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
        tip: tip_amount,
        Client: businessname,
        Client_id: client_id,
        date: createdAt,
      };
    });

    const Top5 = employees
      .sort((a, b) => {
        return b.tip - a.tip;
      })
      .filter((data, index) => index < 5);
    const Top10 = employees
      .sort((a, b) => {
        return b.tip - a.tip;
      })
      .filter((data, index) => index < 10);
    setTopFives([...Top5]);
    setTopTens([...Top10]);
    setEmpTips([...employees]);
  };
  //upon loading the page
  useEffect(() => {
    Sort();
  }, []);

  return (
    <section className="stats">
      <div className="stats_info1">
        <div>
          <h3>Top 5 Highest Tips Received</h3>
        </div>
        <ResponsiveContainer height="60%" className="info1_statistics">
          <ComposedChart width={250} height={200} data={topFives}>
            <XAxis dataKey="Client" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area
              type="monotone"
              dataKey="tip"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="firstname" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="firstname" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="stats_info2">
        <div>
          <h2></h2>
        </div>
        <ResponsiveContainer height="60%">
          <PieChart>
            <Pie
              data={topTens}
              dataKey="tip"
              nameKey="Client"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={topTens}
              dataKey="tip"
              nameKey="firstname"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={120}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="stats_info3">
        <div>
          <h3>Top 5 Clients with Highest Tip</h3>
        </div>
        <div className="internal-top5" style={{ marginTop: "1rem" }}>
          {topFives
            ? topFives.map((data, index) => {
                const { Client, tip, id } = data;
                return (
                  <li className="topFive_emp1" key={index}>
                    <div className="">
                      <h3>{Client}</h3>
                    </div>
                    <div className="">
                      <GrMoney
                        size={28}
                        color={"#5eb735"}
                        style={{ color: "#5eb735" }}
                      />
                      <h4 style={{ marginLeft: "1rem" }}>
                        {formatter.format(tip)}
                      </h4>
                    </div>
                  </li>
                );
              })
            : ""}
        </div>
        <div>
          <button
            className="buttons-Overview"
            style={{ width: "80%", marginTop: "1rem" }}
            onClick={() => {
              history.push("/api/Clients");
            }}>
            More Info
          </button>
        </div>
      </div>
      <div className="stats_info4">
        <div>
          <h2>Clients with Highest Tip</h2>
        </div>
        <ResponsiveContainer height="60%" className="info4_statistics">
          <LineChart
            width={730}
            height={250}
            data={empTips}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Client" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tip" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="stats_info5">
        <div>
          <h3>Top 5 Employees with Highest Tip</h3>
        </div>
        <div className="internal-top5" style={{ marginTop: "1rem" }}>
          {topFives
            ? topFives.map((data, index) => {
                const { firstname, lastname, tip, id } = data;
                return (
                  <li className="topFive_emp1" key={index}>
                    <div className="">
                      <h3>{firstname}</h3>
                      <span style={{ marginLeft: "1rem" }}>{lastname}</span>
                    </div>
                    <div className="">
                      <GrMoney
                        size={28}
                        color={"#5eb735"}
                        style={{ color: "#5eb735" }}
                      />
                      <h4 style={{ marginLeft: "1rem" }}>
                        {formatter.format(tip)}
                      </h4>
                    </div>
                  </li>
                );
              })
            : ""}
        </div>
        <div>
          <button
            className="buttons-Overview"
            style={{ width: "80%", marginTop: "1rem" }}
            onClick={() => {
              history.push("/api/Employees");
            }}>
            More
          </button>
        </div>
      </div>
    </section>
  );
}
