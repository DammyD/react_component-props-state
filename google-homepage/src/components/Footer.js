import React from 'react'
import FooterNavList from './FooterNavList';
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
         <p>Nigeria</p>
        <hr></hr>
        <div>
        <FooterNavList />
        </div>
    </div>
  )
}

export default Footer;