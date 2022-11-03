import React from "react";

import { presenceData } from "../../../Data/NationalPresenceData";

const NationalPresence = () => {
  console.log(presenceData);
  return (
    <div>
      <div className="what-we-do">
        <div className="container">
          <h1 className="what-we-do-head">
            We help structure learning environments where students feel
            accepted, respected, included and supported.
          </h1>
          <span className="what-we-do-span">National Presence</span>

          <div className="achievements">
            <div className="row">
              {presenceData.map((data) => (
                <div className="col">
                  <div className="achievement-content">
                    <div className="inner">
                      <div className="icon">
                        <i
                          className={`${
                            data.icon == "fa-leanpub" ? "fab" : "fas"
                          }  ${data.icon}`}
                        ></i>
                      </div>

                      <div className="content">
                        <h4 className="title">{data.number}</h4>
                        <p className="desc">{data.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalPresence;
