import React from "react";
import "../../Assets/Style/modal.css";

const VideoModal = ({ setOpen, title }) => {
  return (
    <div className="modal_container show">
      <div className="modal">
        <div className="modal-box">
          <div>
            <h1>{title}</h1>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: " pointer",
              }}
              onClick={() => setOpen(false)}
              className="modal_close"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <iframe
            src="https://www.youtube.com/embed/FIy_cGkVgM8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
