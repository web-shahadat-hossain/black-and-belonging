import React from "react";
import google from "../../Assets/images/google.png";
import blog from "../../Assets/images/blog.jpg";

const SingleBlog = () => {
  return (
    <div>
      <div className="blog-page">
        <div className="container">
          <h1 className="blog-title">
            GO DJ! DIVINE NINE AND COLLEGE LEADERS SHOW BIG LOVE AT NEAL’S
            WELCOME BACK KICK-OFF
          </h1>

          <div className="blog-details">
            <div className="left">
              <div className="details-item blog-published">
                <i className="fa fa-clock"></i> September 6, 2022
              </div>

              <div className="details-item posted-by">
                <i className="fa fa-user"></i> Posted by:{" "}
                <span className="uploader">DeLeon Gray</span>
              </div>

              <div className="details-item blog-cat">
                <i className="fa fa-flag"></i> Category:{" "}
                <span className="cat-name">Liberting Practices</span>
              </div>
            </div>

            <a href="!#" className="blog-comments">
              {" "}
              No Comments
            </a>
          </div>

          <div className="blog-img">
            <img src={blog} alt="" />
          </div>

          <div className="blog-content">
            <p>
              Schools across North Carolina recently welcomed students back for
              the academic year, and the first-day experience at Neal Magnet
              Middle School was one for the books! At all started with a DJ and
              Soul Train style walkway welcoming students to campus.
            </p>

            <p>
              Students were greeted with cheers and positive words of
              affirmation by members of the North Carolina Central University
              (NCCU) Aspire program, NCCU’s Royal Court, and representatives
              from the Divine Nine—including members of Alpha Ph Alpha
              Fraternity, Inc., Alpha Kappa Alpha Sorority, Inc., Kappa Alpha
              Psi Fraternity, Inc., Omega Psi Phi Fraternity, Inc., Delta Sigma
              Theta Sorority, Inc., and Phi Beta Sigma Fraternity, Inc.
            </p>

            <p>
              While many students could have started their morning off feeling
              anxious, nervous, or frightened, there were fist bumps, high
              fives, smiles, and waves as students showed off their first day
              Jordans, crocs, shape-ups, and braids while making their way
              through the grand entrance. Throwbacks like Blockbuster Video
              sweatshirts and Boyz in the Hood t-shirts stood out in a sea of
              first-day middle school fashion.
            </p>

            <p>
              This experience was more than a first-day flex by school
              administrators—it was a model of community-building that we can
              all take a lesson from.
            </p>

            <h2>Creating community and belonging at Neal</h2>

            <p>
              The administrators at Neal did an amazing job coordinating this
              first-day-back event. They ensured that students were all greeted
              warmly and made to feel like their school was the place to be.
              Administrators said it was so important to welcome students back
              this way because they wanted students to feel like valued members
              of the community.
            </p>

            <p>
              After the past couple of years of the pandemic, feeling like a
              valued member of a community can be so difficult. Students across
              the country are still recovering from the experiences of the
              pandemic, including feeling socially disconnected from their peers
              and school environment. The transition to middle school was
              already a difficult experience for many students pre-pandemic, so
              making this transition easier for students is as important now as
              it has ever been.
            </p>

            <h2>Maintaining student motivation for learning</h2>

            <p>
              Research has shown that students experience a decline in
              motivation for learning when they reach middle school. The decline
              is due in part to lingering questions they have about whether they
              really ‘belong’ at their schools.
            </p>

            <p>
              One reason for this is that the school day is structured very
              differently in middle school than in elementary school. Students
              are transitioning from having one or two primary teachers to
              having a schedule that results in less face time with any one
              adult in the school building.
            </p>

            <p>
              Another reason for the decline in motivation is due to the fact
              that students are at an age where they are developing rapidly and
              maturing physically, socially, cognitively, and emotionally.
              Middle schools are not always structured to meet the developing
              needs of students at this age.
            </p>

            <h2>Nurturing the need to belong</h2>

            <p>
              One of the developing needs of middle school-aged students is the
              desire to belong. Feelings of belonging are established when
              students experience a series of interactions that show a
              consistent level of acceptance, respect, inclusion, and support.
            </p>

            <p>
              Students are especially vulnerable to concerns about belonging
              during school transitions, like the move from elementary to middle
              school. However, with the proud support of community members at
              these critical junctures, students can be reminded that they are
              valued members of school and society.
              <br />
              That is why the welcome celebration at Neal was so important.
            </p>

            <h2>Key Takeaways</h2>

            <p>
              Let’s all take a lesson from Neal Middle School and not forget
              what it’s like to be a new person in a new environment. Let’s
              welcome those around us and help build communities where everyone
              feels celebrated.
            </p>

            <p>
              You can start small by speaking life into the young people in the
              community around you. Simply express appreciation for them,
              celebrate them for being who they are, and acknowledge their
              willingness to put their best foot forward, and believe in a
              brighter tomorrow—even in fraught times. Our students can
              experience so many disconfirming messages in their everyday
              encounters (both in person and online). We must combat the
              damaging effects of belonging vulnerability by taking the time to
              show up and show love for our young leaders.
            </p>
          </div>

          <div className="separator">
            <div className="container">
              <div className="divider"></div>
            </div>
          </div>

          <div className="blog-comment-section">
            <div className="login-form">
              <form action="/" method="POST">
                <div className="login-form-wrapper">
                  <h3>Leave a Reply</h3>

                  <div className="row">
                    <div className="col col-lg-12">
                      <div className="login-type">
                        <a href="!#" className="google-login">
                          <img src={google} alt="" /> Sign in with Google
                        </a>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <span>
                          <input
                            type="text"
                            placeholder="Name *"
                            name="blog-name"
                            size="40"
                            id="blog-name"
                            required=""
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <span>
                          <input
                            type="email"
                            placeholder="Email *"
                            name="blog-email"
                            size="40"
                            id="blog-email"
                            required=""
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <span>
                          <textarea
                            name="blog-message"
                            id="blog-message"
                            placeholder="Message *"
                            cols="40"
                            rows="10"
                            required=""
                          ></textarea>
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <input type="submit" value="Post Comment" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
