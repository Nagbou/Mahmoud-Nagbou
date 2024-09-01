import React from "react";
import './DetailsModal.css';
import Image from 'next/image';
interface DetailsModalProps {
  id: string;
  title: string;
  details: string; // Text for the modal body
  images: string[]; // Array of image paths for the modal
  visitLink: string; // URL for the "Visit Website" button
}

export const DetailsModal: React.FC<DetailsModalProps> = ({ id, title, details, images, visitLink }) => {
  return (
    <div className="modal fade" id={id} tabIndex={-1} aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="modal-img-container">
              {images.map((imgSrc, index) => (
                <img key={index} src={imgSrc} className="img-fluid mb-2" alt={`Detail ${index + 1}`} />
              ))}
            </div>
            <div className="modal-details">
              <p>{details}</p>
            </div>
          </div>
          <div className="modal-footer">
            <a href={visitLink} className="card-link-icon close-btn-text" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span className="link-text">Visit Website</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
