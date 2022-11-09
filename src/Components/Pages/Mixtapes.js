import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Mixtape from "./Mixtape";

const Mixtapes = () => {
  const [Loading, isLoading] = useState(true);
  const [mixtape, setMactape] = useState([]);
  const [mixtapeOB, setMactapeOB] = useState({});

  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/stm-courses").then(
      (res) =>
        res.json().then((data) => {
          setMactape(data);
          isLoading(false);
        })
    );
  }, []);
  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/media/10551").then(
      (res) =>
        res.json().then((data) => {
          setMactapeOB(data);
          isLoading(false);
        })
    );
  }, []);

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
              {mixtape.map((data) => (
                <Mixtape
                  mixtapeOB={mixtapeOB}
                  key={data.id}
                  Loadings={Loading}
                  data={data}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mixtapes;
