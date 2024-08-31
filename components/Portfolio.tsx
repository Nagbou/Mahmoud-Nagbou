

import React from "react";
import { Carousel } from "./Carousel";
import './Portfolio.css';

export const Portfolio: React.FC = () => {
  const firstCarouselItems = [
    {
      title: " Predicting Heart Disease Using Machine Learning",
      text: "Heart disease remains a leading cause of death worldwide, responsible for approximately 17.9 million deaths annually, according to the World Health Organization. As rates of cardiovascular disease continue to rise due to aging populations and lifestyle factors, it becomes crucial to develop effective predictive tools. In this project, we utilized machine learning techniques to predict the likelihood of heart disease based on various health metrics. Using Python and scikit-learn, we built and trained a predictive model, while Power BI was employed to visualize and analyze data patterns.",
      imgSrc: "/imgs/1.jpg",
      moreDetailsLink: "#",
      visitLink: "https://www.facebook.com/",
      modalDetails: {
        text: " Heart disease, encompassing conditions affecting the heart and blood vessels, represents a major global health challenge. The increasing prevalence of cardiovascular diseases,\n driven by factors such as aging, obesity, and lifestyle changes, underscores the urgent need for advanced diagnostic tools.\nThe Global Burden of Disease Study and the American Heart Association have highlighted a troubling rise in heart disease incidence, with nearly 48.2% of U.S. adults affected as of 2018.\n \nTo address this issue, our project focused on developing a machine learning model to predict heart disease risk. We utilized Python and the scikit-learn library for model development, leveraging features such as age, gender, chest pain type, blood pressure, cholesterol levels, and more. The model was trained using various algorithms, including Random Forest and Logistic Regression, to accurately predict heart disease presence.\nAdditionally, Power BI was employed to visualize data trends and patterns, providing interactive dashboards that facilitate a deeper understanding of the factors influencing heart disease. This comprehensive approach enables timely and accurate risk assessments, ultimately contributing to better preventive measures and patient outcomes.",
        images: ["img3.jpg", "img4.jpg"],
      },
    },
    {
      title: "Card Title 2",
      text: "Quick example text to build on the card title.",
      imgSrc: "img2.jpg",
      moreDetailsLink: "#",
      visitLink: "#",
      modalDetails: {
        text: "More details about the second card.",
        images: ["img3.jpg", "img4.jpg"], // Additional images
      },
    },
    {
      title: "Card Title 3",
      text: "Quick example text to build on the card title.",
      imgSrc: "img3.jpg",
      moreDetailsLink: "#",
      visitLink: "#",
      modalDetails: {
        text: "Additional information for the third card.",
        images: ["img5.jpg"], // Additional images
      },
    },
  ];

  const secondCarouselItems = [
    {
      title: "Card Title 4",
      text: "Another quick example text to build on the card title.",
      imgSrc: "img4.jpg",
      moreDetailsLink: "#",
      visitLink: "#",
      modalDetails: {
        text: "More details for the fourth card.",
        images: ["img6.jpg"], // Additional images
      },
    },
    {
      title: "Card Title 5",
      text: "Another quick example text to build on the card title.",
      imgSrc: "img5.jpg",
      moreDetailsLink: "#",
      visitLink: "#",
      modalDetails: {
        text: "More details for the fifth card.",
        images: ["img7.jpg", "img8.jpg"], // Additional images
      },
    },
    {
      title: "Card Title 6",
      text: "Another quick example text to build on the card title.",
      imgSrc: "img6.jpg",
      moreDetailsLink: "#",
      visitLink: "#",
      modalDetails: {
        text: "More details for the sixth card.",
        images: ["img9.jpg", "img10.jpg"], // Additional images
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