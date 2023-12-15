import Head from 'next/head';
import styles from '../styles/index.module.css';
import { Navbar } from '../components/navbar';
import Footer from '../components/footer';
import { Button, Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react"; 
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from '../components/modal';


export default function Home() {

  const [isModalOpen, setModalOpen] = useState(false);

  const list = [
    {
      title: "Nurture Nut Latte",
      img: "../images/latte.png",
      price: "$4.50",
    },
    {
      title: "Garden Hug Matcha",
      img: "../images/matcha.png",
      price: "$6.50",
    },
    {
      title: "Compassion Cappuccino",
      img: "../images/cappuccino.png",
      price: "$3.75",
    },
    {
      title: "Meadow Mint Mocha",
      img: "../images/mocha.png",
      price: "$5.50",
    },
  ];

  const testimonialData = [
    {
      name: "Maya Singh",
      role: "Loyal Customer",
      imageSrc: "../images/maya.png",
      content: "“Cottage Comfort Café feels like a warm hug, with its cozy charm and friendly staff making every visit special.”",
    },
    {
      name: "Oliver Smith",
      role: "Loyal Customer",
      imageSrc: "../images/oliver.png",
      content: "“More than just great coffee, Cottage Comfort Café is where our community comes together, like a big, happy family.”",
    },
    {
      name: "Elena Perez",
      role: "Loyal Customer",
      imageSrc: "../images/elena.png",
      content: "“Every visit to Cottage Comfort Café is a lovely experience, filled with care, comfort, and the perfect latte.”",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Cottage Comfort Cafe</title>
        <meta name="description" content="Cottage Comfort Cafe offers a cozy retreat with its homestyle menu, inviting ambiance, and warm, community-focused experience, right at your fingertips." />
        <link rel="icon" href="../images/logo.png"/>
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div
          style={{
            height: '48px',
            backgroundColor: '#F5A524',
            width: '100%',
          }}
        ></div>

        {/* Hero Section */}
        <section
          style={{
            height: '565px',
            backgroundColor: '#312107',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <img
            src='../images/hero_image.png' // Replace with your image path
            alt="Image Overlay"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <h1
              className={styles.title}
              style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '42px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '53px',
              }}
            >
              Welcome to Cottage Comfort Cafe
            </h1>
            <p
              className={styles.description}
              style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '26px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '53px',
              }}
            >
              Home in Every Sip - Free Drink Upon Joining!
            </p>
            {/* Buttons with margin */}
            <div style={{ marginTop: '32px' }}>
            <Button
              color="warning"
              size="lg"
              variant="solid"
              style={{
                  fontFamily: 'Georgia',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                  marginRight: '32px',
                }}
                onClick={() => setModalOpen(true)} // Set state to open the modal
              >
                Join our Family
              </Button>
            <Link href="/menu" passHref>
              <Button
                color="warning"
                size="lg"
                variant="bordered"
                style={{
                  fontFamily: 'Georgia',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                  borderWidth: '2px',
                }}
              >
                See Menu
              </Button>
              </Link>
            </div>
            {/* End of Buttons */}
          </div>
        </section>
        {/* End of Hero Section */}

        <div
          style={{
            height: '48px',
            backgroundColor: '#F5A524',
            width: '100%',
          }}
        ></div>

        {/* Space between sections */}
        <div style={{ height: '114px' }}></div>

        {/* Community Favorites Section */}
        <section
          style={{
            color: '#000',
            fontFamily: 'Georgia',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            marginLeft: '124px', // Add left margin
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Align items horizontally
            paddingRight: '124px', // Add right padding
          }}
        >
          Community Favorites
          <Link href="/menu" passHref>
          <Button
            color="warning"
            size="lg"
            variant='shadow'
            style={{
              fontFamily: 'Georgia',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              lineHeight: '24px',
            }}
          >
            Full Menu
          </Button>
          </Link>
        </section>
        {/* End of Community Favorites Section */}
        
        {/* Space between sections */}
        <div style={{ height: '20px' }}></div>

        {/* Cards Container */}
        <div
          style={{
            marginLeft: '124px', // Add left margin to match the title
            marginRight: '124px', // Add right margin to match the title
          }}
        >
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
            {list.map((item) => (
              <Card shadow="sm">
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b style={{ fontFamily: 'Georgia', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '24px' }}>{item.title}</b>
                  <p style={{ fontFamily: 'Georgia', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px' }}>{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        {/* End of Cards Container */}
        
        {/* Space between sections */}
        <div style={{ height: '114px' }}></div>

        {/* Family Section */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
          <img
            src="../images/family.png"
            alt="Family Image"
            style={{
              width: '50%',
              height: '613px',
              objectFit: 'cover',
            }}
          />

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
                fontWeight: 400,
                lineHeight: '53px',
                margin: '0',
              }}
            >
              Become Part of Our Family
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
              Join our rewards program today and receive a free drink on your next order. Hurry, this cozy welcome gift expires in just 7 days from sign-up. Start your journey to comfort now!
            </p>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link href="/join" passHref>
              <Button
                color="warning"
                size="lg"
                variant="solid"
                style={{
                  fontFamily: 'Georgia',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                }}
              >
                Join Our Family
              </Button>
              </Link>
            </div>
          </section>
        </div>
        {/* End of Family Section */}

        {/* Testimonial Section */}
        <section
          style={{
            marginTop: '70px', // Increased margin from the top
            backgroundColor: '#FFF',
            textAlign: 'center',
            fontFamily: 'Georgia',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '53px',
            color: '#000',
          }}
        >
          Warm Words from Our Beloved Customers
        </section>
        {/* End of Testimonial Section */}

        {/* Testimonial Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '65px', // Increased margin from the top for the first line of cards
          }}
        >
          {/* First Line of Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {testimonialData.slice(0, 2).map((item, index) => (
              <Card className="max-w-[400px]" key={index}>
                <CardHeader className="flex gap-3">
                  <Image
                    alt={item.name}
                    height={40}
                    radius="lg"
                    src={item.imageSrc}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p
                      style={{
                        fontFamily: 'Georgia',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '24px',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Georgia',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#666',
                      }}
                    >
                      {item.role}
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p
                    style={{
                      fontFamily: 'Georgia',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '24px',
                    }}
                  >
                    {item.content}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Space between sections */}
            <div style={{ height: '65px' }}></div>

          {/* Second Line of Cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {testimonialData.slice(2).map((item, index) => (
              <Card className="max-w-[400px]" key={index}>
                <CardHeader className="flex gap-3">
                  <Image
                    alt={item.name}
                    height={40}
                    radius="lg"
                    src={item.imageSrc}
                    width={40}
                  />
                  <div className="flex flex-col">
                    <p
                      style={{
                        fontFamily: 'Georgia',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 700, // Bold
                        lineHeight: '24px',
                      }}
                    >
                      {item.name}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Georgia',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '24px',
                        color: '#666',
                      }}
                    >
                      {item.role}
                    </p>
                  </div>
                </CardHeader>
                <CardBody>
                  <p
                    style={{
                      fontFamily: 'Georgia',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '24px',
                    }}
                  >
                    {item.content}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        {/* End of Testimonial Cards */}

        {/* Space between Testimonial Cards and Community Section */}
        <div style={{ height: '110px' }}></div>
        
        {/* Community Section */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
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
                fontWeight: 400,
                lineHeight: '53px',
                margin: '0',
              }}
            >
              Nurturing the Community
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
              At Cottage Comfort Café, we're committed to fostering meaningful initiatives that directly support and uplift the people in our community, reflecting the love and care we’ve received from every smiling face that walks through our doors.
            </p>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link href="/community" passHref>
              <Button
                color="warning"
                size="lg"
                variant="bordered"
                style={{
                  fontFamily: 'Georgia',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  lineHeight: '24px',
                }}
              >
                Learn More
              </Button>
              </Link>
            </div>
          </section>
          <img
            src="../images/community.png"
            alt="Family Image"
            style={{
              width: '50%',
              height: '613px',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* End of Community Section */}

        {/* Space between Community Section  and Hours and Location Section*/}
        <div style={{ height: '110px' }}></div>

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
                src="../images/map.png" 
                alt="Hours and Location"
                style={{
                  width: '100%', 
                  height: 'auto',
                }}
              />
              {/* Button */}
              <Link href="https://www.google.com/maps/place/Newark,+NJ/@40.7313841,-74.2646284,12z/data=!3m1!4b1!4m6!3m5!1s0x89c25370329a0e1d:0xe1bcdc2adcfee473!8m2!3d40.735657!4d-74.1723667!16zL20vMGhwdG0?entry=ttu" passHref>
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
              </Link>
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


      </main>

       {/* Include the Modal component */}
       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      <Footer />
    </div>
  );
}







