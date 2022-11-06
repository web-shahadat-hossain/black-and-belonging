import React from "react";
import contact from "../../Assets/images/contact.jpg";

const Contact = () => {
  return (
    <>
      <section class="contact-section">
        <div class="container">
          <h1>Contact Us</h1>

          <div class="contact-area">
            <div class="contact-info">
              <div class="contact-info-area">
                <h3>Let’s Stay In Touch!</h3>

                <div class="thumbnail">
                  <img src={contact} alt="" />
                </div>

                <ul class="contact-list">
                  <li>
                    <a href="https://contact@blackandbelonging.com">
                      <i class="far fa-envelope"></i>
                    </a>
                    <div class="contact-details">
                      <h4>Email</h4>
                      <p>
                        <a href="https://contact@blackandbelonging.com">
                          contact@blackandbelonging.com
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a href="https://twitter.com/HeartBelonging">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <div class="contact-details">
                      <h4>Twitter</h4>
                      <p>
                        <a href="https://twitter.com/HeartBelonging">
                          @HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q">
                      <i class="fab fa-youtube"></i>
                    </a>
                    <div class="contact-details">
                      <h4>YouTube</h4>
                      <p>
                        <a href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q">
                          HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>

                  <li>
                    <a href="https://www.instagram.com/heartbelonging/">
                      <i class="far fa-envelope"></i>
                    </a>
                    <div class="contact-details">
                      <h4>Instagram</h4>
                      <p>
                        <a href="https://www.instagram.com/heartbelonging/">
                          @HeartBelonging
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="contact-form">
              <form action="/" method="POST">
                <div class="contact-form-wrapper">
                  <div class="row">
                    <div class="col col-lg-6">
                      <div class="form-group">
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

                    <div class="col col-lg-6">
                      <div class="form-group">
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
                    <section class="contact-section">
                      <div class="container">
                        <h1>Contact Us</h1>

                        <div class="contact-area">
                          <div class="contact-info">
                            <div class="contact-info-area">
                              <h3>Let’s Stay In Touch!</h3>

                              <div class="thumbnail">
                                <img src={contact} alt="" />
                              </div>

                              <ul class="contact-list">
                                <li>
                                  <a href="https://contact@blackandbelonging.com">
                                    <i class="far fa-envelope"></i>
                                  </a>
                                  <div class="contact-details">
                                    <h4>Email</h4>
                                    <p>
                                      <a href="https://contact@blackandbelonging.com">
                                        contact@blackandbelonging.com
                                      </a>
                                    </p>
                                  </div>
                                </li>

                                <li>
                                  <a href="https://twitter.com/HeartBelonging">
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                  <div class="contact-details">
                                    <h4>Twitter</h4>
                                    <p>
                                      <a href="https://twitter.com/HeartBelonging">
                                        @HeartBelonging
                                      </a>
                                    </p>
                                  </div>
                                </li>

                                <li>
                                  <a href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q">
                                    <i class="fab fa-youtube"></i>
                                  </a>
                                  <div class="contact-details">
                                    <h4>YouTube</h4>
                                    <p>
                                      <a href="https://www.youtube.com/channel/UCzgAKVLce6G2N8QUHTEbs-Q">
                                        HeartBelonging
                                      </a>
                                    </p>
                                  </div>
                                </li>

                                <li>
                                  <a href="https://www.instagram.com/heartbelonging/">
                                    <i class="far fa-envelope"></i>
                                  </a>
                                  <div class="contact-details">
                                    <h4>Instagram</h4>
                                    <p>
                                      <a href="https://www.instagram.com/heartbelonging/">
                                        @HeartBelonging
                                      </a>
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="contact-form">
                            <form action="/" method="POST">
                              <div class="contact-form-wrapper">
                                <div class="row">
                                  <div class="col col-lg-6">
                                    <div class="form-group">
                                      <label for="contact-name">
                                        Your Name
                                      </label>
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

                                  <div class="col col-lg-6">
                                    <div class="form-group">
                                      <label for="contact-email">
                                        Your Email
                                      </label>
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

                                  <div class="col col-lg-12">
                                    <div class="form-group">
                                      <label for="contact-message">
                                        Your Message
                                      </label>
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

                                  <div class="col col-lg-12">
                                    <input type="submit" value="SEND MESSAGE" />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div class="col col-lg-12">
                      <div class="form-group">
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

                    <div class="col col-lg-12">
                      <input type="submit" value="SEND MESSAGE" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
