import React from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <span className="navbar-brand">
                    Mahmoud Nagbou
                </span>

                <div className="navbar-nav">
                    <Link href="#Home" passHref>
                        <a className="nav-link" aria-current="page">Home</a>
                    </Link>
                    <Link href="#About" passHref>
                        <a className="nav-link">About</a>
                    </Link>
                    <Link href="#Contact" passHref>
                        <a className="nav-link">Contact</a>
                    </Link>
                    <Link href="#Portfolio" passHref>
                        <a className="nav-link">Portfolio</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
