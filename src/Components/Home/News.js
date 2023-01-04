import React from "react";
import Separator from "../Shear/Separator";
import { newsData } from "../../Data/newsData";
import UseNews from "../../Hook/UseNews";
import { convertHtmlToReact } from "@hedgedoc/html-to-react/dist/convertHtmlToReact";
import moment from "moment";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <Separator />
      <section className="news-section">
        <div className="container">
          <div className="news">
            <div className="row">
              {newsData?.slice(0, 3)?.map((data) => (
                <div key={data?.id} className="col">
                  <div className="news-content">
                    <div className="inner">
                      <div className="thumbnail">
                        <Link to={`/news/${data.id}`}>
                          <img src={data?.image} alt="thumbnail" />
                        </Link>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <Link to={`/news/${data.id}`}>
                            {convertHtmlToReact(data?.title)}
                          </Link>
                        </h4>
                        <p className="desc">
                          {convertHtmlToReact(data?.description)}
                        </p>
                        <Link to={`/news/${data.id}`} className="read-btn">
                          Read More <i className="fas fa-caret-right"></i>
                        </Link>

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

export default News;
