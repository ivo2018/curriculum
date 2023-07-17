import React from 'react';
import "./NavBar.css"
import cv from "../Images/cv.png"
const NavBar = () => {
    return (
        <div class="NavBar">
            <ul class="NavBar__ul">
                <img src={cv} alt=""/>
                <li class="Navbar__ul-li">
                <a href="/">ABOUT</a>
                </li>
                <li  class="Navbar__ul-li">
                <a href="/skills">SKILLS</a>
                </li>
                <li  class="Navbar__ul-li">
                <a href="/portfolio">PORTFOLIO</a>
                </li>
                <li  class="Navbar__ul-li">
                <a href="/contactus">CONTACT</a>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;