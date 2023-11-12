import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import closeIcon from "./imgs/close-outline.svg";
import forward from "./imgs/chevron-forward-outline.svg";

export default function Header(props) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the desired route
    navigate("/aboutpage");
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const style = {
    display: "flex",
    alignItems: "center",
  };

  const headerStyle = {
    background: "white",
  };

  const listItemsStyle = {
    color: "hsl(236, 57%, 28%)",
  };

  const listColor = "hsl(236, 57%, 28%)";
  const shortHand = props.isNavbarActive;

  useEffect(() => {
    // if (window.scrollY > 10)
    //   document.getElementById("logotxt").innerHTML = "DVLet";

    props.isNavbarActive
      ? (document.getElementById("logotxt").innerHTML = "DIVLet")
      : (document.getElementById("logotxt").innerHTML = "V-Wallet");
    // if (props.isNavbarActive) {
    //   document.getElementById("logotxt").innerHTML = "DVLet";
    // } else if (!props.isNavbarActive) {
    //   document.getElementById("logotxt").innerHTML = "V-Wallet";
    // }
    // else document.getElementById("logo-txt").innerHTML = "V-Wallet";
    // props.isNavbarActive &&
    // props.isSidebarOpen ?
    // document.getElementById("id").innerHTML = ""
  });

  return (
    <>
      <header
        className="header"
        style={props.isNavbarActive ? headerStyle : { background: "" }}
      >
        <div className="container">
          <a href="#Home">
            <h1 className="logo">
              <a
                id="logotxt"
                href="#home"
                style={shortHand ? listItemsStyle : { color: "white" }}
              >
                V-Wallet
              </a>
            </h1>
          </a>

          <div style={style}>
            <nav className="navbar">
              <div className="navbar-top">
                <ul className="navbar-list">
                  {["Home", "About", "Services", "Features", "Blogs"].map(
                    (item, index) => (
                      <li className="navbar-item" key={index}>
                        <a
                          href={`#${item}`}
                          className="navbar-link"
                          style={
                            shortHand ? listItemsStyle : { color: "white" }
                          }
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </nav>

            <Link className="btn" to="/aboutpage">
              <img className="icon" src={forward} alt="Forward" height="20px" />

              <span>Sign In</span>
            </Link>
            <button className="nav-open-btn" onClick={openSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ionicon"
                viewBox="0 0 512 512"
                className="icon"
                alt="Forward"
                height="35px"
              >
                <path
                  fill="none"
                  stroke={shortHand ? listColor : "white"}
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="45"
                  d="M80 160h352M80 256h352M80 352h352"
                />
              </svg>
            </button>
          </div>
        </div>
        {props.isNavbarActive === false && <hr className="line" />}
      </header>
      <div
        className={`overlay${isSidebarOpen ? " open" : ""}`}
        onClick={closeSidebar}
      >
        <NavBar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </>
  );
}

const NavBar = (props) => {
  return (
    <nav className={`navbar-opened${props.isSidebarOpen ? " open" : ""}`}>
      <div className="navbar-top">
        <div className="side-bar-header">
          <a href="#Home" className="logo">
            V-Wallet
          </a>

          <button className="nav-close-btn" onClick={props.closeSidebar}>
            <img className="icon" src={closeIcon} alt="Close" height="30px" />
          </button>
        </div>

        <ul className="navbar-list">
          {["Home", "About", "Services", "Features", "Blogs", "Contact Us"].map(
            (item, index) => (
              <li className="navbar-item" key={index}>
                <a href={`#${item}`} className="navbar-link">
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <a href="#Home" className="btn-">
          <img className="icon" src={forward} alt="Forward" height="20px" />

          <span>Sign In</span>
        </a>
      </div>
    </nav>
  );
};
