import React from "react";
import Separator from "../Shear/Separator";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../FirebaseInit";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shear/Loading";

const Register = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const navigate = useNavigate();

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
    navigate("/profile");
  }

  /*******Submit Handler  code start here*******/
  const handleRegister = async (e) => {
    setButtonLoading(true);
    e.preventDefault();

    const data = new FormData(e.target);
    const result = Object.fromEntries(data.entries());

    if (result.confirmPassword === result.password) {
      const userDetails = {
        username: result.username,
        password: result.password,
        email: result.email,
        first_name: result.first_name,
        last_name: result.last_name,
        role: "customer",
      };
      fetch(
        "https://blackandbelonging.com/wp-json/637922eaa5/v2/adecreateuser",
        {
          method: "POST",
          body: JSON.stringify(userDetails),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.status === 200) {
            setButtonLoading(false);
            toast.success("Successfully Registration!");
            localStorage.setItem(
              "user",
              JSON.stringify({ name: userDetails.first_name })
            );
            navigate("/profile");
          } else {
            setButtonLoading(false);
            toast.error("Please try again!");
          }
        });
    } else {
      toast.warning("Password Not Match!");
      setButtonLoading(false);
    }
  };
  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="login-area">
            <div className="login-form">
              <form onSubmit={handleRegister}>
                <div className="login-form-wrapper register-wrapper">
                  <h1>Register Here</h1>

                  <div className="row">
                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="first-name">First Name</label>
                        <span>
                          <input
                            required
                            type="text"
                            placeholder="Enter your name"
                            name="first_name"
                            size="40"
                            id="first-name"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <div className="form-group">
                        <label for="last_name">Last Name</label>
                        <span>
                          <input
                            required
                            type="text"
                            placeholder="Enter your last name"
                            name="last_name"
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
                            required
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
                            required
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
                            required
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
                            required
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            size="40"
                            id="confirm-password"
                          />
                        </span>
                      </div>
                    </div>

                    <div className="col col-lg-6">
                      <button
                        onClick={() => signInWithGoogle()}
                        className="google-login"
                      >
                        <img
                          src="https://codestuff.website/images/google.png"
                          alt=""
                        />{" "}
                        Sign in with Google
                      </button>
                    </div>

                    <div className="col col-lg-6">
                      {buttonLoading ? (
                        <button className="buttonload">
                          <i className="fa fa-spinner fa-spin"></i>Loading
                        </button>
                      ) : (
                        <input type="submit" value="REGISTER" />
                      )}
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
