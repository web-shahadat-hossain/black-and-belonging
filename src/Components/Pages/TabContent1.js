import React, { useEffect, useState } from "react";

const TabContent1 = () => {
  const [mixtape, setMactape] = useState([]);

  useEffect(() => {
    fetch("https://blackandbelonging.com/wp-json/wp/v2/stm-courses").then(
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
            <p>{data.content.rendered}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TabContent1;
