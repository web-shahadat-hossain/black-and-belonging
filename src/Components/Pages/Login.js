import React from "react";
import Separator from "../Shear/Separator";

const Login = () => {
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="login-area">
            <div className="login-form">
              <form>
                <div className="login-form-wrapper">
                  <h1>Log In Here</h1>

                  <div className="row">
                    <div className="col col-lg-12">
                      <div className="login-type">
                        <p>Please choose from the sign in options below.</p>
                        <a href="#" className="google-login">
                          <img src="https://codestuff.website/images/google.png" />{" "}
                          Sign in with Google
                        </a>
                        <p>OR</p>
                        <p>Email or User ID</p>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <span>
                          <input
                            type="email"
                            placeholder="Enter Email or Username"
                            name="login-email"
                            size="40"
                            id="login-email"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <div className="form-group">
                        <span>
                          <input
                            type="password"
                            placeholder="Enter Password"
                            name="login-password"
                            size="40"
                            id="login-password"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-12">
                      <input type="submit" value="LOGIN" />
                      <p className="signin-term">
                        By signing in, you agree to our
                        <a href="#">Terms of Use.</a>
                      </p>
                    </div>

                    <div className="col col-lg-12">
                      <p className="login-to-register">
                        New to Black and Belonging?
                        <a href="register.html">Create an account.</a>
                      </p>
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

export default Login;
