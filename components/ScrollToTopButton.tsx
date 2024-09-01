import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css';
import Image from 'next/image';
const ScrollToTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top-btn ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-chevron-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
