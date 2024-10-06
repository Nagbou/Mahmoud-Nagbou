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
        images: ["/imgs/cr-2.jpg", "/imgs/cr-1.jpg", "/imgs/cr-3.jpg", "/imgs/cr-4.jpg", "/imgs/cr-5.jpg", "/imgs/cr-6.jpg", "/imgs/cr-7.jpg", "/imgs/cr-8.jpg", "/imgs/cr-9.jpg"], // Additional images
      },
    },
    {
      title: "Predicting Customer purchase with Machine Learning",
      text: "This Flask-based web application allows users to predict customer purchase behavior based on various input factors such as age, gender, annual income, and product preferences. The app features an intuitive interface with data visualization tools, including charts and graphs, to analyze customer patterns. Additionally, users can easily navigate between the prediction tool and a dashboard for detailed insights. The app is built with Python for backend processing and leverages HTML, JavaScript, and popular libraries like Bootstrap for a smooth, user-friendly frontend experience.",
      imgSrc: "/imgs/cp-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://customer-purchase-prediction-1.onrender.com/",
      modalDetails: {
        text: "This web application, built using Flask, serves as an interactive platform to predict customer purchasing behavior based on key factors such as age, gender, annual income, number of purchases, and more. The app’s core functionality involves leveraging a machine learning model to generate predictions, providing businesses with actionable insights into customer buying habits. Upon entering relevant data, users can submit the information to the app, which processes the input and displays predictions about potential purchasing behaviors. This can be particularly useful for marketers and business managers looking to target specific customer segments more effectively. The app also features a dynamic dashboard with visualizations, including bar charts, pie charts, and graphs that present key trends and data from the uploaded CSV files. This dashboard helps users quickly understand patterns in customer behavior, track engagement, and make data-driven decisions. With a sleek and responsive design powered by HTML, CSS, and JavaScript, the app provides a seamless experience on both desktop and mobile devices. The integration of Bootstrap ensures an organized and aesthetically pleasing layout. The application is built with scalability in mind, and can be easily expanded to include more features such as advanced analytics and reports, supporting business intelligence efforts. Furthermore, the app includes PDF support, allowing users to view important documents in a popup on the same page. By combining machine learning, data visualization, and user-friendly design, the app is a powerful tool for businesses to forecast customer actions and optimize marketing strategies.",
        images: ["/imgs/cp-1.jpg", "/imgs/cp-2.jpg", "/imgs/cp-3.jpg", "/imgs/cp-4.jpg", "/imgs/cp-5.jpg"], // Additional images
      },
    },
    {
      title: "Understanding Emotions: A Data-Driven Sentiment Analysis of Social Media",
      text: "Understanding Emotions: A Data-Driven Sentiment Analysis of Social Media explores the evolving landscape of user sentiments across various platforms. Built using React.js and enhanced with Power BI for data visualization, this web application analyzes engagement metrics like likes and retweets, as well as sentiment trends over time. It reveals valuable insights into emotional expressions and user interactions in the digital space, aiming to enhance our understanding of how sentiments shape online conversations and influence user behavior.",
      imgSrc: "/imgs/ssa-cover.jpg",
      moreDetailsLink: "#",
      visitLink: "https://social-media-sentiments-analysis.vercel.app/",
      modalDetails: {
        text: "Understanding Emotions: A Data-Driven Sentiment Analysis of Social Media is a comprehensive exploration of how user sentiments manifest across various social media platforms, shedding light on the intricate dynamics of online interactions. This project is built using React.js, providing a seamless and interactive user experience, while leveraging Power BI for robust data visualization and insightful analytics. In today's digital age, social media serves as a powerful platform for individuals to express their emotions and opinions. By analyzing a vast dataset of user interactions, including likes, retweets, and hashtags, our project identifies the prevailing sentiments that dominate online conversations. We examine engagement metrics to uncover which emotions resonate most with users, highlighting the significance of joy, excitement, gratitude, contentment, and positivity as the primary drivers of interaction. Through a multi-faceted approach, we conduct geographical analyses to understand regional variations in sentiment expression. For example, we analyze how countries like the USA, UK, Canada, and India exhibit diverse emotional landscapes compared to nations like France and Brazil, which show more concentrated sentiment themes. This analysis reveals not only cultural differences in emotional expression but also how specific sentiments are influenced by local trends and events. Our platform-specific analysis further delves into how different social media channels, such as Twitter, Instagram, and Facebook, cater to unique user preferences. By identifying the top sentiments across these platforms, we provide businesses and marketers with valuable insights into where to focus their engagement strategies to foster positive user interactions. Additionally, the temporal analysis conducted in this project tracks sentiment trends over time, revealing significant patterns and fluctuations that correspond with global events and cultural shifts. Our findings indicate a substantial increase in positive sentiments over the years, alongside a rise in other engaging emotions like confusion and curiosity, reflecting a growing demand for deeper engagement with content. By employing advanced data visualization techniques through Power BI, we present these findings in an accessible and visually appealing manner, enabling users to explore the data interactively. This aspect not only enhances the understanding of the emotional landscape but also provides actionable insights that can inform marketing strategies, content creation, and user engagement initiatives. Ultimately, Understanding Emotions: A Data-Driven Sentiment Analysis of Social Media aims to bridge the gap between data analytics and emotional intelligence in the digital realm. By harnessing the power of technology and analytical methodologies, this project offers a profound understanding of how sentiments shape user behavior and interactions, providing a valuable resource for businesses, researchers, and anyone interested in the evolving narrative of emotions in social media.",
        images: ["/imgs/ssa-1.jpg", "/imgs/ssa-2.jpg", "/imgs/ssa-3.jpg", "/imgs/ssa-4.jpg", "/imgs/ssa-5.jpg", "/imgs/ssa-6.jpg", "/imgs/ssa-7.jpg", "/imgs/ssa-8.jpg", "/imgs/ssa-9.jpg", "/imgs/ssa-10.jpg", "/imgs/ssa-11.jpg", "/imgs/ssa-12.jpg", "/imgs/ssa-13.jpg"], // Additional images
      },
    },
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
      <h1 className="section-header  text-center">My Portfolio</h1>
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