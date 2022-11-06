import React from "react";
import about2 from "../../Assets/images/about/about2.jpg";
import about3 from "../../Assets/images/about/about3.jpg";
import about4 from "../../Assets/images/about/about4.jpg";

const AboutContent = () => {
  return (
    <>
      <div class="about1">
        <div class="about-head">
          <h1>About Black And Belonging</h1>
        </div>

        <p>
          The Black and Belonging collaborative is a close-knit network of
          award-winning and equity-focused scholars, educators, administrators,
          and youth leaders. Our mission is to disrupt structural aspects of
          school environments that leave marginalized students vulnerable to
          anxieties about belonging. We build with educators. We amplify the
          voices of young people. We create opportunities for all students to
          feel that their educational experiences are being structured
          especially for them.
        </p>
        <p>
          Our customized workshops, consultations, evaluation measures, and
          mentoring opportunities cultivate a sense of leadership, agency,
          voice, and self-expression among youth from culturally, ethnically,
          and linguistically diverse backgrounds. At its heart, Black and
          Belonging is about collaborating with communally-oriented people who
          are ready to “unschool” school, making educational spaces places where
          young people want to be and want to learn.
        </p>
      </div>

      <div class="about2">
        <h2>
          Fostering and Assessing Opportunities to Belong: Our Unconventional
          Approach
        </h2>

        <div class="about2-content">
          <p>
            Black and Belonging was born in research, and grown through the
            development of next-level resources that can be used to assess and
            transform belonging within today’s learning environments. Our
            engaged approach not only illuminates the path towards belonging,
            but also helps educators to document their institutional wisdom, so
            that enriched practices can become permanent cornerstones within
            their schools and communities. Our vision is that the coalitions and
            partnerships we create will make an impact that extends far beyond
            the classroom. Together, we can honor and support the young
            creatives who will forge the racial uplift, social progress,
            community liberation, and cultural affirmation of tomorrow.
          </p>

          <div class="about2-img">
            <img src={about2} alt="about" />
          </div>
        </div>
      </div>

      <div class="about3">
        <div class="about3-img">
          <img src={about3} alt="about" />
        </div>

        <div class="about3-content">
          <h2>A Platform for Youth Voice and Agency</h2>
          <p>
            Black and Belonging casts a spotlight on youth voices, creating
            space for them to be involved in ground-up transformation of their
            own educational process. If there’s one thing our research has
            taught us, it is how powerful a resource cultural expression can be.
            We are committed to supporting our youth in fostering critical
            consciousness, collective impact, connectedness, communication
            skills, and community through Black and Belonging-supported
            programs.
          </p>

          <p>
            The Black and Belonging Lapel Pin Initiative is an example of our
            efforts to foster youth voice, agency, and creativity. Our young
            people develop their skills and vision through supported deep-dive
            research and artwork creation, with a focus on calling attention to
            societal injustices facing people of the African diaspora. They then
            share their designs to create social awareness while raising money
            for causes they believe in. In serving their community, serving
            humanity, and serving one another, bright young minds discover how
            to simultaneously and constructively serve themselves.
          </p>
        </div>
      </div>

      <div class="about4">
        <div class="about4-content">
          <div class="welcome-msg">
            <h2>Welcome Message</h2>
          </div>

          <p>
            "Black and Belonging works diligently to establish and maintain
            deep, long-lasting relationships with educators and youth leaders.
            Our custom-built belonging initiatives emanate from meaningful,
            vulnerable conversations. We create space for our partners to hear
            one another and make productive strides forward. And we don’t simply
            make decisions about how schools should be structured for youth. We
            make decisions with youth, and support them in advocating for how
            the schools of tomorrow should look and feel."
          </p>

          <div class="linkedin">
            <a
              href="https://www.linkedin.com/in/deleon-gray-phd-67b2a3b/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/deleon-gray-phd-67b2a3b/"
              target="_blank"
            >
              <h4>DeLeon Gray, PhD | LinkedIn</h4>
            </a>
          </div>
        </div>

        <div class="about4-img">
          <img src={about4} />
        </div>
      </div>
    </>
  );
};

export default AboutContent;
