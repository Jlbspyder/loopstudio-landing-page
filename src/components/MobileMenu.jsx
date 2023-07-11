import React from "react";

const MobileMenu = ({ open }) => {
  return (
    <nav className="mobile-menu-bg">
      <div className="mobile-menu">
        <img src="./logo.svg" alt="logo" className="logo" />
        <img src="./icon-close.svg" alt="" className="close" onClick={open} />
      </div>
      <div className="mobile-menu-list">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default MobileMenu;
