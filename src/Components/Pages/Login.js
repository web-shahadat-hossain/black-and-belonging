import React from "react";
import Separator from "../Shear/Separator";

const Login = () => {
  return (
    <>
      <section class="login-section">
        <div class="container">
          <div class="login-area">
            <div class="login-form">
              <form>
                <div class="login-form-wrapper">
                  <h1>Log In Here</h1>

                  <div class="row">
                    <div class="col col-lg-12">
                      <div class="login-type">
                        <p>Please choose from the sign in options below.</p>
                        <a href="#" class="google-login">
                          <img src="https://codestuff.website/images/google.png" />{" "}
                          Sign in with Google
                        </a>
                        <p>OR</p>
                        <p>Email or User ID</p>
                      </div>
                    </div>

                    <div class="col col-lg-12">
                      <div class="form-group">
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

                    <div class="col col-lg-12">
                      <div class="form-group">
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

                    <div class="col col-lg-12">
                      <input type="submit" value="LOGIN" />
                      <p class="signin-term">
                        By signing in, you agree to our
                        <a href="#">Terms of Use.</a>
                      </p>
                    </div>

                    <div class="col col-lg-12">
                      <p class="login-to-register">
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
