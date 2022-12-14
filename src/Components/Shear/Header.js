import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  const authentication = JSON.parse(localStorage.getItem("user"));
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const openBarClickHandler = () => {
    setOpen(!open);
  };

  const closeBarClickHandler = () => {
    setOpen(!open);
  };

  const accountClickHandler = () => {
    setAccount(!account);
  };

  return (
    <>
      <header className Name="header-container">
        <nav className={scroll ? "navbar scroll-on" : "navbar"}>
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <div className="nav-menu">
            <ul className="nav-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="mixtapes">Mixtapes</NavLink>
              </li>
              <li>
                <NavLink to="news">News</NavLink>
              </li>
              <li>
                <NavLink to="about">ABOUT US</NavLink>
              </li>
              {/* <li>
                <NavLink to="/events">Events</NavLink>
              </li> */}
              <li>
                <NavLink to="contact">CONTACT US</NavLink>
              </li>
            </ul>

            <div className="right-menu">
              <div onClick={accountClickHandler} className="account">
                <button style={{ backgroundColor: "transparent ", border: 0 }}>
                  <i className="fa fa-user"></i>
                </button>

                <div
                  className={`account-dropDown ${
                    account ? "account-dropDown2" : ""
                  }`}
                >
                  <ul>
                    <li>
                      {authentication ? (
                        <Link
                          to="/profile"
                          style={{
                            color: "white",
                          }}
                        >
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              color: "white",
                            }}
                          >
                            {" "}
                            Account
                          </button>
                        </Link>
                      ) : (
                        <Link to="/login">Log In</Link>
                      )}
                    </li>
                    <li>
                      {authentication ? (
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "white",
                          }}
                          onClick={() => {
                            localStorage.removeItem("user", authentication);
                            navigate("/");
                          }}
                        >
                          Logout
                        </button>
                      ) : (
                        <Link to="/register">Register</Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={openBarClickHandler}
              style={{ backgroundColor: "transparent ", border: 0 }}
            >
              {" "}
              <i className="fa-solid fa-bars" id="bar"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* popup mobile menu  */}

      <div className={`popup-mobilemenu ${open ? "menu-open" : ""}`}>
        <div className="menu-inner">
          <div className="menu-top">
            <div className="menu-header">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>

              <div className="close-button">
                <button
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <i className="fa-solid fa-close"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="content">
            <nav id="sideNavMobile" className="mainmenu-nav">
              <ul className="navbar-list1">
                <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                </button>
                <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="mixtapes">Mixtapes</NavLink>
                  </li>
                </button>
                <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="news">News</NavLink>
                  </li>
                </button>
                <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="about">About Us</NavLink>
                  </li>
                </button>
                {/* <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="/events">Events</NavLink>
                  </li>
                </button> */}

                <button
                  style={{ backgroundColor: "transparent ", border: 0 }}
                  className="close"
                  id="close"
                  onClick={closeBarClickHandler}
                >
                  <li>
                    <NavLink to="contact">Contact Us</NavLink>
                  </li>
                </button>
              </ul>
            </nav>
          </div>

          <div className="right-menu right-menu-mob"></div>

          <div className="signin">
            {authentication ? (
              <Link to="/profile">
                <button onClick={closeBarClickHandler} className="signin-btn">
                  Account
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button
                  onClick={closeBarClickHandler}
                  className="signin-btn"
                  type="submit"
                >
                  Log In
                </button>
              </Link>
            )}

            {authentication ? (
              <button
                className="signin-btn"
                onClick={() => {
                  localStorage.removeItem("user", authentication);
                  navigate("/");
                  setOpen(!open);
                }}
              >
                Log Out
              </button>
            ) : (
              <Link to="/register">
                <button
                  onClick={closeBarClickHandler}
                  className="signin-btn"
                  type="submit"
                >
                  Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
