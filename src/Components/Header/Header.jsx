import React, { useEffect, useState } from "react";
import Netflixlogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
const Header = () => {
  const [show, handleShow] = useState(false);
  const transitionHeaderBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeaderBar);
    return () => window.removeEventListener("scroll", transitionHeaderBar);
  }, []);

  return (
    <div className={`Wrapper__outer ${show && "Wrapper__outer__black"}`}>
      <div className="wrapper__inner">
        <div className="Header__left">
          <div className="logo__container">
            <img className="logo" src={Netflixlogo} alt="Netflic Logo" />
          </div>
          <div className="Header__left ">
            <ul>
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
        </div>
        <div className="Header__right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>Kids</li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
