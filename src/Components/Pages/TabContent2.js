import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../Shear/VideoModal";

const TabContent2 = () => {
  const [open, setOpen] = useState(false);
  const authentication = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {" "}
      <div className="tab-pane">
        <h3 className="curriculum-title">Tracklist</h3>

        <div className="smt-curriculum-item">
          <ul className="smt-c-item-list">
            <li>
              <p className="smt-item-serial">1</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Belonging State of Mind ft. Mikal
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Belonging State of Mind ft. Mikal
                </Link>
              )}
            </li>

            <li>
              <p className="smt-item-serial">2</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Royal Seven ft. Amauri & Tacari
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Royal Seven ft. Amauri & Tacari
                </Link>
              )}
            </li>

            <li>
              <p className="smt-item-serial">3</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Beautiful Black Hair ft. Jewels, Shaniya, Tamia, & Asia
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Beautiful Black Hair ft. Jewels, Shaniya, Tamia, & Asia
                </Link>
              )}
            </li>

            <li>
              <p className="smt-item-serial">4</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Ruby Bridges ft. Fernanda & Tamya
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Ruby Bridges ft. Fernanda & Tamya
                </Link>
              )}
            </li>

            <li>
              <p className="smt-item-serial">5</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Family’s Secret Spelling Bee Strategy ft. Ariel, Frank,
                  and Dr. Kenya Dumas
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Our Family’s Secret Spelling Bee Strategy ft. Ariel, Frank,
                  and Dr. Kenya Dumas
                </Link>
              )}
            </li>

            <li>
              <p className="smt-item-serial">6</p>
              <i className="fa-regular fa-circle-play smt-c-icon"></i>
              {authentication ? (
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: " pointer",
                  }}
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Bonus Track: Our Hip-Hop Gems ft. Daniel
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setOpen(true)}
                  className="smt-c-item-title"
                >
                  Bonus Track: Our Hip-Hop Gems ft. Daniel
                </Link>
              )}
            </li>
          </ul>
        </div>
        {open ? <VideoModal setOpen={setOpen} /> : ""}
      </div>
    </>
  );
};

export default TabContent2;
