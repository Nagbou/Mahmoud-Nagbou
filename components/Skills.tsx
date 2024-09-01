import React from 'react';
import styles from './Skills.module.css'; // Ensure this file exists and contains appropriate styles
import Image from 'next/image'; // Import Image for optimization

const Skills: React.FC = () => {
    const images = [
        "/imgs/13.jpg", "/imgs/14.jpg", "/imgs/7.jpg", "/imgs/11.jpg",
        "/imgs/8.jpg", "/imgs/3.jpg", "/imgs/6.jpg", "/imgs/10.jpg",
        "/imgs/1.jpg", "/imgs/2.jpg", "/imgs/4.jpg", "/imgs/5.jpg",
        "/imgs/12.jpg", "/imgs/9.jpg"
    ];

    return (
        <section className={styles.iconsSection + " py-5"}>
            <div className="container">
                <div className="row text-center">
                    <h1 className={styles.iconsSectionHeader}>My Skills</h1>
                    {/* Icons */}
                    {images.map((src, index) => (
                        <div key={index} className={`col-md-3 mb-4 ${index % 4 === 0 ? 'offset-md-3' : ''}`}>
                            <div className={styles.iconBox}>
                                <Image src={src} alt={`Icon ${index + 1}`} width={100} height={100} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
