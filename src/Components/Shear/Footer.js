import React from "react";
import tape from "../../Assets/images/tape.jpg";
import Separator from "./Separator";

const Footer = () => {
  return (
    <>
      <Separator />
      <footer>
        <div class="container">
          <div class="footer-row">
            <div class="footer-cols">
              <h3>About</h3>
              <p>
                We make educational spaces places where young people want to be
                and want to learn, placing a special emphasis on students who
                attend predominantly Black K-12 public schools.
              </p>

              <a href="mixtapes.html" class="about-btn">
                Join the conversation
              </a>
            </div>

            <div class="footer-cols">
              <h3>Popular Mixtapes</h3>

              <div class="tape">
                <a href="mixtape_single.html">
                  <img src={tape} alt="" />
                </a>

                <div class="tape-content">
                  <h5>
                    <a href="mixtape_single.html">
                      Heart Belonging Mixtape Vol.1: Hoo...
                    </a>
                  </h5>
                  <p>By DeLeon Gray</p>
                </div>
              </div>
            </div>

            <div class="footer-cols">
              <h3>Pages</h3>
              <ul class="page-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="mixtapes.html">Mixtapes</a>
                </li>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="fundraise.html">Fundraise Us</a>
                </li>
              </ul>
            </div>

            <div class="footer-cols">
              <h3>Contact</h3>

              <div class="contact-info">
                <ul>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>
                      65 TW Alexander Drive, Unit 12899, Durham, North Carolina,
                      27709
                    </p>
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <p>(919) 593-7730</p>
                  </li>
                  <li>
                    <i class="fa-solid fa-envelope"></i>
                    <p>
                      <a href="mailto:contact@blackandbelonging.com">
                        contact@blackandbelonging.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>

              <ul class="social-links">
                <li>
                  <a href="https://twitter.com/HeartBelonging">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/HeartBelonging">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/black-and-belonging/about/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="headline">
            <div class="divider"></div>
          </div>
          <div class="footer-row bottom-footer">
            <div class="footer-col">
              <div class="copyright">
                <p>Copyright © 2022 Black And Belonging</p>
              </div>
            </div>

            <div class="footer-col">
              <ul class="copyright-links">
                <li>
                  <a href="termsofuse.html">Terms of use</a>
                </li>
                <li>
                  <a href="cookiepolicy.html">Cookie Policy</a>
                </li>
                <li>
                  <a href="community.html">Community Guidelines</a>
                </li>
                <li>
                  <a href="dmca-notice.html">DMCA Notice</a>
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
