import React from 'react'
import NavList from './NavList';
import "../styles/footer-nav-list.css";
import icon from "../images/carbon.png"

const NavListBottomLeft = () => {
  return (
    <>
    <div className="footer-links">
      <div className="footer-left">
        <NavList item={"About"} />
        <NavList item={"Advertising"} />
        <NavList item={"Business"} />
        <NavList item={"How Search Works"} />
        </div>

        <div className="footer-center">
          <img src={icon} alt="carbon icon" />
          <span>Carbon neutral since 2007</span>
        </div>

        <div className="footer-right">
        <NavList item={"Privacy"} />
        <NavList item={"Terms"} />
        <NavList item={"Settings"} />
        </div>
    </div>
    </>
  )
}

export default NavListBottomLeft;