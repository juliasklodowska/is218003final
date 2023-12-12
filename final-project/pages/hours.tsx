// hours.js (or hours.tsx)

import React from 'react';

const HoursAndLocationPage = () => {
    return (
        <div>
            <h1>Hours and Location</h1>
            <h2>Location</h2>
            <p>We are located at [Insert Address].</p>
            <p>Our office is easily accessible and situated in a convenient neighborhood.</p>
            
            <h2>Operating Hours</h2>
            <ul>
                <li>Monday: 9:00 AM - 5:00 PM</li>
                <li>Tuesday: 9:00 AM - 5:00 PM</li>
                <li>Wednesday: 9:00 AM - 5:00 PM</li>
                <li>Thursday: 9:00 AM - 5:00 PM</li>
                <li>Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: Closed</li>
                <li>Sunday: Closed</li>
            </ul>
            
            <p>We look forward to seeing you during our business hours!</p>
        </div>
    );
};

export default HoursAndLocationPage;
