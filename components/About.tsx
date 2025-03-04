import React from "react";
import "./About.css"; // Ensure you have a corresponding CSS file for styling
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="about-section">
      {/* Portrait Image Container */}
      <div className="portrait-container">
        <Image
          src="/imgs/me1-1.jpg"
          alt="Portrait Photo"
          className="portrait-image" // Optional: add a CSS class for styling
        />
      </div>

      {/* Text Container */}
      <div className="text-container">
        <h2>Who’s Behind This Website?</h2>
        <h4 className="mb-2 mt-2">
          Get to Know Me, My Passion, Purpose, and Journey.
        </h4>

        <p>Hi, I&#39;m Mahmoud</p>
        <p>
          Passionate about transforming data into actionable insights and
          intelligent solutions, I specialize in blending Business Intelligence
          -BI- and Artificial Intelligence -AI- to drive innovation. With a
          strong foundation in data science, data analytics, machine learning
          -ML-, and web development, I create AI-powered applications that
          enhance decision-making and automate analytics.
        </p>
        <p>
          As a Business Intelligence Developer with extensive experience in web
          development, I excel at leveraging technology to design and implement
          solutions that turn raw data into meaningful insights. I am skilled in
          building end-to-end AI-driven applications, integrating data
          pipelines, and optimizing workflows for efficiency.
        </p>
        <p>
          Beyond my formal education and degree in Business Intelligence, I am a
          dedicated self-learner, continuously expanding my expertise in
          emerging AI technologies, advanced analytics, and automation tools.
          Staying at the forefront of innovation is essential in this
          ever-evolving field, and I am committed to pushing the boundaries of
          what data and AI can achieve.
        </p>
        
      </div>
    </section>
  );
};

export default About;
