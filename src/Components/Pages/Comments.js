import React from "react";
import heart from "../../Assets/images/user-heart.png";

const Comments = () => {
  return (
    <>
      <ul className="comments">
        <li>
          <div className="d-icon">
            <img src={heart} alt="heart" />
          </div>

          <div className="members-detail">
            <h4 className="m-name">Frances Starn</h4>
            <div className="comment-details">
              <p className="amount">$20</p>
              <span className="time">8 hrs</span>
            </div>

            <p className="comment">Go Hornets</p>
          </div>
        </li>

        <li>
          <div className="d-icon">
            <img src={heart} alt="heart" />
          </div>

          <div className="members-detail">
            <h4 className="m-name">Frances Starn</h4>
            <div className="comment-details">
              <p className="amount">$100</p>
              <span className="time">4 d</span>
            </div>

            <p className="comment">
              From Stanley Fischer and Barbara Thaxton Fischer class of "61" and
              "62".
            </p>
          </div>
        </li>

        <li>
          <div className="d-icon">
            <img src={heart} alt="heart" />
          </div>

          <div className="members-detail">
            <h4 className="m-name">LaTida Adams</h4>
            <div className="comment-details">
              <p className="amount">$300</p>
              <span className="time">6 d</span>
            </div>

            <p className="comment">
              Congratulations to 100 Years! Hillside Grads c/o 95, 11, &amp; 17
              Hornet Pride
            </p>
          </div>
        </li>

        <li>
          <div className="d-icon">
            <img src={heart} alt="heart" />
          </div>

          <div className="members-detail">
            <h4 className="m-name">Ronda Taylor Bullock</h4>
            <div className="comment-details">
              <p className="amount">$100</p>
              <span className="time">7 d</span>
            </div>

            <p className="comment">
              Happy 100 years! This is a dope project! ~The Bullocks
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Comments;
