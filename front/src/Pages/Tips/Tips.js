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
    const Emp_data = tipped.map((data) => {
      const { client_id, emp_id, tip_amount, createdAt, id } = data;
      let Emp = employee
        .filter((info) => info.id === emp_id)
        .map((data) => data);
      const { firstname, lastname, streetaddress, email, image } = Emp[0];
      let client_info = client
        .filter((info) => info.id === client_id)
        .map((data) => data);
      const { businessname, businessAddress, businessImage } = client_info[0];
      return {
        id,
        firstname,
        lastname,
        streetaddress,
        email,
        image,
        businessAddress,
        businessImage,
        Client: businessname,
        Client_id: client_id,
        tip: tip_amount,
        date: createdAt,
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
              let firstTipDate = data.date;
              let firstTipAmount = data.tip;
              let client = data.Client;
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
