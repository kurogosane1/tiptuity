import React, { useContext, useEffect } from "react";
import "../../style/Tips.css";
import { GiMoneyStack } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { DataContext } from "../../Context/Data";

export default function Tips() {
  const { employee } = useContext(DataContext);

  //Sorting the tips first in a function
  function sort() {
    //first lets sort the data in a user
    const sorted = employee.map((data) => {
      //Now lets sort the tips by pulling it out
      const { firstName, lastName, tipsAmount } = data;
      const sortedTips = tipsAmount.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      return {
        firstName,
        lastName,
        sortedTips,
      };
    });
    console.log(sorted);
    return sorted;
  }

  //when the page loads
  useEffect(() => {
    sort();
  }, []);

  return (
    <section className="tips_container">
      <div className="tips_stats">
        <h4
          style={{
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Total Tips received
        </h4>
        <div className="tips_stats_container">
          <GiMoneyStack size={45} style={{ color: "#5eb735" }} />
          <span>This is total Tips</span>
        </div>
      </div>
      <div className="date_tip">
        <h4
          style={{
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Latest tip that was received
        </h4>
        <div className="date_tip_container">
          <MdDateRange size={45} />
          <span>Last Tip date</span>
        </div>
      </div>
      <div className="highest_tip">
        <h4
          style={{
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Highest Tip received
        </h4>
        <div className="highest_tip_container">
          <GrMoney size={45} />
          <span>highest tip paid 4,500</span>
        </div>
      </div>

      <div className="tips_received">
        <ul>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
          <li>
            <div className="individual_tips">
              <span>Sam wenden</span>
              <span>Sam wenden</span>
              <span>Sam wenden</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
