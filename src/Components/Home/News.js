import React from "react";
import newsImages1 from "../../Assets/images/news/news1.jpg";
import newsImages2 from "../../Assets/images/news/news2.jpeg";
import newsImages3 from "../../Assets/images/news/news3.jpg";
import Separator from "../Shear/Separator";

const News = () => {
  return (
    <>
      <Separator />
      {/* <!-- ===== News Section ===== --> */}
      <section class="news-section">
        <div class="container">
          <div class="news">
            <div class="row">
              <div class="col">
                <div class="news-content">
                  <div class="inner">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={newsImages1} alt="thumbnail" />
                      </a>
                    </div>
                    <div class="content">
                      <h4 class="title">
                        <a href="#">
                          Go DJ! Divine Nine and College Leaders Show Big Love
                          at Neal’s Welcome Back Kick-Off
                        </a>
                      </h4>
                      <p class="desc">
                        Schools across North Carolina recently welcomed students
                        back for the academic year, and the first-day experience
                        at Neal Magnet Middle School was one for the
                      </p>
                      <a href="#" class="read-btn">
                        Read More <i class="fas fa-caret-right"></i>
                      </a>

                      <p class="date-published">September 6, 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="news-content">
                  <div class="inner">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={newsImages2} alt="thumbnail" />
                      </a>
                    </div>
                    <div class="content">
                      <h4 class="title">
                        <a href="#">
                          How Frank Dumas Made a Name For Himself at 10-Years
                          Old
                        </a>
                      </h4>
                      <p class="desc">
                        Frank Dumas IV recently participated in the Scripps
                        National Spelling Bee, representing North Carolina, the
                        Duke Office of Durham and Community Affairs, and
                        Bethesda Elementary
                      </p>
                      <a href="#" class="read-btn">
                        Read More <i class="fas fa-caret-right"></i>
                      </a>

                      <p class="date-published">August 31, 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="news-content">
                  <div class="inner">
                    <div class="thumbnail">
                      <a href="#">
                        <img src={newsImages3} alt="thumbnail" />
                      </a>
                    </div>
                    <div class="content">
                      <h4 class="title">
                        <a href="#">
                          Belonging Helps Black, Latino Students Feel Engaged
                        </a>
                      </h4>
                      <p class="desc">
                        A new study found that a group of predominantly Black
                        and Latino sixth-graders reported they were more likely
                        to pay attention, work hard and participate
                      </p>
                      <a href="#" class="read-btn">
                        Read More <i class="fas fa-caret-right"></i>
                      </a>

                      <p class="date-published">August 24, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
