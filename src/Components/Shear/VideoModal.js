import React from "react";
import "../../Assets/Style/modal.css";

const VideoModal = ({ setOpen, data }) => {
  return (
    <div className="modal_container show">
      <div className="modal">
        <div className="modal-box">
          <div>
            <h1>{data.title}</h1>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: " pointer",
              }}
              onClick={() => setOpen(false)}
              className="modal_close"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <video controls>
            <source src={data.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
