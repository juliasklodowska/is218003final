import React from 'react';
import styles from '../styles/modal.module.css'; // Import styles

const MailchimpForm: React.FC = () => {
  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form 
          action="https://njit.us21.list-manage.com/subscribe/post?u=6b2c1e403bb1aafc95b55ac22&amp;id=2adcc3797e&amp;f_id=0028f2e6f0" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          className="validate" 
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className={styles['mc-field-group']} style={{ marginBottom: '10px' }}>
              <label htmlFor="mce-EMAIL">Email Address <span className={styles.asterisk}>*</span></label>
              <input 
                type="email" 
                name="EMAIL" 
                className={`${styles.required} ${styles.email}`} 
                id="mce-EMAIL" 
                required 
                style={{ backgroundColor: 'white' }} 
              />
            </div>
            <div className={styles['mc-field-group']} style={{ marginBottom: '10px' }}>
              <label htmlFor="mce-FNAME">First Name </label>
              <input 
                type="text" 
                name="FNAME" 
                className={styles.text} 
                id="mce-FNAME" 
                style={{ backgroundColor: 'white' }} 
              />
            </div>
            <div className={styles['mc-field-group']} style={{ marginBottom: '10px' }}>
              <label htmlFor="mce-LNAME">Last Name </label>
              <input 
                type="text" 
                name="LNAME" 
                className={styles.text} 
                id="mce-LNAME" 
                style={{ backgroundColor: 'white' }} 
              />
            </div>
            <div id="mce-responses" className={styles.clear + ' ' + styles.foot}>
              <div className={styles.response} id="mce-error-response" style={{ display: 'none' }}></div>
              <div className={styles.response} id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_6b2c1e403bb1aafc95b55ac22_2adcc3797e" tabIndex={-1} />
            </div>
            <div className={styles.optionalParent}>
              <div className={styles.clear + ' ' + styles.foot}>
                <p style={{ margin: '0 auto' }}>
                  <a href="http://eepurl.com/iF-FRk" title="Mailchimp - email marketing made easy and fun">
                    <span className={styles.button}>Subscribe</span> 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;




  