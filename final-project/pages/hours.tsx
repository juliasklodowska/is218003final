import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components/navbar'; 
import Footer from '../components/footer'; 
import { Button } from "@nextui-org/react";

const HoursAndLocationPage = () => {
    return (
        <div>

    <Head>
        <title>Hours and Location</title>
        <meta name="description" content="Cottage Comfort Café, your cozy nook in Newark, welcomes you with aromatic coffee and comforting delights, perfectly situated at 123 Main Street with convenient hours to suit every schedule." />
        <link rel="icon" href="../images/logo.png"/>
      </Head>

            <Navbar />

           {/* Hours and Location Section */}
        <section>
          <h2
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Georgia',
              fontSize: '42px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '53px',
              paddingTop: '72px'
            }}
          >
            Hours and Location
          </h2>

          {/* Space between title and content */}
          <div style={{ height: '91px' }}></div>

          {/* Image Container */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <div style={{ position: 'relative', maxWidth: '30%', marginRight: '25px', marginBottom: '110px' }}>
              <img
                src="../images/map.webp" 
                alt="Hours and Location"
                style={{
                  width: '100%', 
                  height: 'auto',
                }}
              />
              {/* Button */}
              <Button
                color="warning"
                size="md"
                variant="shadow"
                style={{
                  position: 'absolute', 
                  bottom: '10px', 
                  right: '10px',
                  fontFamily: 'Georgia',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  lineHeight: '24px',
                }}
              >
                Get Directions
              </Button>
            </div>

            {/* Location Column */}
            <div style={{ color: '#000', fontFamily: 'Georgia', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '35px', marginRight: '100px'}}>
              <h3 style={{ color: '#000', fontFamily: 'Georgia', fontSize: '22px', fontStyle: 'normal', fontWeight: 700, lineHeight: '53px', marginBottom: '20px' }}>Location</h3>
              <p>Cottage Comfort Café</p>
              <p>123 Main Street</p>
              <p>Newark, NJ 07102</p>
              <p>123-456-7890</p>
            </div>

            {/* Hours Column */}
            <div style={{ color: '#000', fontFamily: 'Georgia', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '35px' }}>
              <h3 style={{ color: '#000', fontFamily: 'Georgia', fontSize: '22px', fontStyle: 'normal', fontWeight: 700, lineHeight: '53px', marginBottom: '20px' }}>Hours</h3>
              <p>Monday 7:00am - 7:00pm</p>
              <p>Tuesday 7:00am - 7:00pm</p>
              <p>Wednesday 7:00am - 7:00pm</p>
              <p>Thursday 7:00am - 7:00pm</p>
              <p>Friday 7:00am - 7:00pm</p>
              <p>Saturday 6:00am - 6:00pm</p>
              <p>Sunday 6:00am - 3:00pm</p>
            </div>
          </div>
        </section>

        {/* End of Hours and Location Section */}
            <Footer />
        </div>
    );
};

export default HoursAndLocationPage;
