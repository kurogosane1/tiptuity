import React, { useContext } from "react";
import "../../style/Tips.css";
import { GiMoneyStack } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { DataContext } from "../../Context/Data";

export default function Tips() {
  const { employee } = useContext(DataContext);

  return (
    <section className="tips_container">
      <div className="tips_stats">
        <span
          style={{
            fontWeight: "400",
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Total Tips received
        </span>
        <div className="tips_stats_container">
          <GiMoneyStack size={45} style={{ color: "#5eb735" }} />
          <span>This is total Tips</span>
        </div>
      </div>
      <div className="date_tip">
        <span
          style={{
            fontWeight: "400",
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Latest tip that was received
        </span>
        <div className="date_tip_container">
          <MdDateRange size={45} />
          <span>Last Tip date</span>
        </div>
      </div>
      <div className="highest_tip">
        <span
          style={{
            fontWeight: "400",
            textAlign: "center",
            borderBottom: "solid 1px grey",
          }}>
          Highest Tip received
        </span>
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
        </ul>
      </div>
    </section>
  );
}
