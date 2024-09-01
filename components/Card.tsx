import React from "react";
import { DetailsModal } from "./DetailsModal";
import './Portfolio.css';
import Image from 'next/image';
interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
  visitLink: string;
  modalId: string;
  modalDetails: {
    text: string;
    images: string[]; // Array of image paths for the modal
  };
}

export const Card: React.FC<CardProps> = ({ title, text, imgSrc, visitLink, modalId, modalDetails }) => {
  return (
    <>
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <button className="card-link-more btn btn-link" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
          More Details
        </button>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={visitLink} className="card-link-icon" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            <span className="link-text">Visit Website</span>
          </a>
        </div>
      </div>

      {/* Pass modalDetails and visitLink to DetailsModal */}
      <DetailsModal
        id={modalId}
        title={title}
        details={modalDetails.text}
        images={modalDetails.images}
        visitLink={visitLink}
      />
    </>
  );
};
