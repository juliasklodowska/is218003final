import React from 'react';
import { Navbar } from '../components/navbar'; 
import Footer from '../components/footer'; 

const PrivacyPolicyPage = () => {
    const style = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    };

    const titleStyle = {
        color: '#000',
        textAlign: 'center' as 'center', // Specify the type for textAlign
        fontFamily: 'Georgia',
        fontSize: '42px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '53px',
        marginTop: '50px', 
        marginBottom: '100px'
    };

    const sectionStyle = {
        color: '#000', 
        fontFamily: 'Georgia',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '40px',
        marginBottom: '20px',
        marginTop: '30px', 
    };

    return (
        <div>
            
            <Navbar />

            <div style={style}>
                {/* Privacy Policy title */}
                <h1 style={titleStyle}>Privacy Policy</h1>

                {/* Privacy Policy content */}
                <div style={sectionStyle}>
                    <p><strong>Last Updated: 12/6/2023</strong></p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Introduction</strong></p>
                    <p>
                        Cottage Comfort Café is committed to protecting the privacy of our customers. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our café or use our services, and it includes our use of Google Analytics and adherence to the General Data Protection Regulation (GDPR). We reserve the right to make changes to this policy at any time, and any such changes will be communicated through the "Last Updated" date of this Privacy Policy.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Information Collection</strong></p>
                    <ul>
                        <li style={{ marginLeft: '20px' }}>
                            <strong>•  Personal Data:</strong> Information like your name and email address, voluntarily provided when you sign up for our loyalty program or participate in community activities.
                        </li>
                        <li style={{ marginLeft: '20px' }}>
                            <strong>•  Derivative Data:</strong> Automatically collected information when you access our café, such as IP address, browser type, and operating system.
                        </li>
                    </ul>
                    <p>
                        Additionally, through Google Analytics, we collect anonymized data about your interactions with our website to improve our service offerings.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Use of Your Information</strong></p>
                    <ul>
                        <li>
                            We use your information to enhance your experience by:
                            <ul>
                            <li style={{ marginLeft: '20px' }}> •  Managing your account.</li>
                            <li style={{ marginLeft: '20px' }}> •  Sending emails about rewards or special deals.</li>
                            <li style={{ marginLeft: '20px' }}> •  Offering new products and services.</li>
                            <li style={{ marginLeft: '20px' }}> •  Conducting other necessary business activities.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Disclosure of Your Information</strong></p>
                    <ul>
                        <li>
                            Your information may be disclosed:
                            <ul>
                            <li style={{ marginLeft: '20px' }}> •  By Law or to Protect Rights: As required by law or to protect our rights.</li>
                            <li style={{ marginLeft: '20px' }}> •  Business Transfers: In the event of a merger, sale, or acquisition.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Security of Your Information</strong></p>
                    <p>
                        We take steps to protect your personal information but cannot guarantee absolute security. We urge you to take personal responsibility for protecting your data.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Compliance with GDPR</strong></p>
                    <p>
                        For users in the European Union, we comply with GDPR regulations. You have the right to access, correct, delete, or limit the use of your personal data. If you wish to exercise these rights, please contact us.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Policy for Children</strong></p>
                    <p>
                        We do not knowingly collect data from children under 13. If we become aware of such collection, we will take steps to delete the information.
                    </p>
                </div>

                <div style={sectionStyle}>
                    <p><strong>Contact Us</strong></p>
                    <address>
                        Cottage Comfort Café<br />
                        123 Main Street<br />
                        Newark, NJ 07102<br />
                        <a href="mailto:cottagecomfort@cafe.com">cottagecomfort@cafe.com</a><br />
                        123-456-7890
                    </address>
                </div>
            </div>

            
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;




