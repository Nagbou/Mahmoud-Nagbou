import React from 'react';
import './FirstContainer.css';
import Link from 'next/link';

const FirstContainer: React.FC = () => {
    return (
        <div className="first-container">
            {/* Text Container */}
            <div className="text-container">
                {/* Main Name Header */}
                <h1 className="name">
                    Hi, I'm <br />Mahmoud <br /> Nagbou
                </h1>

                {/* Fixed Text and Sliding Headers on the Same Line */}
                <div className="text-line">
                    <span className="fixed-text">I'm a</span>
                    <div className="sliding-header">
                        <span>Web Developer</span>
                    </div>
                    <div className="sliding-header">
                        <span>Business Intelligence Developer</span>
                    </div>
                </div>

                {/* Button */}

                <div className="btn-container">
                    <Link href="#Contact" className="btn-custom">
                        Contact Me
                    </Link>

                </div>
            </div>
            {/* Image Container */}
            <div className="image-container">
                <img src="/imgs/images%20(8).jpg" alt="Profile Image" />
            </div>
        </div>
    );
};

export default FirstContainer;
