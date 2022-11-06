import React from "react";

import AboutContent from "./AboutContent";
import { aboutTeam } from "../../Data/AboutTeamData";
import AboutTeam from "./AboutTeam";
const About = () => {
  console.log(aboutTeam);
  return (
    <>
      {" "}
      <section class="about-page">
        <div class="container">
          <AboutContent />
          <div class="about5">
            <h2>Our Tribe</h2>

            <div class="row">
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
