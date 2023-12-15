import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/modal.module.css'; // Import the CSS module

import MailchimpForm from './Mailchimpform'; // Import the MailchimpForm component

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const modalContent = isOpen ? (
    <div className={styles.overlay}>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <button className={styles.closeButton} onClick={onClose}>Close</button>
          <div className={styles.modalContent}>
            <h2>Join Our Family</h2>
            <p>Join our rewards program and enjoy a free coffee within a week! Plus, every 10th visit rewards you with a free drink, and you get 50% off for sharing your love on social media.</p>
            <MailchimpForm />
          </div>
        </div>
      </div>
    </div>
  ) : null;

  // Using a portal to render the modal into the body of the document
  return ReactDOM.createPortal(
    modalContent,
    document.body
  );
};

export default Modal;






