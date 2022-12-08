import React, { useEffect, useState } from "react";
import Separator from "../Shear/Separator";

import { Link, Outlet } from "react-router-dom";
import { createContext } from "react";
export const EventNested = createContext("");
const Event = () => {
  const [event, setEvent] = useState({});

  const eventVideoID = event?.youtube_link;

  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/637922eaa5/v2/kargetevents")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);
  return (
    <>
      <section className="smt">
        <div
          className="container event-container"
          style={{ maxWidth: "1300px" }}
        >
          <div className="row ">
            <div className="col-lg-left event ">
              <iframe
                width="100%"
                height="350"
                src={`https://www.youtube.com/embed/${eventVideoID?.slice(17)}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h1 style={{ color: "#ff014f" }} className="what-we-do-head">
                {event.title}
              </h1>
              <div className="event-date">
                <div>
                  <h4>START</h4>
                  <p>{event.event_start}</p>
                </div>
                <div>
                  <h4>END</h4>
                  <p>{event.event_end}</p>
                </div>
                <div>
                  <h4>LOCATION</h4>
                  <p>{event.event_location}</p>
                </div>
              </div>
              <div className="nav-tabs-wrapper">
                <ul className="event-nav-tabs ">
                  <li>
                    <Link to="/event">Overview</Link>
                  </li>

                  <li>
                    <Link className="event-btn" to="/event/how-to-apply">
                      How to Apply
                    </Link>
                  </li>
                  <li>
                    <Link to="/event/the-process">The Process</Link>
                  </li>
                </ul>
              </div>

              <div className="tab-content">
                <EventNested.Provider value={event}>
                  <Outlet />
                </EventNested.Provider>
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
                      <input type="submit" value="JOIN NOW!" />
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
