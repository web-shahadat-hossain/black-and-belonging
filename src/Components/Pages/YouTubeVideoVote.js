import React from "react";
import "../../Assets/Style/youtbeVideoPull.css";
import youtbeLogo from "../../Assets/images/yotube (1).png";
import youtbeBanner from "../../Assets/images/yotube (2).png";

const YouTubeVideoVote = () => {
  return (
    <section className="youtube_video-pull">
      <div className="it_epoll_container">
        <h1 className="it_epoll_title">
          <span className="it_epoll_title_exact">Microsoft Vs Apple</span>
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
                {/* <div className="it_epoll_big_cover">
                  <img src={youtbeBanner} alt="" />
                </div>

                <div className="it_epoll_survey-country it_epoll_grid-only">
                  <img src={youtbeLogo} alt="" />
                  <div className="it_epoll_spinner">
                  
                  </div>
                </div> */}
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/FIy_cGkVgM8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; fullscreen;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

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
                      value="9284"
                    />
                    <input
                      type="hidden"
                      name="it_epoll_survey-item-id"
                      id="it_epoll_survey-item-id"
                      value="121921020931"
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
                <iframe
                  width="100%"
                  src="https://www.youtube.com/embed/FIy_cGkVgM8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; fullscreen;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

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
                      value="9284"
                    />
                    <input
                      type="hidden"
                      name="it_epoll_survey-item-id"
                      id="it_epoll_survey-item-id"
                      value="121921043548"
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
    </section>
  );
};

export default YouTubeVideoVote;
