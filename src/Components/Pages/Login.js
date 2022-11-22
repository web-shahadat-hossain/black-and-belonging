import React from "react";
import Separator from "../Shear/Separator";

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    fetch(
      `https://blackandbelonging.com/wp-json/custom-plugin/login?username=${result.loginEmail}&password=${result.loginPassword}`,
      {
        method: "POST",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="login-area">
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <div className="login-form-wrapper">
                  <h1>Log In Here</h1>

                  <div className="row">
                    <div className="col col-lg-12">
                      <div className="login-type">
                        <p>Please choose from the sign in options below.</p>
                        <a href="!#" className="google-login">
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
                            type="text"
                            placeholder="Enter Email or Username"
                            name="loginEmail"
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
                            name="loginPassword"
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
