import React from "react";
import { useContext } from "react";
import { EventNested } from "./Event";
import convertHtmlToReact from "@hedgedoc/html-to-react";

const EventOverview = () => {
  const event = useContext(EventNested);

  return (
    <>
      <p style={{ color: "#c4cfde" }}>{convertHtmlToReact(event.overview)}</p>
    </>
  );
};

export default EventOverview;
