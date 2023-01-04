import React from "react";
import Loading from "../Shear/Loading";
import UseNews from "../../Hook/UseNews";
import convertHtmlToReact from "@hedgedoc/html-to-react";
import moment from "moment";
import { Link } from "react-router-dom";

const NewsPages = () => {
  const [news, newsLoading] = UseNews();
  console.log(news);
  return (
    <>
      <section className="news-header">
        <div className="container">
          <h1>Newsroom</h1>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          {/* <h2>News</h2> */}

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
                          <Link to={`/news/${data.slug}`}>
                            <img src={data?.fimg_url} alt="thumbnail" />
                          </Link>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <Link to={`/news/${data.slug}`}>
                              {convertHtmlToReact(
                                data?.title?.rendered.slice(0, 100)
                              )}
                              ...
                            </Link>
                          </h4>
                          <p className="desc">
                            {convertHtmlToReact(data?.excerpt?.rendered)}
                          </p>
                          <Link to={`/news/${data.slug}`} className="read-btn">
                            Read More <i className="fas fa-caret-right"></i>
                          </Link>

                          <p className="date-published">
                            {moment(data?.date).format("LLLL")}{" "}
                          </p>
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
