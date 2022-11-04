import React from "react";
import { newsData } from "../../Data/newsData";
const NewsPages = () => {
  return (
    <>
      {/* <!-- ===== News Header ===== --> */}
      <section className="news-header">
        <div className="container">
          <h1>Latest News</h1>
        </div>
      </section>

      {/* <!-- ===== News ===== --> */}
      <section className="news-section">
        <div className="container">
          <h2>News</h2>

          <div className="news">
            <div className="row">
              {newsData.map((data) => (
                <div classNameName="col">
                  <div classNameName="news-content">
                    <div classNameName="inner">
                      <div classNameName="thumbnail">
                        <a href="#">
                          <img src={data.image} alt="thumbnail" />
                        </a>
                      </div>
                      <div classNameName="content">
                        <h4 classNameName="title">
                          <a href="#">{data.title}</a>
                        </h4>
                        <p classNameName="desc">{data.description}</p>
                        <a href="#" classNameName="read-btn">
                          Read More <i classNameName="fas fa-caret-right"></i>
                        </a>

                        <p classNameName="date-published">{data.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPages;
