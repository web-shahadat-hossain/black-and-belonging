import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/images/logo-white.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(false);
  const [search, setSearch] = useState(false);
  const openBarClickHandler = () => {
    setOpen(!open);
  };

  const closeBarClickHandler = () => {
    setOpen(!open);
  };

  const accountClickHandler = () => {
    setAccount(!account);
  };

  const searchClickHandler = () => {
    setSearch(!search);
  };

  return (
    <>
      <header className Name="header-container">
        <nav className="navbar">
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
              <li>
                <NavLink to="contact">CONTACT US</NavLink>
              </li>
            </ul>

            <div className="right-menu">
              <a href="#" className="favorites">
                <i className="fa-regular fa-heart"></i>
              </a>
              <div className="search-toggler">
                <button
                  onClick={searchClickHandler}
                  style={{ backgroundColor: "transparent ", border: 0 }}
                >
                  {" "}
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <div
                  className={`togglesearch ${search ? "togglesearch2" : ""}`}
                >
                  <input type="search" name="search" placeholder="Search" />
                  <button type="submit">
                    {" "}
                    <i className="fa fa-magnifying-glass"></i>{" "}
                  </button>
                </div>
              </div>

              <div className="account">
                <button
                  onClick={accountClickHandler}
                  style={{ backgroundColor: "transparent ", border: 0 }}
                >
                  <i className="fa fa-user"></i>
                </button>

                <div
                  className={`account-dropDown ${
                    account ? "account-dropDown2" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <a href="login.html">Log In</a>
                    </li>
                    <li>
                      <a href="register.html">Register</a>
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
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>

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

          <div className="right-menu right-menu-mob">
            <a href="#">
              <i className="fa fa-heart mob-favorites"></i>
            </a>

            <div className="togglesearch-mob">
              <input type="search" name="search" placeholder="Search" />
              <button type="submit">
                <i className="fa fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div className="signin">
            <button
              className="signin-btn"
              type="submit"
              onclick="location.href='login.html'"
            >
              Log In
            </button>
            <button
              className="signin-btn"
              type="submit"
              onclick="location.href='register.html'"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
