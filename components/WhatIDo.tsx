import React from "react";
import "./WhatIDo.css"; // Ensure you have a corresponding CSS file for styling

const WhatIDo: React.FC = () => {
  return (
    <section className="cards-section py-5">
      <div className="container">
        <div className="row text-center">
          <h1 className="card_section_header">What I&#39;m Good At?</h1>

          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <i className="fa-solid fa-laptop"></i>
                </div>
                <h5 className="card-title">AI Developer</h5>
                <p className="card-text">
                  I design and develop AI solutions that automate processes and
                  enhance decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
                <h5 className="card-title">Business Intelligence</h5>
                <p className="card-text">
                  I turn data into actionable insights, using Business
                  Intelligence to drive strategic decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-icon">
                  <i className="fa-solid fa-database"></i>
                </div>
                <h5 className="card-title">Data Science</h5>
                <p className="card-text">
                  I analyze data and build predictive models to drive
                  data-driven decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
