import React from "react";

import AboutContent from "./AboutContent";
import { aboutTeam } from "../../Data/AboutTeamData";
import AboutTeam from "./AboutTeam";
const About = () => {
  console.log(aboutTeam);
  return (
    <>
      {" "}
      <section className="about-page">
        <div className="container">
          <AboutContent />
          <div className="about5">
            <h2>Our Tribe</h2>

            <div className="row">
              {aboutTeam.map((data) => (
                <AboutTeam key={data.id} data={data}></AboutTeam>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
