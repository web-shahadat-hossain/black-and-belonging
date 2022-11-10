import React from "react";
import Separator from "../Shear/Separator";
import organizar from "../../Assets/images/organizer.jpg";
import hbMixtape from "../../Assets/images/hb-mixtape.jpg";
import { Link, Outlet } from "react-router-dom";

const MixtapeSingle = () => {
  return (
    <>
      <section class="smt">
        <div class="container">
          <div class="col-lg">
            <h1 class="smt-course-title">
              HeartBelonging Mixtape Vol. 1: Hoodies, Hair, & Heritage
            </h1>

            <div class="smt-title-footer">
              <div class="organizer">
                <a href="#">
                  <div class="organizer-details">
                    <div class="thumbnail left-align">
                      <img src={organizar} />
                    </div>

                    <div class="details left-align">
                      <h6 class="smt-type">Organizer</h6>
                      <h6 class="name">DeLeon Gray</h6>
                    </div>
                  </div>
                </a>
              </div>

              <div class="category left-align">
                <div class="thumbnail align-left">
                  <i class="fa-regular fa-bookmark"></i>
                </div>

                <div class="details left-align">
                  <h6 class="smt-type">Category</h6>
                  <h6 class="name">Student Voice</h6>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-right">
              <ul>
                <li>
                  <i class="fa-solid fa-people-group"></i>
                  <p>
                    <strong>Enrolled:</strong> 84 Students
                  </p>
                </li>

                <li>
                  <i class="fa fa-book"></i>
                  <p>
                    <strong>Tracks:</strong> 6
                  </p>
                </li>
              </ul>
            </div>

            <div class="col-lg-left">
              <div class="nav-tabs-wrapper">
                <ul class="nav-tabs">
                  <li>
                    <Link
                      to="/mixtape-single"
                      class="tab-item tab-active"
                      id="tab-1"
                    >
                      Description
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/mixtape-single/tracklist"
                      class="tab-item"
                      id="tab-2"
                    >
                      Tracklist
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
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
