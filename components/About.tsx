import React from 'react';
import './About.css'; // Ensure you have a corresponding CSS file for styling
import Image from 'next/image';

const About: React.FC = () => {
    return (
        <section className="about-section">
            {/* Portrait Image Container */}
            <div className="portrait-container">
                <Image
                    src="/imgs/me1-1.jpg"
                    alt="Portrait Photo"
                    width={300}  // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="portrait-image" // Optional: add a CSS class for styling
                />
            </div>

            {/* Text Container */}
            <div className="text-container">
                <h2>Who’s Behind This Website?</h2>
                <h4 className="mb-2 mt-2">Get to Know Me, My Passion, Purpose, and Journey.</h4>

                <p>Hi, I'm Mahmoud</p>
                <p>
                    As a Business Intelligence Developer with extensive experience in web development, I am passionate about
                    harnessing data to drive strategic business decisions. I excel at transforming raw data into actionable
                    insights and thrive on solving complex problems.
                </p>
                <p>
                    My web development skills extend to designing and developing frontends from scratch, with a solid understanding of backend fundamentals.
                </p>
                <p>
                    My focus is on innovation and leveraging technology to create impactful, data-driven strategies that
                    propel businesses forward.
                </p>
                <p>
                    In addition to my formal education and degree in Business Intelligence, I am
                    a dedicated self-learner committed to continually expanding my expertise. Staying abreast of the latest
                    technologies and methodologies is crucial for mastering this ever-evolving field, and I am driven to
                    push the boundaries of what data can achieve.
                </p>
            </div>
        </section>
    );
};

export default About;
