import React from "react";
import "../../Assets/Style/modal.css";

const VideoModal = ({ setOpen }) => {
  return (
    <div className="modal_container show">
      <div className="modal">
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

        <iframe
          src="https://www.youtube.com/embed/FIy_cGkVgM8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
