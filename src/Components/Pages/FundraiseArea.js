import React from "react";
import web from "../../Assets/images/fund.webp";
import heart from "../../Assets/images/user-heart.png";
const FundraiseArea = () => {
  return (
    <>
      <div className="fundraise-area">
        <div className="left-section">
          <div className="fund-main-thumb">
            <img src={web} alt="Fundraise" />
          </div>

          <div className="mobile-content">
            <div className="right-headline">
              <h4>
                <span>$7,655</span> USD raised of $17,000 goal
              </h4>
              <div className="progressBar">
                <div className="progressLine"></div>
              </div>
              <h4>85 Supporters</h4>
            </div>

            <div className="fund-options">
              <button className="donate">Shop Now</button>
              <button className="share">Share</button>
            </div>
          </div>

          <div className="fund-content">
            <div className="headline">
              <div className="fund-heart-icon">
                <i className="fa fa-hand-holding-heart"></i>
              </div>
              <div className="tag">
                <i className="fas fa-user-friends"></i>Team Description
                <p>
                  William Logan and 8 others are organizing this pop-up-shop.
                </p>
              </div>
            </div>

            <div className="fund-desc">
              <p>
                Opened in 1922 as Hillside Park High School, Hillside High
                School is one of the oldest historically Black high schools in
                North Carolina, whose doors are still open today. The
                contributions that Hillside has made to our country are
                countless, as evidenced by the many unsung and notable alumni
                who continue to make a difference in our society. Not only has
                Hillside High produced stellar alums, but it also serves as a
                think tank that prepares students to fight for civil rights,
                protest wars, and demand equal educational opportunities even
                today. Hillside High School has been continuously recognized as
                an institution of community leadership, athletic excellence, and
                rigorous academic training <span id="dots">...</span>
              </p>

              <p id="more">
                Reverend Dr. Martin Luther King, Jr., who once gave a speech at
                Hillside, said, "We are not makers of history. We are made by
                history." Hillside High School is an institution with a storied
                history and deserves to have it preserved. Our current and
                future students must learn and appreciate the history that makes
                them. With the increase of new families and businesses in
                Durham, people deserve to know the many positive contributions
                Hillside continues to make to our community. <br />
                The Hillside Centennial Timeline Project aims to curate an
                artistic, professional timeline that chronicles our school's
                history for its first 100 years. In addition, it will be an
                educational tool for students, educators, and the community.
                Capturing some of the most salient moments, prominent educators,
                and notable alumni at Hillside High School, the timeline will
                stretch across an entire wall, making our history visible. The
                installation will be like a museum in our school! Please help us
                celebrate our school's centennial anniversary and educate the
                community, but more importantly, encourage our students to see
                themselves as the continuation of an exceptional legacy by
                donating any amount today.
              </p>

              <a href="!#" id="read-btn">
                Read more
              </a>
            </div>

            <div className="fund-options">
              <button className="donate">Shop</button>
              <button className="share">Share</button>
            </div>

            <div className="mobile-content">
              <h3 style={{ color: " #c4cfde", margin: " 20px 0" }}>
                Supporter (85)
              </h3>
              <div className="recent-stats">
                <div className="stat-icon">
                  <i className="fa fa-arrow-trend-up"></i>
                </div>
                <span>22 people just supported</span>
              </div>

              <ul className="donator-list">
                <li>
                  <a href="!#">
                    <div className="d-icon">
                      <img src={heart} alt="heart" />
                    </div>
                  </a>
                  <div className="d-details">
                    <a href="!#">
                      <p className="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p className="amount">$20</p>
                      </a>
                      <a href="!#" className="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a href="!#">
                    <div className="d-icon">
                      <img src={heart} alt="heart" />
                    </div>
                  </a>
                  <div className="d-details">
                    <a href="!#">
                      <p className="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p className="amount">$20</p>
                      </a>
                      <a href="!#" className="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a href="!#">
                    <div className="d-icon">
                      <img src={heart} alt="" />
                    </div>
                  </a>
                  <div className="d-details">
                    <a href="!#">
                      <p className="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p className="amount">$20</p>
                      </a>
                      <a href="@#" className="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="fund-options d-options">
                <button className="all-donations">See All</button>
                <button className="top-donations">
                  <i className="fa fa-star"></i> See top supporters
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="right-headline">
            <h4>
              <span>$7,655</span> USD raised of $17,000 goal
            </h4>
            <div className="progressBar">
              <div className="progressLine"></div>
            </div>
            <h4>85 Supporters</h4>
          </div>

          <div className="fund-options">
            <button className="donate">Shop Now</button>
            <button className="share">Share</button>
          </div>

          <div className="recent-stats">
            <div className="stat-icon">
              <i className="fa fa-arrow-trend-up"></i>
            </div>
            <span>22 people just supported</span>
          </div>

          <ul className="donator-list">
            <li>
              <a href="!#">
                <div className="d-icon">
                  <img src={heart} alt="heart" />
                </div>
              </a>
              <div className="d-details">
                <a href="!#">
                  <p className="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p className="amount">$20</p>
                  </a>
                  <a href="!#" className="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="!#">
                <div className="d-icon">
                  <img src={heart} alt="heart" />
                </div>
              </a>
              <div className="d-details">
                <a href="!#">
                  <p className="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p className="amount">$20</p>
                  </a>
                  <a href="!#" className="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="!#">
                <div className="d-icon">
                  <img src={heart} alt="" />
                </div>
              </a>
              <div className="d-details">
                <a href="!#">
                  <p className="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p className="amount">$20</p>
                  </a>
                  <a href="!#" className="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div className="fund-options d-options">
            <button className="all-donations">See All</button>
            <button className="top-donations">
              <i className="fa fa-star"></i> See top supporters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundraiseArea;
