import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components/navbar'; 
import Footer from '../components/footer';
import Image from 'next/image';

const CommunityPage = () => {
    return (
        <div>
            <Head>
                <title>Community</title>
                <meta name="description" content="Cottage Comfort Café Community is a place where we come together to share kindness and support, making a positive impact on our local community." />
                <link rel="icon" href="/images/logo.png"/>
            </Head>

            <Navbar />

             {/* Family Section */}
             <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '50%', height: '613px', position: 'relative' }}>
                    <Image
                        src="/images/giving.webp"
                        alt="Community Giving Back Image"
                        layout='fill'
                        objectFit='cover'
                    />
                </div>

                <section
                    style={{
                        height: '613px',
                        backgroundColor: '#312107',
                        width: '888px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        padding: '0 32px',
                    }}
                >
                    <h2
                        style={{
                            color: '#FFF',
                            textAlign: 'center',
                            fontFamily: 'Georgia',
                            fontSize: '42px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: '53px',
                            margin: '0',
                            paddingBottom: '50px'
                        }}
                    >
                        Giving Back to the Community
                    </h2>
                    <p
                        style={{
                            color: '#F4F4F5',
                            textAlign: 'center',
                            fontFamily: 'Georgia',
                            fontSize: '22px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '53px',
                            margin: '24px 0',
                        }}
                    >
                        Cottage Comfort Café pulses with community spirit. Join us monthly for 'Caring Cup Day'—our hosted day of charity, donations, or community service. Together, we make a difference—one cup, one cause, one community at a time.
                    </p>
                </section>
            </div>
            {/* End of Family Section */}

            {/* "Events" Title */}
            <h2
                style={{
                    color: '#000',
                    fontFamily: 'Georgia',
                    fontSize: '42px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '24px',
                    paddingLeft: '124px', 
                    paddingTop: '110px',
                    paddingBottom: '64px'
                }}
            > 
                Events
            </h2>

            {/* Food Drive Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '1192px',
                        height: '613px',
                        borderRadius: '14px',
                        background: 'var(--common-white, #FFF)',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                   {/* Image on the left side */}
                   <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                        <Image
                            src="/images/fooddrive.webp"
                            alt="Food Drive Image"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>

                    {/* Text on the right side */}
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            padding: '32px', 
                        }}
                    >
                        <h3
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '42px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '53px',
                                marginBottom: '24px',
                            }}
                        >
                            Food Drive Donations
                        </h3>
                        <p
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '53px',
                                marginBottom: '0',
                                marginTop: '54px'
                            }}
                        >
                            We host food drives frequently for local shelters and families in need. To participate, email or call us, and we&apos;ll sign you up as a volunteer, sending details about our next event to your inbox.
                        </p>
                        <p
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '53px',
                                marginTop: '50px'
                            }}
                        >
                            Join us in nourishing our community with care and compassion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Space between sections */}
            <div style={{ height: '110px' }}></div>

            {/* Gardening Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '1192px',
                        height: '613px',
                        borderRadius: '14px',
                        background: 'var(--common-white, #FFF)',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {/* Image on the left side */}
                    <div style={{ width: '50%', height: '100%', position: 'relative' }}>
                        <Image
                            src="/images/garden.webp"
                            alt="Gardening Image"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>

                    {/* Text on the right side */}
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            padding: '32px', 
                        }}
                    >
                        <h3
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '42px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '53px',
                                marginBottom: '24px',
                            }}
                        >
                            Gardening
                        </h3>
                        <p
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '53px',
                                marginBottom: '0',
                                marginTop: '54px'
                            }}
                        >
                            Seasonally, we enrich community gardens with our very own coffee grounds as a natural fertilizer to enrich the soil. 
                        </p>
                        <p
                            style={{
                                color: '#000',
                                fontFamily: 'Georgia',
                                fontSize: '22px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '53px',
                                marginTop: '50px'
                            }}
                        >
                            Join us in nourishing our community with care and compassion.
                        </p>
                    </div>
                </div>
            </div>

            {/* Space between sections */}
            <div style={{ height: '110px' }}></div>

            {/* Include the Footer component */}
            <Footer />
        </div>
    );
};

export default CommunityPage;


