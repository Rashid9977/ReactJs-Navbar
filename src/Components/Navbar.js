import React, { useRef } from 'react'
import { FaBars, FaTimes, FaPhone, FaHome, FaBook, FaServicestack, FaUser } from 'react-icons/fa'


import '../styles/style.css'

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }
    return (
        <header >

            <h3>DigitalR</h3>
            <nav ref={navRef}>
                <a href='#'><FaHome style={{ fontSize: '25px', marginRight: '0.1em' }} />Home</a>
                <a href='#'><FaServicestack style={{ fontSize: '25px', marginRight: '0.1em' }} />Services</a>
                <a href='#'><FaBook style={{ fontSize: '20px', marginRight: '0.1em' }} />Blog</a>
                <a href='#'><FaUser style={{ fontSize: '20px', marginRight: '0.1em' }} />About Us</a>
                <a href='#'><FaPhone style={{ fontSize: '20px', marginRight: '0.1em' }} />Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
}

export default Navbar