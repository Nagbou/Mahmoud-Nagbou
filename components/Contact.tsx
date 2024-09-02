import React from "react";
import './Contact.css';
import Image from 'next/image';

interface ContactProps {
    photoSrc: string;
    header: string;
    text: string;
    linkedinUrl: string;
    xUrl: string;
    email: string;
    githubUrl: string;
    upworkUrl: string;
    behanceUrl: string;
}

export const Contact: React.FC<ContactProps> = ({ photoSrc, header, text, linkedinUrl, xUrl, email, githubUrl, upworkUrl, behanceUrl }) => {
    return (
        <section className="contact-section container py-5">
            <div className="container">
                <div className="row text-center">
                    <h1 className="section-header">Contact Me</h1>
                    <div className="contact-content d-flex">
                        <div className="contact-photo col-md-4">
                            <Image
                                src={photoSrc}
                                alt="Profile"
                                className="img-fluid"
                                width={200}
                                height={300}
                                layout="responsive"

                            />
                        </div>
                        <div className="contact-details col-md-6 d-flex flex-column">
                            <div className="contact-text mb-3">
                                <h2>{header}</h2>
                                <p>{text}</p>
                                <p className="contact-message">
                                    Thank you for exploring my website and considering me for your next project. <br /> <br />
                                    I am genuinely excited about the possibility of collaborating with you.
                                    Whether you&apos;re looking to brainstorm ideas, develop a strategy, or dive into the execution phase,
                                    I&apos;m here to help. <br /> <br />Please feel free to reach out through any of the platforms listed below.
                                    I look forward to discussing how we can work together to achieve your goals and create something truly
                                    exceptional.
                                </p>
                            </div>
                            <div className="contact-social-media">
                                <div className="social-links d-flex flex-column">
                                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-linkedin"></i> Mahmoud Nagbou
                                    </a>
                                    <a href={xUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-x"></i> m_nagbou
                                    </a>
                                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-github"></i> Mahmoud Nagbou
                                    </a>
                                    <a href={upworkUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-upwork"></i> Mahmoud Nagbou
                                    </a>
                                    <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fa-brands fa-behance"></i> Mahmoud Nagbou
                                    </a>
                                    <a href={`mailto:${email}`} className="social-link">
                                        <i className="fa-solid fa-envelope"></i> {email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
