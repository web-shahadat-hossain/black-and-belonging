import React, { useEffect, useState } from "react";
import Loading from "../Shear/Loading";
import UseNews from "../../Hook/UseNews";
import convertHtmlToReact from "@hedgedoc/html-to-react";
import { Link } from "react-router-dom";

const AllEvent = () => {
  const [event, setEvent] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/637922eaa5/v2/kargetevents")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        setNewsLoading(false);
      });
  }, []);
  return (
    <>
      <section className="news-header">
        <div className="container">
          <h1>All Event</h1>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>Event</h2>

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
                          <a href="#!">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${data?.youtube_link?.slice(
                                17
                              )}`}
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <Link
                              style={{ textTransform: "capitalize" }}
                              to={`/event/${data?.event_id}`}
                            >
                              {" "}
                              {data?.title}
                            </Link>
                          </h4>
                          <div className="events-date">
                            <div>
                              <h4>START</h4>
                              <p>{data.event_start}</p>
                            </div>
                            <div>
                              <h4>END</h4>
                              <p>{data.event_end}</p>
                            </div>
                            <div>
                              <h4>LOCATION</h4>
                              <p>{data.event_location}</p>
                            </div>
                          </div>
                          <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit esse numquam laboriosam quaerat molestiae
                            asperiores excepturi? Dolores temporibus numquam
                            aliquam!
                          </p>
                          <Link
                            to={`/event/${data?.event_id}`}
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
