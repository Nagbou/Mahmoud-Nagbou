import React from 'react';
import styles from './Skills.module.css'; // Make sure this file exists and contains the necessary styles
import Image from 'next/image';

const Skills: React.FC = () => {
    // Array of image sources and alt texts
    const icons = [
        { src: "/imgs/13.jpg", alt: "Icon 1" },
        { src: "/imgs/14.jpg", alt: "Icon 2" },
        { src: "/imgs/7.jpg", alt: "Icon 3" },
        { src: "/imgs/11.jpg", alt: "Icon 4" },
        { src: "/imgs/8.jpg", alt: "Icon 5" },
        { src: "/imgs/3.jpg", alt: "Icon 6" },
        { src: "/imgs/6.jpg", alt: "Icon 7" },
        { src: "/imgs/10.jpg", alt: "Icon 8" },
        { src: "/imgs/1.jpg", alt: "Icon 9" },
        { src: "/imgs/2.jpg", alt: "Icon 10" },
        { src: "/imgs/4.jpg", alt: "Icon 11" },
        { src: "/imgs/5.jpg", alt: "Icon 12" },
        { src: "/imgs/12.jpg", alt: "Icon 13" },
        { src: "/imgs/9.jpg", alt: "Icon 14" }
    ];

    return (
        <section className={styles.iconsSection + ' py-5'}>
            <div className="container">
                <div className="row text-center">
                    <h1 className={styles.iconsSectionHeader}>My Skills</h1>
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className={`col-md-3 mb-4 ${index % 4 === 0 && index > 0 ? 'offset-md-3' : ''}`}
                        >
                            <div className={styles.iconBox}>
                                <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={60} // Adjust width as needed
                                    height={80} // Adjust height as needed
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
