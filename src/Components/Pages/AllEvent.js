import React from "react";
import Loading from "../Shear/Loading";
import UseNews from "../../Hook/UseNews";
import convertHtmlToReact from "@hedgedoc/html-to-react";

const AllEvent = () => {
  const [news, newsLoading] = UseNews();

  return (
    <>
      <section className="news-header">
        <div className="container">
          <h1>All Event</h1>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>Event</h2>

          <div className="news">
            <h1
              style={{
                color: "#ff014f",
                padding: "50px 0",
                textAlign: "center",
              }}
            >
              Coming Soon
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllEvent;
