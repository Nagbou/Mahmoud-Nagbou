

import React from "react";
import { Carousel } from "./Carousel";
import './Portfolio.css';
import Image from 'next/image';
export const Portfolio: React.FC = () => {
  const firstCarouselItems = [
    {
      title: " Predicting Heart Disease Using Machine Learning",
      text: "Heart disease remains a leading cause of death worldwide, responsible for approximately 17.9 million deaths annually, according to the World Health Organization. As rates of cardiovascular disease continue to rise due to aging populations and lifestyle factors, it becomes crucial to develop effective predictive tools. In this project, we utilized machine learning techniques to predict the likelihood of heart disease based on various health metrics. Using Python and scikit-learn, we built and trained a predictive model, while Power BI was employed to visualize and analyze data patterns.",
      imgSrc: "/imgs/hd-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://heart-disease-prediction-uj1f.onrender.com",
      modalDetails: {
        text: " Heart disease, encompassing conditions affecting the heart and blood vessels, represents a major global health challenge. The increasing prevalence of cardiovascular diseases,\n driven by factors such as aging, obesity, and lifestyle changes, underscores the urgent need for advanced diagnostic tools.\nThe Global Burden of Disease Study and the American Heart Association have highlighted a troubling rise in heart disease incidence, with nearly 48.2% of U.S. adults affected as of 2018.\n \nTo address this issue, our project focused on developing a machine learning model to predict heart disease risk. We utilized Python and the scikit-learn library for model development, leveraging features such as age, gender, chest pain type, blood pressure, cholesterol levels, and more. The model was trained using various algorithms, including Random Forest and Logistic Regression, to accurately predict heart disease presence.\nAdditionally, Power BI was employed to visualize data trends and patterns, providing interactive dashboards that facilitate a deeper understanding of the factors influencing heart disease. This comprehensive approach enables timely and accurate risk assessments, ultimately contributing to better preventive measures and patient outcomes.",
        images: ["/imgs/hd-1.jpg", "/imgs/hd-3.jpg", "/imgs/hd-2.jpg", "/imgs/hd-4.jpg"],
      },
    },
    {
      title: "Predicting Course Ratings with Machine Learning",
      text: "We used data mining and business intelligence to match instructors to courses for higher ratings, based on historical data. Our model, built with Python and scikit-learn, uses five key features, such as instructor expertise and course difficulty, to predict other metrics and the odds of course success. This approach helps optimize instructor-course pairings for improved learner satisfaction.",
      imgSrc: "/imgs/cr-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://courses-ratings-prediction.onrender.com",
      modalDetails: {
        text: "We applied a combination of data mining, machine learning, and business intelligence techniques to develop a predictive model that enhances course ratings and optimizes instructor-course pairings in the online education sector. By leveraging historical data on course performance and instructor attributes, such as knowledge, expertise, overall score, course duration, difficulty level, and course type, we aimed to identify the most influential factors contributing to high learner satisfaction and course success. Our machine learning model, created using Python and the scikit-learn library, is designed to efficiently use a subset of five key features to predict other critical metrics, including the odds of a course’s success. This approach reduces data complexity while maintaining high predictive accuracy, allowing us to forecast course ratings with greater reliability.To complement our predictive model, we utilized Power BI to visualize the data, providing an in-depth comparative analysis of instructors' performance and course ratings based on historical data. These visualizations enabled us to explore the performance of each instructor across various courses, uncovering patterns and insights that highlight which instructor attributes are most closely associated with higher course ratings. By analyzing these relationships, we could make more informed decisions about matching instructors to courses that best align with their strengths, thereby optimizing course outcomes and enhancing learner satisfaction.The integration of machine learning and data visualization techniques provided a comprehensive framework for understanding and improving course offerings. Educational platforms can use the insights gained from our model to strategically assign instructors to courses, improve teaching effectiveness, and tailor course content to better meet learners' needs. This data-driven strategy not only enhances course quality but also supports continuous improvement in educational outcomes, fostering a more engaging and successful learning environment.",
        images: ["/imgs/cr-2.jpg", "/imgs/cr-1.jpg", "/imgs/cr-3.jpg", "/imgs/cr-3.jpg", "/imgs/cr-4.jpg", "/imgs/cr-5.jpg", "/imgs/cr-6.jpg", "/imgs/cr-7.jpg", "/imgs/cr-8.jpg", "/imgs/cr-9.jpg"], // Additional images
      },
    },
    // {
    //   title: "Card Title 3",
    //   text: "Quick example text to build on the card title.",
    //   imgSrc: "img3.jpg",
    //   moreDetailsLink: "#",
    //   visitLink: "#",
    //   modalDetails: {
    //     text: "Additional information for the third card.",
    //     images: ["img5.jpg"], // Additional images
    //   },
    // },
  ];

  const secondCarouselItems = [
    {
      title: "Real Estate Agency Website Development",
      text: "I developed a complete website for a real estate agency that includes a landing page, an 'About' page, and a 'Contact' page to engage visitors and provide information. The site features a categorized gallery section showcasing different property offers, with each gallery leading to detailed property pages. I also integrated a user authentication system with login and account creation pages, connected to a Firebase database, allowing users to create accounts, save listings, and manage their profiles securely. This website enhances user experience and helps the agency attract and engage clients effectively.",
      imgSrc: "/imgs/re-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://nagbou.github.io/nagbou-s-real-estate-agency/index.html",
      modalDetails: {
        text: "I designed and developed a robust website for a real estate agency, utilizing HTML, CSS, Bootstrap, and native JavaScript to create a dynamic and user-friendly platform. The website features a well-structured landing page that captures visitors' attention, an 'About' page that provides detailed information about the agency, and a 'Contact' page facilitating easy communication. Each section is crafted with responsive design principles using Bootstrap to ensure a seamless experience across various devices.The site includes a categorized section that directs users to property galleries, where they can explore different property listings. Each gallery leads to detailed property pages, offering comprehensive information about individual listings. To enhance user engagement, I integrated a secure authentication system with login and account creation pages, connected to a Firebase database for efficient user management. This integration allows users to create accounts, log in, save favorite listings, and manage their profiles securely.Overall, this website combines intuitive design with advanced functionality, providing a comprehensive tool for the real estate agency to attract, engage, and retain clients. The use of modern web technologies ensures a smooth and interactive user experience, while the secure user management system supports effective client interaction and data handling.",
        images: ["/imgs/re-1.jpg", "/imgs/re-2.jpg", "/imgs/re-3.jpg", "/imgs/re-4.jpg", "/imgs/re-5.jpg", "/imgs/re-6.jpg", "/imgs/re-7.jpg",], // Additional images
      },
    },
    {
      title: "Cryptography Message Website",
      text: "I created a web application for cryptography that allows users to encrypt and decrypt messages using various algorithms. The website features a simple and intuitive interface where users can input a message and apply different encryption algorithms to produce crypted outputs. The application also includes a decryption interface where users can paste a crypted message, and the system will automatically determine the encryption method used and reveal the original message.",
      imgSrc: "/imgs/cd-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://nagbou.github.io/crypt-decrypt-msg/",
      modalDetails: {
        text: "Developed using HTML, CSS, and JavaScript, the website provides an interactive platform for exploring cryptographic techniques. Users can select from a range of encryption algorithms, apply them to their messages, and view the resulting crypted text. The decryption interface uses algorithmic detection to identify the encryption method and decode the message, showcasing the original content. This functionality is designed to demonstrate the principles of cryptography in a user-friendly manner, offering a hands-on experience with message encryption and decryption.To explore the cryptography message website, start by visiting the site and using the encryption interface. Enter a message, choose an encryption algorithm, and generate a crypted message. Then, go to the decryption interface, paste the crypted message, and click 'Decrypt' to reveal the original message. Try this process with different messages and algorithms to see how the crypted outputs vary. Additionally, test encrypting the same message multiple times with different algorithms and ensure that the website can correctly identify and decrypt each crypted message. This will help you understand how the site handles various encryption and decryption scenarios.",
        images: ["/imgs/cd-1.jpg", "/imgs/cd-2.jpg", "/imgs/cd-3.jpg"], // Additional images
      },
    },
    {
      title: "Interactive Quiz Interface with Timer",
      text: "I developed a simple quiz interface featuring a built-in timer to enhance the user experience. The interface allows users to answer a series of questions within a set time limit. The timer counts down from the designated time, providing users with a clear indication of how much time remains to complete the quiz. Once the timer runs out, the quiz automatically submits the answers, ensuring users stay engaged and complete the quiz within the allotted time. This setup combines a user-friendly design with time management features to create an efficient and interactive quiz experience.",
      imgSrc: "imgs/q-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://nagbou.github.io/quiz/",
      modalDetails: {
        text: "I created an interactive quiz interface designed to offer an engaging and time-managed user experience. The interface presents a series of questions, each with multiple-choice answers, and integrates a countdown timer that tracks the remaining time for the quiz. Users can select their answers as the timer progresses, with the clock providing a visual cue of the time left to complete the quiz.The timer is set to a predefined duration, ensuring users are aware of their time constraints throughout the quiz. Once the timer reaches zero, the quiz automatically submits the answers, preventing further modifications and capturing the user's responses within the time limit. This feature not only keeps users engaged but also adds an element of challenge and urgency to the quiz. The design is user-friendly, with clear navigation and timer visibility, providing a seamless and interactive experience for users.",
        images: ["imgs/q-3.jpg", "imgs/q-1.jpg", "imgs/q-2.jpg", "imgs/q-4.jpg",], // Additional images
      },
    },
    {
      title: "Password Generator with Security Levels",
      text: "I developed a password generator tool that allows users to create passwords categorized by security strength: weak, medium, and strong.",
      imgSrc: "imgs/pg-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://nagbou.github.io/Password-Generator-with-Security-Levels/",
      modalDetails: {
        text: "I created a password generator tool that lets users choose from three security levels: weak, medium, and strong. Depending on the selection, it generates a password with varying complexity, from simple to highly secure. Users can then copy the generated password for their use, ensuring they have an appropriate level of security for their needs.",
        images: ["imgs/pg-1.jpg", "imgs/pg-2.jpg", "imgs/pg-3.jpg"], // Additional images
      },
    },
    {
      title: "Chronometer App with Laps, Pause, Restart, and Light/Dark Modes",
      text: "I developed a versatile chronometer app that allows users to track time with features for saving laps, pausing, and restarting. The app supports two display modes—light and dark—so users can choose their preferred visual setting. This combination of functionality and customization ensures a user-friendly experience for managing and recording time efficiently.",
      imgSrc: "imgs/t-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://nagbou.github.io/Chronometer-App-with-Laps-Pause-Restart-and-Light-Dark-Modes/",
      modalDetails: {
        text: "I developed a versatile chronometer app that allows users to track time with features for saving laps, pausing, and restarting. The app supports two display modes—light and dark—so users can choose their preferred visual setting. This combination of functionality and customization ensures a user-friendly experience for managing and recording time efficiently.",
        images: ["imgs/t-1.jpg", "imgs/t-2.jpg"], // Additional images
      },
    },
  ];

  return (
    <section className="portfolio-section container py-5">
      <h1 className="icons-section-header text-center">My Portfolio</h1>
      {/* First Row Header */}
      <div className="row1 mb-5">
        <div className="portfolio-row-header mb-5">
          <h2>Innovative Web Apps with Data-Driven Solutions</h2>
          <p>
            I develop web apps and products that leverage machine learning and data mining to deliver intelligent, data-driven solutions.
          </p>
        </div>
      </div>


      {/* Carousels */}
      <Carousel id="portfolioCarousel" items={firstCarouselItems} />
      {/* Second Row Header */}
      <div className="row2 mb-5">
        <div className="portfolio-row-header mt-5 mb-5">
          <h2>Crafting Custom Frontends with UI/UX Design</h2>
          <p>
            I create custom frontends from scratch, incorporating UI/UX design principles and implementing basic backend functionality to deliver well-rounded web experiences.
          </p>
        </div>
      </div>

      <Carousel id="portfolioCarouselSecond" items={secondCarouselItems} />
    </section>
  );
};