import React, { useContext } from "react";
import { EventNested } from "./Event";
import convertHtmlToReact from "@hedgedoc/html-to-react";

const EventHowToApply = () => {
  const event = useContext(EventNested);

  return (
    <>
      <p style={{ color: "#c4cfde" }}>
        {convertHtmlToReact(event.how_to_apply)}
      </p>
    </>
  );
};

export default EventHowToApply;
