import React from 'react';
import styles from './SmallDeviceWarning.module.css'; // Import your CSS module

const SmallDeviceWarning: React.FC = () => {
    return (
        <div className={styles.smallDeviceOverlay}>
            <h1>Hi, This is <span className={styles.Mahmoud}>Mahmoud.</span></h1>
            <p className={styles.warningText}>
                For the best user experience, please use a larger device to explore my portfolio. Some of
                the projects showcased here are best viewed on a bigger screen.
            </p>
            <h4 className={styles.h4}>Visit my portfolio at:</h4>
            <p className={styles.portfolioLink}>https://mahmoud-nagbou-portfolio.vercel.app/</p>
            <h3>Thank you for your understanding <span className={styles.Mahmoud}>!</span></h3>
        </div>
    );
};

export default SmallDeviceWarning;
