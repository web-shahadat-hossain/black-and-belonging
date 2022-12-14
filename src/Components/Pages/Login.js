import React, { useState } from "react";
import Separator from "../Shear/Separator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../FirebaseInit";
import Loading from "../Shear/Loading";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [buttonLoading, setButtonLoading] = useState(false);
  /*******Google Sing Up code start here*******/
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (googleLoading) {
    return <Loading />;
  }

  if (googleError) {
    toast.error(googleError?.message);
  }

  if (googleUser) {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: googleUser._tokenResponse.displayName })
    );
    navigate(from, { replace: true });
  }

  /*******Submit Handler  code start here*******/
  const handleLogin = async (e) => {
    setButtonLoading(true);
    e.preventDefault();

    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());
    fetch(
      `https://api.blackandbelonging.com/wp-json/custom-plugin/login?username=${result.loginEmail}&password=${result.loginPassword}`,
      {
        method: "POST",

        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setButtonLoading(false);
        navigate(from, { replace: true });

        localStorage.setItem(
          "user",
          JSON.stringify({ id: json.ID, name: json.data.display_name })
        );
      })
      .catch((err) => {
        setButtonLoading(false);
      });
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
                        <button
                          onClick={() => signInWithGoogle()}
                          className="google-login"
                        >
                          <img
                            alt=""
                            src="https://codestuff.website/images/google.png"
                          />{" "}
                          Sign in with Google
                        </button>
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
                      {buttonLoading ? (
                        <button
                          style={{ width: "100%" }}
                          className="buttonload"
                        >
                          <i className="fa fa-spinner fa-spin"></i>Loading
                        </button>
                      ) : (
                        <input type="submit" value="LOGIN" />
                      )}
                      <p className="signin-term">
                        By signing in, you agree to our
                        <Link style={{ marginLeft: "10px" }} to="/termsofuse">
                          Terms of Use.
                        </Link>
                      </p>
                    </div>

                    <div className="col col-lg-12">
                      <p className="login-to-register">
                        New to Black and Belonging?
                        <Link style={{ marginLeft: "10px" }} to="/register">
                          Create an account.
                        </Link>
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
