import React from "react";

const AboutTeam = ({ data }) => {
  return (
    <>
      <div className="col">
        <a href={data?.href} target="blank">
          <div className="our-tribe">
            <div className="tribe-img">
              <img src={data?.image} alt="" />
            </div>
            <div className="tribe-title">
              <a
                href="https://www.linkedin.com/in/joanna-ali-808b7a223/"
                target="blank"
              >
                {data?.name}
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default AboutTeam;
