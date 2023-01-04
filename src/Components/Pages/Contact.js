import React from "react";
import contact from "../../Assets/images/contact.jpg";
import Separator from "../Shear/Separator";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div style={{ maxWidth: "1300px" }} className="container">
          <h1>Contact Us</h1>

          <div className="contact-area">
            {/* <div className="contact-info">
              <div className="contact-info-area">
                <h3>Let’s Stay In Touch!</h3>

                <ul className="contact-list">
                  <li>
                    <a
                      target="black"
                      href="https://contact@blackandbelonging.com"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                    <div className="contact-details">
                      <h4>Email</h4>
                      <p>
                        <a
                          target="black"
                          href="https://contact@blackandbelonging.com"
                        >
                          contact@blackandbelonging.com
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a target="black" href="https://twitter.com/HeartBelonging">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <div className="contact-details">
                      <h4>Twitter</h4>
                      <p>
                        <a
                          target="black"
                          href="https://twitter.com/HeartBelonging"
                        >
                          @HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      target="black"
                      href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <div className="contact-details">
                      <h4>YouTube</h4>
                      <p>
                        <a
                          target="black"
                          href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q"
                        >
                          HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a
                      target="black"
                      href="https://www.instagram.com/heartbelonging/"
                    >
                      <i className="far fa-envelope"></i>
                    </a>
                    <div className="contact-details">
                      <h4>Instagram</h4>
                      <p>
                        <a
                          target="black"
                          href="https://www.instagram.com/heartbelonging/"
                        >
                          @HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div> */}

            {/* <div className="contact-form">
              <form action="/" method="POST">
                <div className="contact-form-wrapper">
                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-name">Your Name</label>
                        <span>
                          <input
                            type="text"
                            name="your-name"
                            size="40"
                            id="contact-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="contact-email">Your Email</label>
                        <span>
                          <input
                            type="email"
                            name="your-email"
                            size="40"
                            id="contact-email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <label for="contact-message">Your Message</label>
                        <span>
                          <textarea
                            name="your-message"
                            id="contact-message"
                            cols="40"
                            rows="10"
                          ></textarea>
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <input type="submit" value="SEND MESSAGE" />
                    </div>
                  </div>
                </div>
              </form>
            </div> */}

            <div className="contact_pages_card_container">
              <div className="contact_pages_card">
                <div>
                  <a
                    target="black"
                    href="https://contact@blackandbelonging.com"
                  >
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </div>
                <h4>Email</h4>
                <p>
                  <a
                    target="black"
                    href="https://contact@blackandbelonging.com"
                  >
                    contact@blackandbelonging.com
                  </a>
                </p>
              </div>
              <div className="contact_pages_card">
                <div>
                  <a target="black" href="https://twitter.com/HeartBelonging">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <h4>Twitter</h4>
                <p>
                  <a target="black" href="https://twitter.com/HeartBelonging">
                    @HeartBelonging
                  </a>
                </p>
              </div>
              <div className="contact_pages_card">
                <div>
                  <a
                    target="black"
                    href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </div>
                <h4>YouTube</h4>
                <p>
                  <a
                    target="black"
                    href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q"
                  >
                    HeartBelonging
                  </a>
                </p>
              </div>
              <div className="contact_pages_card">
                <div>
                  <a
                    target="black"
                    href="https://www.instagram.com/heartbelonging/"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <h4>Instagram</h4>
                <p>
                  <a
                    target="black"
                    href="https://www.instagram.com/heartbelonging/"
                  >
                    @HeartBelonging
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Contact;
