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
                <div className="col">
                  <div className="news-content">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="#">
                          <img src={data.image} alt="thumbnail" />
                        </a>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">{data.title}</a>
                        </h4>
                        <p className="desc">{data.description}</p>
                        <a href="#" className="read-btn">
                          Read More <i className="fas fa-caret-right"></i>
                        </a>

                        <p className="date-published">{data.date}</p>
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
