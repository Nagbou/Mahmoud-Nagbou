import React from 'react';
import styles from './Skills.module.css'; // Ensure this file exists and contains appropriate styles
import Image from 'next/image';

const Skills: React.FC = () => {
    return (
        <section className={styles.iconsSection + ' py-5'}>
            <div className="container">
                <div className="row text-center">
                    <h1 className={styles.iconsSectionHeader}>My Skills</h1>

                    {/* Icons */}
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/13.jpg"
                                alt="Icon 1"
                                width={60} // Adjust width as needed
                                height={70} // Adjust height as needed
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/14.jpg"
                                alt="Icon 2"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/7.jpg"
                                alt="Icon 3"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/11.jpg"
                                alt="Icon 4"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/8.jpg"
                                alt="Icon 5"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/3.jpg"
                                alt="Icon 6"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/6.jpg"
                                alt="Icon 7"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/10.jpg"
                                alt="Icon 8"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/17.jpg"
                                alt="Icon 8"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/18.jpg"
                                alt="Icon 8"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/19.jpg"
                                alt="Icon 8"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/20.jpg"
                                alt="Icon 8"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/1.jpg"
                                alt="Icon 9"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/2.jpg"
                                alt="Icon 10"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/4.jpg"
                                alt="Icon 11"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/5.jpg"
                                alt="Icon 12"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/12.jpg"
                                alt="Icon 13"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className={styles.iconBox}>
                            <Image
                                src="/imgs/9.jpg"
                                alt="Icon 14"
                                width={60}
                                height={70}
                                className={styles.iconImage} // Add this class
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
