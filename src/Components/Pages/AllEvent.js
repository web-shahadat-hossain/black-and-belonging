import React, { useEffect, useState } from "react";
import Loading from "../Shear/Loading";
import UseNews from "../../Hook/UseNews";
import convertHtmlToReact from "@hedgedoc/html-to-react";
import { Link } from "react-router-dom";
import moment from "moment";

const AllEvent = () => {
  const [event, setEvent] = useState([]);
  console.log(event);
  const [newsLoading, setNewsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.blackandbelonging.com/wp-json/637922eaa5/v2/kargetevents"
    )
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setNewsLoading(false);
      });
  }, []);
  return (
    <>
      <section style={{ padding: "100px 0" }} className="news-section">
        <div className="container">
          <h2>Events</h2>

          <div className="news">
            {newsLoading ? (
              <Loading />
            ) : (
              <div className="row">
                {event.map((data) => (
                  <div className="col">
                    <div className="news-content">
                      <div className="inner">
                        <div className="thumbnail">
                          <Link to={`/events/${data?.slug}`}>
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${data?.youtube_link?.slice(
                                17
                              )}`}
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </Link>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <Link
                              style={{ textTransform: "capitalize" }}
                              to={`/events/${data?.slug}`}
                            >
                              {" "}
                              {data?.title}
                            </Link>
                          </h4>
                          <div className="events-date">
                            <div className="events-date-box">
                              <div className="events-date-start">
                                <h4>START</h4>
                                <p>
                                  {moment(data.event_start).format("MMM Do YY")}
                                </p>
                              </div>
                              <div className="events-date-end">
                                <h4>END</h4>
                                <p>
                                  {moment(data.event_end).format("MMM Do YY")}
                                </p>
                              </div>
                              <div className="events-date-box-location">
                                <h4>LOCATION</h4>
                                <p>{data.event_location}</p>
                              </div>
                            </div>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit esse numquam laboriosam quaerat molestiae
                            asperiores excepturi? Dolores temporibus numquam
                            aliquam!
                          </p>
                          <Link
                            to={`/events/${data?.slug}`}
                            className="read-btn"
                          >
                            Join Now! <i className="fas fa-caret-right"></i>
                          </Link>

                          <p className="date-published">{event.event_start}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllEvent;
