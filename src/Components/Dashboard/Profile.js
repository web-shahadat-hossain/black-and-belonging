import React from "react";
import "../../Assets/Style/account.css";

const Profile = () => {
  const authentication = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h1>{authentication.name}</h1>
    </div>
  );
};

export default Profile;
