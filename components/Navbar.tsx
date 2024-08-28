import React from 'react';
import './Navbar.css'
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href="#" className="navbar-brand">
                    Mahmoud Nagbou
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="#" className="nav-link active" aria-current="page">
                            Home
                        </Link>
                        <Link href="#" className="nav-link">
                            About
                        </Link>
                        <Link href="#" className="nav-link">
                            Contact
                        </Link>
                        <Link href="#" className="nav-link">
                            Portfolio
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;