import React, { useEffect, useState } from "react";
import Loading from "../Shear/Loading";

import { Link } from "react-router-dom";

const PollList = () => {
  const [pollList, setPollList] = useState([]);
  const [pollImg, setPollImg] = useState({});
  const [pollImg2, setPollImg2] = useState({});
  const [newsLoading, setNewsLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.blackandbelonging.com/wp-json/wp/v2/it_epoll_poll")
      .then((res) => res.json())
      .then((data) => {
        setPollList(data);
      });
    fetch("https://api.blackandbelonging.com/wp-json/wp/v2/media/10679")
      .then((res) => res.json())
      .then((data) => {
        setPollImg(data);
        setNewsLoading(false);
      });
    fetch("https://api.blackandbelonging.com/wp-json/wp/v2/media/9284")
      .then((res) => res.json())
      .then((data) => {
        setPollImg2(data);
        setNewsLoading(false);
      });
  }, []);
  console.log(pollList);
  return (
    <section style={{ padding: "100px 0" }} className="news-section">
      <div className="container">
        <h2>Poll List</h2>

        <div className="news">
          {newsLoading ? (
            <Loading />
          ) : (
            <div className="row">
              {pollList.map((data) => (
                <div className="col">
                  <div className="news-content">
                    <div className="inner">
                      <div className="thumbnail">
                        <Link to={`/poll-list/${data?.id}`}>
                          <img
                            src={
                              data.id === 10998
                                ? pollImg?.source_url
                                : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                            }
                            alt="thumbnail"
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link
                            style={{ textTransform: "capitalize" }}
                            to={`/poll-list/${data?.id}`}
                          >
                            {" "}
                            {data?.title?.rendered}
                          </Link>
                        </h4>

                        <p className="desc">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Odit esse numquam laboriosam quaerat molestiae
                          asperiores excepturi? Dolores temporibus numquam
                          aliquam!
                        </p>
                        <Link
                          to={`/poll-list/${data?.id}`}
                          className="read-btn"
                        >
                          Join Now! <i className="fas fa-caret-right"></i>
                        </Link>

                        <p className="date-published">{data.event_start}</p>
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
  );
};

export default PollList;
