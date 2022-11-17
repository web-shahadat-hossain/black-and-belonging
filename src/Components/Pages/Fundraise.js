import React from "react";
import Separator from "../Shear/Separator";
import Comments from "./Comments";
import FundraiseArea from "./FundraiseArea";
import FundraisingTeam from "./FundraisingTeam";

const Fundraise = () => {
  return (
    <>
      <div className="fundraise-page">
        <div className="container" style={{ maxWidth: "1300px" }}>
          <h1>Black and Belonging - Fundraise</h1>
          <FundraiseArea />
          <div className="bottom-section">
            <FundraisingTeam />

            <div className="comments-section">
              <h3>Words of support (6)</h3>
              <span className="comment-note">
                After shopping, please feel free to share a few words of
                support, encouragement or inspiration.
              </span>

              <Comments />
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Fundraise;
