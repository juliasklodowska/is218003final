import React, { useState, useEffect } from 'react';
import { CSSProperties } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.cookieConsentContainer}>
      <p style={styles.cookieConsentText}>
      Our website uses cookies to enhance your browsing experience and make your visit warmer and more personal. See our Privacy Policy for more details. {' '}
        <button style={styles.cookieConsentButton} onClick={acceptCookies}>
          I Understand
        </button>
      </p>
    </div>
  );
};

// Styles 
const styles: Record<string, CSSProperties> = {
  cookieConsentContainer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '70px',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    zIndex: 1000,
  },
  cookieConsentText: {
    margin: 0,
    padding: '0 20px',
    fontSize: '16px',
    fontFamily: 'Georgia',
    paddingTop: '10px'
  },
  cookieConsentButton: {
    backgroundColor: '#f5a524',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '0 10px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default CookieConsent;
