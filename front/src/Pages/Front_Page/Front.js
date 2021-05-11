import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "../Front_Page/Navbar/Nav";
import Iphone from "../../Assets/FrontEnd.svg";
import Img from "../../Assets/Dashboard.png";
import Activity from "../../Assets/Activity.png";
import front from "../../Assets/front.svg";
import location from "../../Assets/location.png";
import Footer from "./Footer";
import QRcode from "react-qr-code";

export function Front() {
  return (
    <>
      <div className="Main-Page" id="Home">
        <Nav />
        <section className="header" data-aos="fade-up">
          <div className="header-title" data-aos="fade-up">
            <h1>
              A New Way of Tipping
              <br />
              and Your Firm.
            </h1>
            <span>Tipping software for Valet. Easily get tips for Valet's</span>
          </div>
          <ul className="front-link" data-aos="fade-up" data-aos-delay="100">
            <li>
              <a className="learnLink" href="#information">
                Learn More
              </a>
              {/* Learn More */}
            </li>
            <li className="demoLink">
              <NavLink
                to="/Login"
                style={{
                  textDecoration: "none",
                  fontFamily: "Poppins",
                  color: "white",
                }}>
                Demo
              </NavLink>
            </li>
          </ul>
          <div className="dashboard">
            <img
              src={Img}
              alt="Dashboard Screen"
              className="dash"
              data-aos="zoom-in"
            />
            <img
              src={front}
              alt="front screen"
              className="Scanner"
              data-aos="zoom-in"
            />
          </div>
        </section>
        <br />
        <br />
        <section className="information" id="information" data-aos="fade-up">
          <div className="subtitle" data-aos="fade-up" data-aos-delay="50">
            <h1>Keep Your Team Organized.</h1>
          </div>
          <div className="sub">
            <div className="subinformation">
              <div
                className="main-pitch"
                data-aos="fade-right"
                data-aos-delay="100">
                <h3>A TIP MANAGING SOFTWARE</h3>
              </div>
              <div
                className="summary"
                data-aos="fade-right"
                data-aos-delay="130">
                <span>See your team's daily progress at a birds eye view</span>
                <span>
                  You can track the tips received by time and employee
                </span>
                <br />
                <span>Monitor Tips coming in and out in real time</span>
                <br />
                <span>
                  Detail view of tips received by which employee and what client
                </span>
              </div>
              <br />
              <div
                className="summary"
                data-aos="fade-right"
                data-aos-delay="140">
                <span>See your team's daily progress at a birds eye view</span>
                <span>
                  You can track the tips received by time and employee
                </span>
                <br />
                <span>Monitor Tips coming in and out in real time</span>
                <br />
                <span>
                  Detail view of tips received by which employee and what client
                </span>
              </div>
              <br />
              <ul
                className="front-link"
                data-aos="fade-right"
                data-aos-delay="140">
                <li className="demoLink">
                  <NavLink
                    to="/Login"
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      color: "white",
                    }}>
                    See Demo
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="activity" data-aos="fade-up">
              <img src={Activity} alt="activity dashboard" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="addClients" id="clients" data-aos="fade-up">
          <div className="client_header" data-aos="fade-up" data-aos-delay="50">
            <h1>Manage Location of Valets and Tips Received.</h1>
          </div>
          <div className="explanation_sec">
            <div className="side_info">
              <div
                className="client_info"
                data-aos="fade-right"
                data-aos-delay="100">
                <h3>LOCATION MANAGEMENT IN ONE PLACE.</h3>
              </div>
              <div
                className="client_desc"
                data-aos="fade-right"
                data-aos-delay="100">
                <span>
                  Keep track with tip activities with portal that can be managed
                  by location, where you can add Clients, assign Employees or
                  Valets to Clients and track all the tips based on location
                </span>
                <br />
                <br />
                <span>The location portal is available on mobile layout</span>
                <br />
                <br />
                <span>Coming soon mobile app on IOS and Android . . .</span>
              </div>
              <ul
                className="front-link"
                data-aos="fade-right"
                data-aos-delay="130">
                <li className="demoLink">
                  <NavLink
                    to="/Login"
                    style={{
                      textDecoration: "none",
                      fontFamily: "Poppins",
                      color: "white",
                    }}>
                    See Demo
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="locations" data-aos="fade-left">
              <img src={location} alt="location-example" />
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="mobile" id="mobile">
          <div className="phone-title" data-aos="fade-up" data-aos-delay="50">
            <h1>Mobile App Coming Soon!</h1>
          </div>
          <div className="phonesection">
            <div
              className="mobileDisplay"
              data-aos="fade-right"
              data-aos-delay="50">
              <img src={Iphone} alt="QRcode for scanning" />
            </div>
            <div
              className="phone-info"
              data-aos="fade-left"
              data-aos-delay="50">
              <span>
                Tips can be paid via the phone by simply scanning from the phone
                camera
              </span>
              <br />
              <span>
                Simply point the camera and scan and it will lead you to the
                payment
              </span>
              <br />
              <br />
              <span>
                Payment is done securely via Stripe and no personal information
                is stored
              </span>
              <span>Go ahead Scan the QRcode below</span>
              <br />
              <br />
              <span>
                Use card number 4242-4242-4242-4242 and any date and any late
                date for CVC for demo purpose
              </span>
              <div className="qrs">
                <QRcode
                  value="https://tiptuityv2.herokuapp.com/Demo"
                  size={248}
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="pricingSec" id="pricing">
          <div className="price_head" data-aos="fade-up" data-aos-delay="50">
            <span>TIP MANAGEMENT APP FOR VALETS</span>
            <h1 data-aos="fade-up" data-aos-delay="55">
              Boost Productivity.
            </h1>
            <h1 data-aos="fade-up" data-aos-delay="56">
              Drive Growth.
            </h1>
            <span data-aos="fade-up" data-aos-delay="57">
              You need a app that will empower you, your team, working with your
              clients together
            </span>
          </div>
          <div className="price_table">
            <div className="tables" data-aos="zoom-in">
              <div className="price-heading">
                <span className="priceTitle">
                  <strong>BASIC</strong>
                </span>
              </div>
              <div className="pricing">
                <span>
                  <strong>$225 </strong>/ month up to 3 Employees
                </span>
                <span>Up to 3 Users</span>
              </div>
              <ul className="listing">
                <li>CRM</li>
                <li>Tip Tracking</li>
                <li>Time and Billing</li>
              </ul>
              <div className="pricingButton">
                <button>Contact for Details</button>
              </div>
            </div>
            <div className="tables" data-aos="zoom-in" data-aos-delay="100">
              <div className="price-heading">
                <span className="priceTitle">
                  <strong>MOST</strong>
                </span>
              </div>
              <div className="pricing">
                <span>
                  <strong>$350 </strong>/ month up to 3 Employees
                </span>
                <span>Unlimited Users</span>
              </div>
              <ul className="listing">
                <li>CRM</li>
                <li>Tip Tracking</li>
                <li>Time and Billing</li>
                <li>Administrative Tools</li>
              </ul>
              <div className="pricingButton">
                <button>Contact for Details</button>
              </div>
            </div>
            <div className="tables" data-aos="zoom-in" data-aos-delay="200">
              <div className="price-heading">
                <span className="priceTitle">
                  <strong>PREMIUM</strong>
                </span>
              </div>
              <div className="pricing">
                <span>
                  <strong>$500 </strong>/ month up to 3 Employees
                </span>
                <span>Unlimited Users</span>
              </div>
              <ul className="listing">
                <li>CRM</li>
                <li>Tip Tracking</li>
                <li>Time and Billing</li>
                <li>Administrative Tools</li>

                <li>Tax Tools</li>
              </ul>
              <div className="pricingButton">
                <button>Contact for Details</button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
