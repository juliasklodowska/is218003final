import React from 'react';
import { footerLinks, brandName } from '../config/footerConfig'; // Adjust the import path as necessary
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <h2>{brandName}</h2>
        </div>
        <div className={styles.footerRight}>
          {footerLinks.map((link, index) => (
            <a key={index} href={link.href} className={styles.footerLink}>
              {link.text}
            </a>
          ))}
        </div>
        <div className={styles.footerBottomRight}>
        <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <span>© 2023 Comfort Cottage Café</span>
        </div>
      </footer>
    );
  };  

export default Footer;

