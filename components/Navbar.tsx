import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <span className="navbar-brand">
                    Mahmoud Nagbou
                </span>

                <div className="navbar-nav">
                    <Link href="#Home" className="nav-link" aria-current="page">
                        Home
                    </Link>
                    <Link href="#About" className="nav-link">
                        About
                    </Link>
                    <Link href="#Contact" className="nav-link">
                        Contact
                    </Link>
                    <Link href="#Portfolio" className="nav-link">
                        Portfolio
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
