import React from "react";
import Separator from "../Shear/Separator";

const Register = () => {
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="login-area">
            <div className="login-form">
              <form>
                <div className="login-form-wrapper register-wrapper">
                  <h1>Register Here</h1>

                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="first-name">First Name</label>
                        <span>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            name="first-name"
                            size="40"
                            id="first-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="last-name">Last Name</label>
                        <span>
                          <input
                            type="text"
                            placeholder="Enter your last name"
                            name="last-name"
                            size="40"
                            id="last-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="username">Username</label>
                        <span>
                          <input
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            size="40"
                            id="username"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="email">E-Mail</label>
                        <span>
                          <input
                            type="email"
                            placeholder="Enter your E-mail"
                            name="email"
                            size="40"
                            id="email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="password">Password</label>
                        <span>
                          <input
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            size="40"
                            id="password"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="confirm-password">Re-Enter Password</label>
                        <span>
                          <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirm-password"
                            size="40"
                            id="confirm-password"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <a href="#" className="google-login">
                        <img
                          src="https://codestuff.website/images/google.png"
                          alt=""
                        />{" "}
                        Sign in with Google
                      </a>
                    </div>

                    <div className="col col-lg-6">
                      <input type="submit" value="REGISTER" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default Register;
