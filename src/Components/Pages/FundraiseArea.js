import React from "react";
import web from "../../Assets/images/fund.webp";
import heart from "../../Assets/images/user-heart.png";
const FundraiseArea = () => {
  return (
    <>
      <div class="fundraise-area">
        <div class="left-section">
          <div class="fund-main-thumb">
            <img src={web} alt="Fundraise" />
          </div>

          <div class="mobile-content">
            <div class="right-headline">
              <h4>
                <span>$7,655</span> USD raised of $17,000 goal
              </h4>
              <div class="progressBar">
                <div class="progressLine"></div>
              </div>
              <h4>85 Supporters</h4>
            </div>

            <div class="fund-options">
              <button class="donate">Shop Now</button>
              <button class="share">Share</button>
            </div>
          </div>

          <div class="fund-content">
            <div class="headline">
              <div class="fund-heart-icon">
                <i class="fa fa-hand-holding-heart"></i>
              </div>
              <div class="tag">
                <i class="fas fa-user-friends"></i>Team Description
                <p>
                  William Logan and 8 others are organizing this pop-up-shop.
                </p>
              </div>
            </div>

            <div class="fund-desc">
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

            <div class="fund-options">
              <button class="donate">Shop</button>
              <button class="share">Share</button>
            </div>

            <div class="mobile-content">
              <h3 style={{ color: " #c4cfde", margin: " 20px 0" }}>
                Supporter (85)
              </h3>
              <div class="recent-stats">
                <div class="stat-icon">
                  <i class="fa fa-arrow-trend-up"></i>
                </div>
                <span>22 people just supported</span>
              </div>

              <ul class="donator-list">
                <li>
                  <a href="!#">
                    <div class="d-icon">
                      <img src={heart} alt="heart" />
                    </div>
                  </a>
                  <div class="d-details">
                    <a href="!#">
                      <p class="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p class="amount">$20</p>
                      </a>
                      <a href="!#" class="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a href="!#">
                    <div class="d-icon">
                      <img src={heart} alt="heart" />
                    </div>
                  </a>
                  <div class="d-details">
                    <a href="!#">
                      <p class="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p class="amount">$20</p>
                      </a>
                      <a href="!#" class="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a href="!#">
                    <div class="d-icon">
                      <img src={heart} alt="" />
                    </div>
                  </a>
                  <div class="d-details">
                    <a href="!#">
                      <p class="d-name">Frances Starn</p>
                    </a>
                    <div>
                      <a href="!#">
                        <p class="amount">$20</p>
                      </a>
                      <a href="@#" class="d-type">
                        Recent Supporter
                      </a>
                    </div>
                  </div>
                </li>
              </ul>

              <div class="fund-options d-options">
                <button class="all-donations">See All</button>
                <button class="top-donations">
                  <i class="fa fa-star"></i> See top supporters
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="right-section">
          <div class="right-headline">
            <h4>
              <span>$7,655</span> USD raised of $17,000 goal
            </h4>
            <div class="progressBar">
              <div class="progressLine"></div>
            </div>
            <h4>85 Supporters</h4>
          </div>

          <div class="fund-options">
            <button class="donate">Shop Now</button>
            <button class="share">Share</button>
          </div>

          <div class="recent-stats">
            <div class="stat-icon">
              <i class="fa fa-arrow-trend-up"></i>
            </div>
            <span>22 people just supported</span>
          </div>

          <ul class="donator-list">
            <li>
              <a href="!#">
                <div class="d-icon">
                  <img src={heart} alt="heart" />
                </div>
              </a>
              <div class="d-details">
                <a href="!#">
                  <p class="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p class="amount">$20</p>
                  </a>
                  <a href="!#" class="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="!#">
                <div class="d-icon">
                  <img src={heart} alt="heart" />
                </div>
              </a>
              <div class="d-details">
                <a href="!#">
                  <p class="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p class="amount">$20</p>
                  </a>
                  <a href="!#" class="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a href="!#">
                <div class="d-icon">
                  <img src={heart} alt="" />
                </div>
              </a>
              <div class="d-details">
                <a href="!#">
                  <p class="d-name">Frances Starn</p>
                </a>
                <div>
                  <a href="!#">
                    <p class="amount">$20</p>
                  </a>
                  <a href="!#" class="d-type">
                    Recent Supporter
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div class="fund-options d-options">
            <button class="all-donations">See All</button>
            <button class="top-donations">
              <i class="fa fa-star"></i> See top supporters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundraiseArea;
