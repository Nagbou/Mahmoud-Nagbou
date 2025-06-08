import React, { useRef } from "react";
import { Card } from "./Card";
import './Portfolio.css';
import Image from 'next/image';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      // Here you can handle the file upload
      // For example, you could send it to your server
      console.log('Selected file:', file.name);
      // Add your file upload logic here
    } else {
      alert('Please select a PDF file');
    }
  };

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

      {/* Resume Buttons */}
      <div className="text-center mt-3">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleResumeUpload}
          accept=".pdf"
          style={{ display: 'none' }}
        />
        <button
          className="btn btn-primary me-2"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Resume
        </button>
        <a
          href="/Resume_Mahmoud_Nagbou.pdf"
          className="btn btn-success"
          download="Resume_Mahmoud_Nagbou.pdf"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};
