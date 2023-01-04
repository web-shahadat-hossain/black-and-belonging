import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Components/Shear/Loading";
import auth from "./FirebaseInit";

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);

  const authentication = JSON.parse(localStorage.getItem("user"));
  let location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user || !authentication) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
