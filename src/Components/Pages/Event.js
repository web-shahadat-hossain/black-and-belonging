import React, { useEffect, useState } from "react";
import Separator from "../Shear/Separator";
import organizar from "../../Assets/images/organizer.jpg";
import hbMixtape from "../../Assets/images/hb-mixtape.jpg";
import { Link, NavLink, Outlet } from "react-router-dom";

const Event = () => {
  const [mixtapeOB, setMactapeOB] = useState({});
  const [active, setInActive] = useState(false);
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
        <div className="container" style={{ maxWidth: "1300px" }}>
          <div className="row ">
            <div className="col-lg-left event ">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/FIy_cGkVgM8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 style={{ color: "#ff014f" }} className="what-we-do-head">
                Black and Belonging - Fundraise
              </h1>
              <div className="nav-tabs-wrapper">
                <ul className="event-nav-tabs ">
                  <li>
                    <Link to="/event">Overview</Link>
                  </li>

                  <li>
                    <Link className="event-btn" to="/event">
                      How to Apply
                    </Link>
                  </li>
                  <li>
                    <Link to="/event">The Process</Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <Outlet />
                <p style={{ color: "#c4cfde" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Error at impedit itaque nulla tempore quam nam dolorem libero.
                  Tempora, asperiores quo. Quae eius, optio dolorum dolore,
                  obcaecati itaque nulla omnis veritatis ullam rerum debitis
                  aspernatur nam assumenda tenetur quaerat non quisquam officia
                  provident nobis deserunt, ipsa ex maxime impedit neque? Rem
                  quas officia, inventore et, eos velit vel minus aliquid
                  obcaecati totam sint similique! Natus blanditiis laborum
                  reprehenderit temporibus assumenda ratione quis, tempora
                  corrupti dolor ut eveniet optio doloremque quos sunt sequi
                  culpa error modi a ex rerum cumque. Libero voluptas, repellat
                  enim tenetur quasi alias reiciendis dolorum? Ipsum, nemo.
                </p>
              </div>
            </div>
            <div className="col-sm-right">
              <form action="/" method="POST">
                <div className="contact-form-wrapper">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">First Name</label>
                        <span>
                          <input
                            type="text"
                            name="your-name"
                            size="40"
                            id="contact-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-email">Last Name</label>
                        <span>
                          <input
                            type="text"
                            name="your-email"
                            size="40"
                            id="contact-email"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">Email</label>
                        <span>
                          <input
                            type="email"
                            name="your-name"
                            size="40"
                            id="contact-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-email">School</label>
                        <span>
                          <input
                            type="text"
                            name="your-email"
                            size="40"
                            id="contact-email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label for="contact-phone">
                          Name and Emails Of other group members
                        </label>
                        <span>
                          <input
                            type="text"
                            name="your-phone"
                            size="40"
                            id="contact-phone"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">Video Title</label>
                        <span>
                          <input
                            type="email"
                            name="your-name"
                            size="40"
                            id="contact-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group-file form-group">
                        <label for="contact-email">Video upload</label>
                        <span>
                          <input
                            type="file"
                            name="your-email"
                            size="40"
                            id="contact-email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <input type="submit" value="JOINT NOW" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Event;
