import React, { useState } from 'react'
import { HashLink as Link } from "react-router-hash-link";
import Login from '../LoginRegi/Login/login';
import Popup from '../LoginRegi/Login/Popup';
import { NavbarContainer, NavbarHead, NavItem, NavList, NavbarTitle } from './NavbarElements';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }  

        return (
            <NavbarContainer>
            <NavbarHead>
                <NavbarTitle>
                    <Link smooth to="#home">
                        APGs-Kitchen
                    </Link>
                </NavbarTitle>
                <NavItem>   
                    <NavList>
                        <Link smooth to="#home">Home</Link>
                    </NavList>
                    <NavList>
                        <Link smooth to="#menulist">Menu</Link>
                    </NavList>
                    <NavList>
                        <Link smooth to="#gallery">Gallery</Link>
                    </NavList>
                    <NavList>
                        <Link smooth to="#about">About</Link>
                    </NavList>
                    <NavList>
                        <Link smooth to="#contact">Contact</Link>
                    </NavList>
                    <NavList>
                        <FaUserCircle  type="button" value="Click to Open Popup" onClick={togglePopup}/>
                            {isOpen && <Popup content={<><Login /> </>} handleClose={togglePopup}/>}
                    </NavList>
                </NavItem>
            </NavbarHead>
            </NavbarContainer>
        )
    }
export default Navbar