import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "../Shear/VideoModal";
import video1 from "../../Assets/video/Our-Belonging-State-of-Mind-1.mp4";
import video2 from "../../Assets/video/Our-Royal-Seven-1.mp4";
import video3 from "../../Assets/video/Our-Beautiful-Black-Hair-1.mp4";
import video4 from "../../Assets/video/Our-Ruby-Bridges-1.mp4";
import video5 from "../../Assets/video/Our-Familys-Secret-Spelling-Bee-Recipe-1.mp4";
import video6 from "../../Assets/video/Our-Hip-Hop-Gems-Lil-Baby-Edition-1.mp4";

const TabContent2 = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video1 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Our Belonging State of Mind ft. Mikal
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video2 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Our Royal Seven ft. Amauri & Tacari
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video3 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Our Beautiful Black Hair ft. Jewels, Shaniya, Tamia, & Asia
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video4 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Our Ruby Bridges ft. Fernanda & Tamya
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video5 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Our Family’s Secret Spelling Bee Strategy ft. Ariel, Frank,
                  and Dr. Kenya Dumas
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
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
                  onClick={(e) => {
                    setData({ title: e.target.innerText, video: video6 });
                    setOpen(true);
                  }}
                  className="smt-c-item-title"
                >
                  Bonus Track: Our Hip-Hop Gems ft. Daniel
                </button>
              ) : (
                <Link to="/login" className="smt-c-item-title">
                  Bonus Track: Our Hip-Hop Gems ft. Daniel
                </Link>
              )}
            </li>
          </ul>
        </div>
        {open ? <VideoModal data={data} setOpen={setOpen} /> : ""}
      </div>
    </>
  );
};

export default TabContent2;
