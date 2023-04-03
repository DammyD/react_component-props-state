import React from 'react'
import profile from "../images/profile.jpg";
import "../styles/avatar.css";

const Avatar = () => {
  return (
    <div className='profile'>
        <img src={profile} alt="profile image" />
    </div>
  )
}

export default Avatar;