import React from 'react'
import NavList from './NavList';
import AppLauncher from './AppLauncher';
import Avatar from './Avatar';
import "../styles/header.css";


const Header = () => {
  return (
    <div className="menu">
        <div className="menu-items">
        <NavList item={"Gmail"} />
        <NavList item={"Images"} />
        <AppLauncher />
        <Avatar />
        </div>
    </div>
  )
}

export default Header;