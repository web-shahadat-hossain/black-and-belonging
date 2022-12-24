import React, { useEffect, useState } from "react";
import convertHtmlToReact from "@hedgedoc/html-to-react";

const TabContent1 = () => {
  const [mixtape, setMactape] = useState([]);

  useEffect(() => {
    fetch("https://api.blackandbelonging.com/wp-json/wp/v2/stm-courses").then(
      (res) =>
        res.json().then((data) => {
          setMactape(data);
        })
    );
  }, []);
  return (
    <>
      {mixtape.map((data) => (
        <div className="tab-pane show" id="tab-1-content">
          <div className="smt-description">
            {convertHtmlToReact(data.content.rendered)}
          </div>
        </div>
      ))}
    </>
  );
};

export default TabContent1;
