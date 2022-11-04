import React from "react";
import mixtape from "../../Assets/images/hb-mixtape.jpg";

const Mixtapes = () => {
  return (
    <>
      {/* <!-- ===== Mix tapes Header ===== --> */}
      <section className="mixtapes-page">
        <div className="container">
          <div className="mixtapes-page-header">
            <div className="head">
              <h1>Mixtapes</h1>
            </div>

            <div className="search-course">
              <input
                type="text"
                name="search-course"
                placeholder="Search Courses"
              />
              <button type="submit" className="searchBtn">
                <i className="fa fa-search"></i>
              </button>
            </div>

            <div className="course-sort">
              <div className="sort-grid">
                <span className="sort-label">Sort By:</span>
                <select id="sort-select">
                  <option value="date_high">Release date (newest first)</option>
                  <option value="date_low">Release date (oldest first)</option>
                  <option value="price_high">Price high</option>
                  <option value="price_low">Price low</option>
                  <option value="rating">Overall Rating</option>
                  <option value="popular">Popular (most viewed)</option>
                </select>
              </div>

              <div className="course-filter">
                <div className="filter-icon">
                  <i className="fi-rr-grid"></i>
                </div>

                <div className="filter-icon">
                  <i className="fi-rr-list"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Mix tapes ===== --> */}
      <section className="tape-section">
        <div className="container">
          <div className="tape">
            <div className="row">
              <div className="col">
                <div className="tape-content">
                  <div className="inner">
                    <div className="thumbnail">
                      <a href="mixtape_single.html">
                        <img src={mixtape} alt="thumbnail" />
                      </a>
                    </div>
                    <div className="content">
                      <span className="category">Student Voice</span>
                      <h4 className="title">
                        <a href="mixtape_single.html">
                          HeartBelonging Mixtape Vol. 1: Hoodies, Hair &
                          Heritage
                        </a>
                      </h4>

                      <p className="course-type">Free</p>
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
