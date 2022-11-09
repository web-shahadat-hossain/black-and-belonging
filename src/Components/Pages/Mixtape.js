import React from "react";
import Loading from "../Shear/Loading";

const Mixtape = ({ data, Loadings, mixtapeOB }) => {
  console.log(Loadings);
  return (
    <>
      {Loadings ? (
        <Loading />
      ) : (
        <div className="col">
          <div className="tape-content">
            <div className="inner">
              <div className="thumbnail">
                <a href="mixtape_single.html">
                  <img src={mixtapeOB?.guid?.rendered} alt="thumbnail" />
                </a>
              </div>
              <div className="content">
                <span className="category">Student Voice</span>
                <h4 className="title">
                  <a href="mixtape_single.html">{data?.title?.rendered}</a>
                </h4>

                <p className="course-type">Free</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mixtape;
