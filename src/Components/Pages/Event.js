import React, { useEffect, useState } from "react";
import Separator from "../Shear/Separator";
import { useParams } from "react-router";

import { Link, NavLink, Outlet } from "react-router-dom";
import { createContext } from "react";
import Loading from "../Shear/Loading";
import axios from "axios";
import { toast } from "react-toastify";
export const EventNested = createContext("");
const Event = () => {
  const [newsLoading, setNewsLoading] = useState(true);
  const [event, setEvent] = useState([]);
  const [active, setInActive] = useState("Overview");
  const [selectVideo, setSelectVideo] = useState("");
  const { id } = useParams();
  const eventVideoID = event[0]?.youtube_link;

  const videoHandler = (e) => {
    setSelectVideo(e.target.files[0]);
  };

  useEffect(() => {
    fetch(
      `https://api.blackandbelonging.com/wp-json/637922eaa5/v2/kargetevents?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setNewsLoading(false);
      });
  }, [id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const videoData = new FormData(e.target);
    const result = Object.fromEntries(videoData.entries());

    const data = {
      first_name: result?.firstName,
      last_name: result?.lastName,
      school: result?.school,
      name_and_emails_of_other_group_members: result?.yourPhone,
      video_title: result?.title,
      video_upload: window.URL.createObjectURL(selectVideo),
      event_id: id,
    };
    console.log(data);
    axios
      .post(
        "https://api.blackandbelonging.com/wp-json/custom-plugin/parti/",
        data
      )
      .then((json) => {
        if (json.status === 200) {
          toast.success("Successfully!");
        } else {
          toast.error("Please try again!");
        }
      });
  };

  return (
    <>
      <section className="smt">
        <div
          className="container event-container"
          style={{ maxWidth: "1300px" }}
        >
          <div className="row ">
            {newsLoading ? (
              <Loading />
            ) : (
              <div className="col-lg-left event ">
                <iframe
                  width="100%"
                  height="350"
                  src={`https://www.youtube.com/embed/${eventVideoID?.slice(
                    17
                  )}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <h1 className="event-head">{event[0]?.title}</h1>
                <div className="event-date">
                  <div>
                    <h4>START</h4>
                    <p>{event[0]?.event_start}</p>
                  </div>
                  <div>
                    <h4>END</h4>
                    <p>{event[0]?.event_end}</p>
                  </div>
                  <div>
                    <h4>LOCATION</h4>
                    <p>{event[0]?.event_location}</p>
                  </div>
                </div>
                <div className="nav-tabs-wrapper">
                  <ul className="event-nav-tabs ">
                    <li>
                      <Link
                        onClick={(e) => setInActive(e.target.innerText)}
                        className={` ${
                          active === "Overview" ? "event-active" : ""
                        }`}
                        to={`/event/${id}`}
                      >
                        Overview
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={`event-btn ${
                          active === "apply" ? `event-active` : ""
                        }`}
                        onClick={(e) => setInActive("apply")}
                        to={`/event/${id}/how-to-apply`}
                      >
                        How to Apply
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={(e) => setInActive(e.target.innerText)}
                        className={` ${
                          active === "The Process" ? "event-active" : ""
                        }`}
                        to={`/event/${id}/the-process`}
                      >
                        The Process
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <EventNested.Provider value={event[0]}>
                    <Outlet />
                  </EventNested.Provider>
                </div>
              </div>
            )}
            <div className="col-sm-right">
              <form onSubmit={onSubmitHandler}>
                <div className="contact-form-wrapper">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">First Name</label>
                        <span>
                          <input
                            type="text"
                            name="firstName"
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
                            name="lastName"
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
                            name="email"
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
                            name="school"
                            size="40"
                            id="contact-email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label for="contact-phone">Your Message</label>
                        <span>
                          <textarea
                            name="yourPhone"
                            id="contact-phone"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">Video Title</label>
                        <span>
                          <input
                            autoComplete="off"
                            type="text"
                            name="title"
                            size="40"
                            id="contact-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group-file form-group">
                        <label for="file">Video upload</label>
                        <span>
                          <input
                            onChange={videoHandler}
                            type="file"
                            name="file"
                            // autoComplete="off"
                            accept="video/mp4"
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
