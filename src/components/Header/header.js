import React from "react";
import "./header.css";
import { useHistory } from "react-router-dom";

const Header = ({ children }) => {
  const history = useHistory();
  let name = localStorage.getItem("username");

  const userSignout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/login");
  };
  return (
    <div>
      <div className="header">
        <span className="header-icon" onClick={() => history.push("/home")}>
          NETFLIX
        </span>
        <div className="username">
          <div className="profile-icon "></div>
          <div className="profile-arrow"></div>
          <div className="dropdown ">
            <div className="dropdown-profile">
              <div className="ddp-icon profile-icon "></div>
              <span className="ddp-name">{name}</span>
            </div>
            <div className="dd-line"></div>
            <span className="dd-signout" onClick={userSignout}>
              Sign out of Netflix
            </span>
          </div>
          <div className="arrow"></div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Header;
