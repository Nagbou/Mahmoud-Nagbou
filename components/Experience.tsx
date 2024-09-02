import React, { useEffect, useRef } from 'react';
import styles from './Experience.module.css'; // Ensure this file contains the necessary styles

interface CardProps {
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentCardRef = cardRef.current; // Save ref to a variable

        if (currentCardRef) {
            observer.observe(currentCardRef);
        }

        return () => {
            if (currentCardRef) {
                observer.unobserve(currentCardRef);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className={`${styles.card} ${styles.hidden}`}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <>
            <h1 className="sectionHeader text-center">Experience</h1>
            <p className={styles.experienceText}>
                Experience, Education, Licenses, and Certificates.
            </p>
            <div className={styles.experienceContainer}>
                <div className={styles.experience}>
                    <Card
                        title="Licentiate degree, BI"
                        text="Licentiate degree, in Business Intelligence from Higher Institute of Informatics and Management of Kairouan."
                    />
                    <Card
                        title="Data Mining and Web Developer, Internship"
                        text="The Information Technology Center of the Ministry of Health, Tunisia | CIMS · Internship - Tunisia. Remote Developed a machine learning model for predicting course and instructor ratings. Built a React web app to integrate the model and visualize instructor ratings."
                    />
                    <Card
                        title="Frontend Web Developer, Internship"
                        text="BIOMEDIQA group. Internship - Kairouan. For almost three months, I worked as a Frontend Developer. I designed and developed a web app's user interface from scratch using UX/UI principles, Adobe Illustrator, HTML, CSS, JavaScript, Angular, and Bootstrap."
                    />
                    <Card
                        title="Business Intelligence Developer, Internship"
                        text="Utilized advanced BI technologies to thoroughly analyze client flow patterns, uncover operational inefficiencies, and craft targeted solutions. Focused on optimizing processes and enhancing client engagement to drive future performance improvements."
                    />
                    <Card
                        title="The Complete 2024 Web Development Bootcamp"
                        text="Certified in web development through Udemy’s intensive bootcamp, mastering modern web technologies and best practices."
                    />
                    <Card
                        title="Complete A.I. & Machine Learning, Data Science Bootcamp"
                        text="Certified in AI and data science from Udemy, with hands-on experience in machine learning algorithms, data manipulation, and predictive analytics."
                    />
                    <Card
                        title="Complete Data Science Bootcamp 2024"
                        text="Completed 'The Data Science Course: Complete Data Science Bootcamp 2024' on Udemy, gaining comprehensive skills in data analysis, visualization, and advanced data science techniques."
                    />
                    <Card
                        title="The Complete 2020 Fullstack Web Developer Course"
                        text="Earned a certificate in full-stack web development from Udemy, covering both frontend and backend technologies."
                    />
                    <Card
                        title="Graphic Design Masterclass - Learn GREAT Design"
                        text="Graduated from 'Graphic Design Masterclass - Learn GREAT Design,' developing a strong foundation in design principles, creative process, and professional design techniques."
                    />
                    {/* Add more Card components as needed */}
                </div>
            </div>
        </>
    );
};

export default Experience;
