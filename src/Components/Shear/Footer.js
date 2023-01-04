import React from "react";
import { Link } from "react-router-dom";
import tape from "../../Assets/images/tape.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-cols">
              <h3>About</h3>
              <p>
                We make educational spaces places where young people want to be
                and want to learn, placing a special emphasis on students who
                attend predominantly Black K-12 public schools.
              </p>

              <Link to="/contact" className="about-btn">
                Join The Conversation
              </Link>
            </div>

            <div className="footer-cols">
              <h3>Popular Mixtapes</h3>

              <div className="tape">
                <Link to="/mixtape-single">
                  <img src={tape} alt="" />
                </Link>

                <div className="tape-content">
                  <h5>
                    <Link to="/mixtape-single">
                      Heart Belonging Mixtape Vol.1: Hoo...
                    </Link>
                  </h5>
                  <p>By DeLeon Gray</p>
                </div>
              </div>
            </div>

            <div className="footer-cols">
              <h3>Pages</h3>
              <ul className="page-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="mixtapes">Mixtapes</Link>
                </li>
                <li>
                  <Link to="news">News</Link>
                </li>
                <li>
                  <Link to="about">About Us</Link>
                </li>
                <li>
                  <Link to="contact">Contact Us</Link>
                </li>
                {/* <li>
                  <Link to="pop-up-shop">Pop Up Shop</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li> */}
              </ul>
            </div>

            <div className="footer-cols">
              <h3>Contact</h3>

              <div className="contact-info">
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>
                      65 TW Alexander Drive, Unit 12899, Durham, North Carolina,
                      27709
                    </p>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <p>
                      <a href="tel:1111"> (919) 593-7730</a>
                    </p>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>
                      <a href="mailto:contact@blackandbelonging.com">
                        contact@blackandbelonging.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>

              <ul className="social-links">
                <li>
                  <a target="black" href="https://twitter.com/HeartBelonging">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="black" href="https://instagram.com/HeartBelonging">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="black"
                    href="https://www.linkedin.com/company/black-and-belonging/about/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="black"
                    href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="headline">
            <div className="divider"></div>
          </div>
          <div className="footer-row bottom-footer">
            <div className="footer-col">
              <div className="copyright">
                <p>Copyright © 2022 Black And Belonging</p>
              </div>
            </div>

            <div className="footer-col">
              <ul className="copyright-links">
                <li>
                  <Link to="/termsofuse">Terms of use</Link>
                </li>
                <li>
                  <Link to="/cookiepolicy">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/community">Community Guidelines</Link>
                </li>
                <li>
                  <Link to="/dmca-notice">DMCA Notice</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
