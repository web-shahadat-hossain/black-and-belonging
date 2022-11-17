import React from "react";
import heart from "../../Assets/images/user-heart.png";

const FundraisingTeam = () => {
  return (
    <>
      <div className="fundraising-team">
        <h3>
          Team Members <br />
          (9)
        </h3>

        <ul className="team-members">
          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">William Logan</h4>
              <p className="position">Organizer</p>
              <p className="raised">Raised $865 from 11 supporters</p>
              <p>Durham, NC</p>

              <button onclick="location.href='contact.html'">Contact</button>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Euba McKoy</h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $250 from 1 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Frances Starn</h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $70 from 3 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Caroline Herbert </h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $50 from 1 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Savannah Bowman </h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $40 from 1 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Kimberley Donaldson </h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $20 from 1 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Ariell McDougald </h4>
              <p className="position">Team member</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Jimmie Anderson </h4>
              <p className="position">Team member</p>
              <p className="raised">Raised $40 from 1 Supporter</p>
            </div>
          </li>

          <li>
            <div className="d-icon">
              <img src={heart} alt="haert" />
            </div>

            <div className="members-detail">
              <h4 className="m-name">Latoya Clay </h4>
              <p className="position">Team member</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FundraisingTeam;
