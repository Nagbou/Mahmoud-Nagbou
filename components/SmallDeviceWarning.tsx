import React from 'react';
import styles from './SmallDeviceWarning.module.css'; // Import your CSS module

const SmallDeviceWarning: React.FC = () => {
    return (
        <div className={styles.smallDeviceOverlay}>
            <h1 className={styles.Mahmoud}>Hi, This is Mahmoud.</h1>
            <p className={styles.warningText}>For the best user experience, please use a larger device to explore my portfolio. Some of the projects showcased here are best viewed on a bigger screen.
            </p>
            <h4 className={styles.h4}>Visit my portfolio at:</h4> <p>https://mahmoud-nagbou-portfolio.vercel.app/</p>
            <h3>Thank you for your understanding!</h3>
        </div>
    );
};

export default SmallDeviceWarning;
