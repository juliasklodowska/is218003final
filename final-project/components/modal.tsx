import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/modal.module.css';

import MailchimpForm from './Mailchimpform';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Update the state to indicate that this is now in the browser (client-side)
    setIsBrowser(typeof window !== 'undefined');
  }, []);

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

  // Only render the portal on the client-side
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.body
    );
  } else {
    return null;
  }
};

export default Modal;






