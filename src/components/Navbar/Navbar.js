import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa'
import { Nav , NavCenter , NavHeader , NavLinks } from './NavbarStyle'

const Navbar = () => {

    const [isOpen , setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Nav>
                <NavCenter>
                    <NavHeader>
                        <Link to="/">
                            Beach <span>Resort</span>
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={toggle}
                            >
                                <FaAlignRight className="nav-icon" />
                            </button>
                    </NavHeader>
                    <NavLinks isOpen={isOpen}>
                        <li>
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms" >Rooms</Link>
                        </li>
                    </NavLinks>
                </NavCenter>
            </Nav>
        </>
    )
}

export default Navbar
