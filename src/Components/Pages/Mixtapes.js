import React from "react";
import mixtape from "../../Assets/images/hb-mixtape.jpg";

const Mixtapes = () => {
  return (
    <>
      {/* <!-- ===== Mix tapes Header ===== --> */}
      <section class="mixtapes-page">
        <div class="container">
          <div class="mixtapes-page-header">
            <div class="head">
              <h1>Mixtapes</h1>
            </div>

            <div class="search-course">
              <input
                type="text"
                name="search-course"
                placeholder="Search Courses"
              />
              <button type="submit" class="searchBtn">
                <i class="fa fa-search"></i>
              </button>
            </div>

            <div class="course-sort">
              <div class="sort-grid">
                <span class="sort-label">Sort By:</span>
                <select id="sort-select">
                  <option value="date_high">Release date (newest first)</option>
                  <option value="date_low">Release date (oldest first)</option>
                  <option value="price_high">Price high</option>
                  <option value="price_low">Price low</option>
                  <option value="rating">Overall Rating</option>
                  <option value="popular">Popular (most viewed)</option>
                </select>
              </div>

              <div class="course-filter">
                <div class="filter-icon">
                  <i class="fi-rr-grid"></i>
                </div>

                <div class="filter-icon">
                  <i class="fi-rr-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Mix tapes ===== --> */}
      <section class="tape-section">
        <div class="container">
          <div class="tape">
            <div class="row">
              <div class="col">
                <div class="tape-content">
                  <div class="inner">
                    <div class="thumbnail">
                      <a href="mixtape_single.html">
                        <img src={mixtape} alt="thumbnail" />
                      </a>
                    </div>
                    <div class="content">
                      <span class="category">Student Voice</span>
                      <h4 class="title">
                        <a href="mixtape_single.html">
                          HeartBelonging Mixtape Vol. 1: Hoodies, Hair &
                          Heritage
                        </a>
                      </h4>

                      <p class="course-type">Free</p>
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

export default Mixtapes;
