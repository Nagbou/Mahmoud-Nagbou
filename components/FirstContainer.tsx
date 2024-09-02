import React from 'react';
import './FirstContainer.css';
import Link from 'next/link';
import Image from 'next/image';

const FirstContainer: React.FC = () => {
    return (
        <div className="first-container">
            {/* Text Container */}
            <div className="text-container">
                {/* Main Name Header */}
                <h1 className="name">
                    Hi, I&#39;m <br />Mahmoud <br /> Nagbou
                </h1>

                {/* Fixed Text and Sliding Headers on the Same Line */}
                <div className="text-line">
                    <span className="fixed-text">I&#39;m a</span>
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
            <div >
                <Image
                    className="image-container"
                    src="/imgs/images%20(8).jpg"
                    alt="Profile Image"
                    width={499}
                    height={380}
                />
            </div>
        </div>
    );
};

export default FirstContainer;
