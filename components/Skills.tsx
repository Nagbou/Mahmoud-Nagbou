import React from 'react';
import './Skills.css'; // Ensure this file exists and contains appropriate styles

const Skills: React.FC = () => {
    return (
        <section className="icons-section py-5">
            <div className="container">
                <div className="row text-center">
                    <h1 className="icons-section-header">My Skills</h1>

                    {/* Icons */}
                    {[
                        "/imgs/13.jpg", "/imgs/14.jpg", "/imgs/7.jpg", "/imgs/11.jpg",
                        "/imgs/8.jpg", "/imgs/3.jpg", "/imgs/6.jpg", "/imgs/10.jpg",
                        "/imgs/1.jpg", "/imgs/2.jpg", "/imgs/4.jpg", "/imgs/5.jpg",
                        "/imgs/12.jpg", "/imgs/9.jpg"
                    ].map((src, index) => (
                        <div key={index} className={`col-md-3 mb-4 ${index % 4 === 0 ? 'offset-md-3' : ''}`}>
                            <div className="icon-box">
                                <img src={src} alt={`Icon ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
