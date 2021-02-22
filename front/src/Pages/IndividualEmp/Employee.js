import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import "../../style/IndEmployee.css";

export default function Employee() {
  const location = useLocation();
  const history = useHistory();
  //This is where to save the individual data
  const [indEmp, setIndEmp] = useState();

  //Get the data to be stored in a safe
  const Store = () => {
    let data = location.state.Data;
    setIndEmp([...data]);
  };
  useState(() => {
    Store();
  }, []);

  //Formatter
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="fan">
        <button className="button-back" onClick={() => history.goBack()}>Go BacK</button>
        <h2>This is the individual employee list</h2>
      </div>
      <section className="tips_collected1">
        <div className="tips_collected_container1">
          <div className="emp_over_heading1">
            <h3>
              {indEmp ? (
                indEmp[0].firstname
              ) : (
                <Skeleton variant="text" width="100%"></Skeleton>
              )}
            </h3>
            <h3>{indEmp ? indEmp[0].lastname : <Skeleton />}</h3>
          </div>
          <div className="emp_over_image1">
            {indEmp ? (
              <img
                src={indEmp[0].image}
                style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              />
            ) : (
              <>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
              </>
            )}
          </div>
          <ul>
            {indEmp ? (
              indEmp.map((data) => {
                const { tip, Client, date } = data;
                let d = new Date(date);
                return (
                  <li className="ind_emp_tips1">
                    <div className="name_col1">
                      <h3 style={{ textAlign: "center" }}>{Client}</h3>
                    </div>
                    <div className="date_col1">
                      <span style={{ textAlign: "center" }}>
                        {d.toString()}
                      </span>
                    </div>
                    <div className="amount_collected1">
                      <h3 style={{ textAlign: "center" }}>
                        {formatter.format(tip)}
                      </h3>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="ind_emp_tips">
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
                <Skeleton variant="rect" width="100%">
                  <div style={{ height: "85vh", paddingTop: "57%" }} />
                </Skeleton>
              </li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
