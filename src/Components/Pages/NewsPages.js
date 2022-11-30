import React from "react";
import Loading from "../Shear/Loading";
import UseNews from "../../Hook/UseNews";
import convertHtmlToReact from "@hedgedoc/html-to-react";

const NewsPages = () => {
  const [news, newsLoading] = UseNews();

  return (
    <>
      <section className="news-header">
        <div className="container">
          <h1>Latest News</h1>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>News</h2>

          <div className="news">
            {newsLoading ? (
              <Loading />
            ) : (
              <div className="row">
                {news?.map((data) => (
                  <div key={data?.id} className="col">
                    <div className="news-content">
                      <div className="inner">
                        <div className="thumbnail">
                          <a href="#!">
                            <img src={data?.fimg_url} alt="thumbnail" />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="#!">{data?.title?.rendered}</a>
                          </h4>
                          <p className="desc">
                            {convertHtmlToReact(data?.excerpt?.rendered)}
                          </p>
                          <a href={data?.link} className="read-btn">
                            Read More <i className="fas fa-caret-right"></i>
                          </a>

                          <p className="date-published">{data?.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPages;
