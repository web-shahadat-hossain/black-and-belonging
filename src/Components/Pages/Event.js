import React, { useEffect, useState } from "react";
import Separator from "../Shear/Separator";
import { useParams } from "react-router";

import { Link, Outlet } from "react-router-dom";
import { createContext } from "react";
import Loading from "../Shear/Loading";
import axios from "axios";
export const EventNested = createContext("");
const Event = () => {
  const [newsLoading, setNewsLoading] = useState(true);
  const [form, setFrom] = useState({
    title: "",
    file: null,
  });
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const eventVideoID = event[0]?.youtube_link;

  useEffect(() => {
    fetch(
      `https://blackandbelonging.com/wp-json/637922eaa5/v2/kargetevents?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setNewsLoading(false);
      });
  }, [id]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    // const inputValue =
    //   e?.target?.name === "file" ? e?.target?.file[0] : e?.target?.value;
    // console.log(inputValue, "hi");
    setFrom({
      ...form,
      file: e?.target?.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // const videoData = new FormData(e.target);
    const videoData = {
      title: form.title,
      videoFile: form.file,
    };
    // const result = Object.fromEntries(videoData.entries());
    // videoData.append("title", form.title);
    // videoData.append("videoFile", form.file);
    // videoData.append("title")
    console.log(videoData);
    axios
      .post("http://localhost:5000/upload", videoData)
      .then((json) => console.log(json.data));

    //   fetch("", {
    //     method: "POST",
    //     body: JSON.stringify(videoData),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                      <Link to={`/event/${id}`}>Overview</Link>
                    </li>

                    <li>
                      <Link
                        className="event-btn"
                        to={`/event/${id}/how-to-apply`}
                      >
                        How to Apply
                      </Link>
                    </li>
                    <li>
                      <Link to={`/event/${id}/the-process`}>The Process</Link>
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
                        <label for="contact-phone">
                          Name and Emails Of other group members
                        </label>
                        <span>
                          <input
                            type="text"
                            name="yourPhone"
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
                            autoComplete="off"
                            onChange={onChangeHandler}
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
                            onChange={onChangeHandler}
                            type="file"
                            name="file"
                            autoComplete="off"
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
