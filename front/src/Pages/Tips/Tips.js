import React, { useContext, useEffect, useState } from "react";
import "../../style/Tips.css";
import { GiMoneyStack } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { DataContext } from "../../Context/Data";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Tips() {
  const { employee, client, tipped } = useContext(DataContext);

  //Employee data is stored
  const [Employee, setEmployee] = useState();
  //Total Tips received
  const [totalTips, setTotalTips] = useState();
  // //This is where the sorted data is going to be placed
  const [sorted, setSorted] = useState();
  // //This is the earlies date
  const [date, setDate] = useState();

  const Sorted = () => {
    const Emp_data = employee.map((data) => {
      //Extracting the data to organize
      const {
        id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
      } = data;
      let Tip_data = tipped
        .filter((info) => info.emp_id === id)
        .map((data) => {
          return {
            tip: data.tip_amount,
            Client_id: data.client_id,
            date: data.createdAt,
          };
        });
      //Destructuring the data
      const { tip, Client_id, date } = Tip_data[0];
      let ClientInfo = client
        .filter((info) => info.id === Client_id)
        .map((data) => data.businessname);
      //Getting the business name
      const Client = ClientInfo[0];

      return {
        id,
        firstname,
        lastname,
        image,
        streetaddress,
        email,
        isAdmin,
        tip,
        Client_id,
        Client,
        date,
      };
    });
    //Getting the TotalTips
    const TotalTips = Emp_data.reduce((acc, curr) => acc + curr.tip, 0);
    //Getting the data sorted out with the highest Tips
    const Employees = Emp_data.sort((a, b) => b.tip - a.tip);
    //Getting the data sorted out with the earliest date
    const Sorted = Emp_data.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    setEmployee([...Employees]);
    setTotalTips(TotalTips);
    setDate(Sorted[0].date);
    setSorted([...Sorted]);
  };

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  useEffect(() => {
    Sorted();
  }, []);

  return (
    <section className="tips_container">
      <div className="tips_stats">
        {totalTips ? (
          <>
            <h4
              style={{
                textAlign: "center",
                borderBottom: "solid 1px grey",
              }}>
              Total Tips received
            </h4>
            <div className="tips_stats_container">
              <GiMoneyStack size={42} />
              <h3 style={{ textAlign: "center", marginLeft: "1rem" }}>
                {totalTips >= 1000000
                  ? `$${(totalTips / 1000000).toFixed(2)}M`
                  : formatter.format(totalTips)}
              </h3>
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="date_tip">
        {date ? (
          <>
            <h4
              style={{
                textAlign: "center",
                borderBottom: "solid 1px grey",
              }}>
              Latest tip that was received
            </h4>
            <div className="date_tip_container">
              <MdDateRange size={45} />
              <span>{date.toString()}</span>
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>
      <div className="highest_tip">
        {Employee ? (
          <>
            <h4
              style={{
                textAlign: "center",
                borderBottom: "solid 1px grey",
              }}>
              Highest Tip received
            </h4>
            <div className="highest_tip_container">
              <GrMoney size={45} />
              <h3 style={{ textAlign: "center", marginLeft: "1rem" }}>
                {formatter.format(Employee[0].tip)}
              </h3>
            </div>
          </>
        ) : (
          <Skeleton />
        )}
      </div>

      <div className="tips_received">
        <ul>
          {sorted ? (
            sorted.map((data, index) => {
              const { firstname, lastname } = data;
              let firstTipDate = sorted[0].date;
              let firstTipAmount = sorted[0].tip;
              let client = sorted[0].Client;
              return (
                <li key={index}>
                  <div className="individual_tips">
                    <h3 style={{ textAlign: "center" }}>
                      {formatter.format(firstTipAmount)}
                    </h3>
                    <span style={{ textAlign: "center" }}>
                      {firstTipDate.toString()}
                    </span>
                    <span style={{ textAlign: "center" }}>{client}</span>
                    <h3 style={{ textAlign: "center" }}>
                      {firstname} {lastname}
                    </h3>
                  </div>
                </li>
              );
            })
          ) : (
            <Skeleton />
          )}
        </ul>
      </div>
    </section>
  );
}
