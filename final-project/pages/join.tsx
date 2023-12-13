import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components/navbar'; 
import Footer from '../components/footer';

const JoinPage = () => {
    const style = {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    };

    const titleStyle = {
        color: '#000',
        textAlign: 'center' as 'center',
        fontFamily: 'Georgia',
        fontSize: '42px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '53px',
        marginTop: '72px', 
    };

    const contentStyle = {
        color: '#000',
        textAlign: 'center' as 'center',
        fontFamily: 'Georgia',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '60px', 
        marginBottom: '32px', 
        marginTop: '64px', 
    };

    const formContainerStyle = {
        width: '664px',
        height: '781px',
        borderRadius: '14px',
        background: 'var(--common-white, #FFF)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
        margin: '64px auto 160px', 
        position: 'relative' as 'relative', 
    };

    const titleTextStyle = {
        color: '#000',
        textAlign: 'center' as 'center',
        fontFamily: 'Georgia',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '53px',
        position: 'absolute' as 'absolute', // Type casting to assert position type
        top: '117px', // 117px away from the top of the rectangle input
        left: '0',
        right: '0',
    };

    return (
        <div>
             <Head>
                <title>Join Now</title>
                <meta name="description" content="Join the Cottage Comfort Cafe community and unlock exclusive discounts, VIP access to new menu items, loyalty rewards, and exciting culinary events." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {/* Include the NavBar component */}
            <Navbar />

            <div style={style}>
                <h1 style={titleStyle}>Join Our Family</h1>
                <p style={contentStyle}>
                    Join our rewards program and enjoy a free coffee within a week! Every 10th visit rewards you with a free drink, and you get 50% off for sharing your love on social media.
                </p>

                {/* Form Container */}
                <div style={formContainerStyle}>
                    {/* Title */}
                    <p style={titleTextStyle}>Personal Information</p>

                    
                </div>

            </div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
};

export default JoinPage;





