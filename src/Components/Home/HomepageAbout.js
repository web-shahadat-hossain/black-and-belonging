import React from "react";
import aboutImages from "../../Assets/images/about/about4.jpg";
import Separator from "../Shear/Separator";

const HomePageAbout = () => {
  return (
    <>
      <Separator />
      <section class="homepage-about">
        <div class="container">
          <div class="about4">
            <div class="about4-content">
              <div class="welcome-msg">
                <h2>Welcome Message</h2>
              </div>

              <p>
                "Black and Belonging works diligently to establish and maintain
                deep, long-lasting relationships with educators and youth
                leaders. Our custom-built belonging initiatives emanate from
                meaningful, vulnerable conversations. We create space for our
                partners to hear one another and make productive strides
                forward. And we don’t simply make decisions about how schools
                should be structured for youth. We make decisions with youth,
                and support them in advocating for how the schools of tomorrow
                should look and feel."
              </p>

              <div class="linkedin">
                <a
                  href="https://www.linkedin.com/in/deleon-gray-phd-67b2a3b/"
                  target="blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/deleon-gray-phd-67b2a3b/"
                  target="blank"
                >
                  <h4>DeLeon Gray, PhD | LinkedIn</h4>
                </a>
              </div>
            </div>

            <div class="about4-img">
              <img src={aboutImages} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageAbout;