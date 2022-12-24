import React, { useEffect } from "react";
import "../../Assets/Style/youtbeVideoPull.css";
import youtbeLogo from "../../Assets/images/yotube (1).png";
import youtbeBanner from "../../Assets/images/yotube (2).png";
import { useState } from "react";
import Loading from "../Shear/Loading";

const YouTubeVideoVote = () => {
  const [pollData, setPollData] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.blackandbelonging.com/wp-json/wp/v2/it_epoll_poll`)
      .then((res) => res.json())
      .then((data) => {
        setPollData(data);
        setNewsLoading(false);
      });
  }, []);

  return (
    <section className="youtube_video-pull">
      {pollData.map((data) =>
        newsLoading ? (
          <Loading />
        ) : (
          <div className="it_epoll_container">
            <h1 className="it_epoll_title">
              <span className="it_epoll_title_exact">
                {data.it_epoll_poll_option[0]} Vs {data.it_epoll_poll_option[1]}
              </span>
              <span className="it_epoll_survey-stage">
                <span
                  className="it_epoll_stage it_epoll_ended it_epoll_active"
                  style={{ display: "none" }}
                >
                  Ended
                </span>
              </span>
            </h1>
            <div className="it_epoll_inner">
              <ul className="it_epoll_surveys it_epoll_grid">
                <li className="it_epoll_survey-item">
                  <div className="it_epoll_survey-item-inner it_epoll_card_front">
                    <video width="100%" controls>
                      <source
                        src={data.it_epoll_poll_option_cover_img[0]}
                        type="video/mp4"
                      />
                    </video>

                    <div className="it_epoll_survey-item-action">
                      <form
                        action=""
                        name="it_epoll_survey-item-action-form"
                        className="it_epoll_survey-item-action-form"
                      >
                        <input
                          type="hidden"
                          name="it_epoll_poll-id"
                          id="it_epoll_poll-id"
                          value={data.id}
                        />
                        <input
                          type="hidden"
                          name="it_epoll_survey-item-id"
                          id="it_epoll_survey-item-id"
                          value={data.it_epoll_poll_option_id[0]}
                        />
                        <a href="!#" className="vot custom_login">
                          Vote
                        </a>
                      </form>
                    </div>

                    <div className="it_epoll_pull-right">
                      <span className="it_epoll_survey-progress">
                        <span className="it_epoll_survey-progress-bg">
                          <span
                            className="it_epoll_survey-progress-fg "
                            style={{ width: "50%" }}
                          ></span>
                        </span>

                        <span className="it_epoll_survey-progress-labels">
                          <span className="it_epoll_survey-progress-label">
                            50%
                          </span>
                          <input
                            type="hidden"
                            name="it_epoll_poll_e_vote_count"
                            id="it_epoll_poll_e_vote_count"
                            value="1"
                          />
                          <span
                            style={{ color: "#fff" }}
                            className="it_epoll_survey-completes"
                          >
                            1 / 2{" "}
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="it_epoll_survey-item">
                  <div className="it_epoll_survey-item-inner it_epoll_card_front">
                    <video width="100%" controls>
                      <source
                        src={data.it_epoll_poll_option_cover_img[1]}
                        type="video/mp4"
                      />
                    </video>

                    <div className="it_epoll_survey-item-action">
                      <form
                        action=""
                        name="it_epoll_survey-item-action-form"
                        className="it_epoll_survey-item-action-form"
                      >
                        <input
                          type="hidden"
                          name="it_epoll_poll-id"
                          id="it_epoll_poll-id"
                          value={data.id}
                        />
                        <input
                          type="hidden"
                          name="it_epoll_survey-item-id"
                          id="it_epoll_survey-item-id"
                          value={data.it_epoll_poll_option_id[1]}
                        />
                        <a href="!#" className="vot custom_login">
                          Vote
                        </a>
                      </form>
                    </div>

                    <div className="it_epoll_pull-right">
                      <span className="it_epoll_survey-progress">
                        <span className="it_epoll_survey-progress-bg">
                          <span
                            className="it_epoll_survey-progress-fg "
                            style={{ width: "50%" }}
                          ></span>
                        </span>

                        <span className="it_epoll_survey-progress-labels">
                          <span className="it_epoll_survey-progress-label">
                            50%
                          </span>
                          <input
                            type="hidden"
                            name="it_epoll_poll_e_vote_count"
                            id="it_epoll_poll_e_vote_count"
                            value="1"
                          />
                          <span
                            style={{ color: "#fff" }}
                            className="it_epoll_survey-completes"
                          >
                            1 / 2{" "}
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>{" "}
              <div style={{ clear: "both" }}></div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default YouTubeVideoVote;
