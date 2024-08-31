import React from "react";
import { Card } from "./Card";
import './Portfolio.css';

interface CarouselProps {
  id: string;
  items: Array<{
    title: string;
    text: string;
    imgSrc: string;
    visitLink: string;
    modalDetails: {
      text: string;
      images: string[]; // Array of image paths for the modal
    };
  }>;
}

export const Carousel: React.FC<CarouselProps> = ({ id, items }) => {
  return (
    <div id={id} className="carousel slide mb-5">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="row">
              <div className="col-md-12">
                <Card
                  title={item.title}
                  text={item.text}
                  imgSrc={item.imgSrc}
                  visitLink={item.visitLink}
                  modalId={`${id}-modal-${index}`}
                  modalDetails={item.modalDetails}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
