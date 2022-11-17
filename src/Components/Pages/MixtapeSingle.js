import React, { useEffect, useState } from "react";
import Separator from "../Shear/Separator";
import organizar from "../../Assets/images/organizer.jpg";
import hbMixtape from "../../Assets/images/hb-mixtape.jpg";
import { Link, Outlet } from "react-router-dom";

const MixtapeSingle = () => {
  const [mixtapeOB, setMactapeOB] = useState({});
  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/media/10551").then(
      (res) =>
        res.json().then((data) => {
          setMactapeOB(data);
        })
    );
  }, []);
  return (
    <>
      <section className="smt">
        <div className="container">
          <div className="col-lg">
            <h1 className="smt-course-title">
              HeartBelonging Mixtape Vol. 1: Hoodies, Hair, & Heritage
            </h1>

            <div className="smt-title-footer">
              <div className="organizer">
                <a href="#">
                  <div className="organizer-details">
                    <div className="thumbnail left-align">
                      <img src={organizar} />
                    </div>

                    <div className="details left-align">
                      <h6 className="smt-type">Organizer</h6>
                      <h6 className="name">DeLeon Gray</h6>
                    </div>
                  </div>
                </a>
              </div>

              <div className="category left-align">
                <div className="thumbnail align-left">
                  <i className="fa-regular fa-bookmark"></i>
                </div>

                <div className="details left-align">
                  <h6 className="smt-type">Category</h6>
                  <h6 className="name">Student Voice</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-right">
              <ul>
                <li>
                  <i className="fa-solid fa-people-group"></i>
                  <p>
                    <strong>Enrolled:</strong> 84 Students
                  </p>
                </li>

                <li>
                  <i className="fa fa-book"></i>
                  <p>
                    <strong>Tracks:</strong> 6
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-left">
              <img src={mixtapeOB?.guid?.rendered} alt="" />

              <div className="nav-tabs-wrapper">
                <ul className="nav-tabs">
                  <li>
                    <Link
                      to="/mixtape-single"
                      className="tab-item tab-active"
                      id="tab-1"
                    >
                      Description
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/mixtape-single/tracklist"
                      className="tab-item"
                      id="tab-2"
                    >
                      Tracklist
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default MixtapeSingle;
