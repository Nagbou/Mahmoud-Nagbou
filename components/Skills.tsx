import React from 'react';
import './Skills.css'; // Make sure to create and import your CSS file
import Image from 'next/image';
const Skills: React.FC = () => {
    return (
        <section className="icons-section py-5">
            <div className="container">
                <div className="row text-center">
                    <h1 className="icons-section-header">My Skills</h1>

                    {/* Icons */}
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/13.jpg" alt="Icon 1" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/14.jpg" alt="Icon 2" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/7.jpg" alt="Icon 3" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/11.jpg" alt="Icon 4" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/8.jpg" alt="Icon 5" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/3.jpg" alt="Icon 6" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/6.jpg" alt="Icon 7" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/10.jpg" alt="Icon 8" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/1.jpg" alt="Icon 9" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/2.jpg" alt="Icon 10" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/4.jpg" alt="Icon 11" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/5.jpg" alt="Icon 12" />
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/12.jpg" alt="Icon 13" />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="icon-box">
                            <Image src="/imgs/9.jpg" alt="Icon 14" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
