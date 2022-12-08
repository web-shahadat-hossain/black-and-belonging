import React, { useContext } from "react";
import { EventNested } from "./Event";
import convertHtmlToReact from "@hedgedoc/html-to-react";
const EventTheProcess = () => {
  const event = useContext(EventNested);

  return (
    <>
      <p style={{ color: "#c4cfde" }}>
        {convertHtmlToReact(event.the_process)}
      </p>
    </>
  );
};

export default EventTheProcess;
