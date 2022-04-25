import React from 'react'
import leftImg from '../src/left.png'
import rightImg from '../src/right.png'
import Hmenu from '../src/h-menu.png'
import { Link } from "react-router-dom";

const NavBar = () => {

const toggleMenu = () => {
    const navBarContainer = document.querySelector('.navBarContainer');
    navBarContainer.classList.toggle('openCloseSideMenu')
}




  return (
    <nav className="navBarContainer">
        <div className="container navContent">
            <article className="compLogo">
                <figure className="logoContainer">
                    <img src={rightImg} alt="right-img" className="rightLogo" />
                    <img src={leftImg} alt="left-img" className="leftLogo" />
                </figure>

                <h3> Spectrangle </h3>

            </article>

            <ul className="navbarList">
            <Link to="/" className="link nav-link">
                <li> Home </li>
            </Link>
            <Link to="/ourculture" className="link nav-link"> 
                <li> Our Culture </li>
            </Link>
            <Link to="/joinnetwork" className="link nav-link">
                <li> Join Network </li>
            </Link>
            
            <Link to="/workwithus" className="link nav-link">
                <li>
                    <button className="btn list-btn"> Work with us </button>
                </li>
            </Link>
        </ul>
        </div>

        <div className="hamburgerMenu">
            <ul className="sideMenuList">
            <Link to="/" className="link side-link">
                <li> Home </li>
            </Link>
            <Link to="/ourculture" className="link side-link"> 
                <li> Our Culture </li>
            </Link>
            <Link to="/joinnetwork" className="link side-link">
                <li> Join Network </li>
            </Link>
            
            <Link to="/workwithus" className="link side-link">
                <li>
                    <button className="btn list-btn"> Work with us </button>
                </li>
            </Link>
        </ul>
        </div>

        <img src={Hmenu} alt="h-menu" className="hamburgerIcon" onClick={()=> toggleMenu()} />
    </nav>
  )
}

export default NavBar