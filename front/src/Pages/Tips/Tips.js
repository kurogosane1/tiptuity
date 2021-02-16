import React, { useContext, useEffect, useState } from "react";
import "../../style/Tips.css";
import { GiMoneyStack } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { DataContext } from "../../Context/Data";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Tips() {
  const { employee } = useContext(DataContext);

  //This is where the sorted data is going to be placed
  const [sorted, setSorted] = useState();
  //This is the largest tip that was received
  const [largeTip, setLargeTip] = useState();
  //This will have the total tips
  const [total, setTotal] = useState();
  //This is the earlies date
  const [date, setDate] = useState();

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  //Sorting the tips first in a function
  function sort() {
    //first lets sort the data in a user
    const sorted = employee.map((data, index) => {
      //Now lets sort the tips by pulling it out
      const { firstName, lastName, tipsAmount } = data;
      const largest = Math.max(tipsAmount[index].tip);

      //This is the sorting the tips to the largest tips
      const totalTips = tipsAmount
        .map((data) => data.tip)
        .reduce((acc, curr) => acc + curr, 0);
      const sortedTips = tipsAmount.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      const Dates = tipsAmount.map((data) => data.date);
      return {
        firstName,
        lastName,
        sortedTips,
        largest,
        totalTips,
        Dates,
      };
    });

    let seperateLarge = sorted.map((data) => data.largest);
    let Total = sorted
      .map((data) => data.totalTips)
      .reduce((acc, curr) => acc + curr, 0);
    let seperateDate = sorted
      .map((data) => data.Dates)
      .sort((a, b) => {
        return new Date(a.Dates) - new Date(b.Dates);
      });

    const LargestTip = Math.max(...seperateLarge);
    setLargeTip(LargestTip);
    setTotal(Total);
    setSorted(sorted);
    setDate(seperateDate[0]);
  }

  //when the page loads
  useEffect(() => {
    sort();
  }, []);

  return (
    <section className="tips_container">
      <div className="tips_stats">
        {total ? (
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
                {total >= 1000000
                  ? `$${(total / 1000000).toFixed(2)}M`
                  : formatter.format(total)}
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
        {largeTip ? (
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
                {formatter.format(largeTip)}
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
              const { firstName, lastName, sortedTips } = data;
              let firstTipDate = sortedTips[0].date;
              let firstTipAmount = sortedTips[0].tip;
              let client = sortedTips[0].client;
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
                      {firstName} {lastName}
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
