import React from "react";
import { Card, CardHeader, CardBody, Image, CardFooter } from "@nextui-org/react"; // Ensure all these components are imported correctly
import DefaultLayout from "@/layouts/default";
import style from "../styles/index.module.css";

interface CustomerTestimonialProps {
  name: string;
  imageSrc: string;
  testimonial: string;
}

function CustomerTestimonial({ name, imageSrc, testimonial }: CustomerTestimonialProps) {
  return (
    <Card className="max-w-[400px] mb-4">
      <CardHeader className="flex gap-3 items-center">
        <Image
          alt={name}
          height={40}
          radius="full"
          src={imageSrc}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md" style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>{name}</p>
          <p className="text-small text-default-500" style={{ fontFamily: 'Georgia, serif' }}>Loyal Customer</p>
        </div>
      </CardHeader>
      <CardBody style={{ fontFamily: 'Georgia, serif', paddingBottom: '30px', paddingLeft: '30px', paddingRight: '24px' }}>
        <p>{testimonial}</p>
      </CardBody>
    </Card>
  );
}

export default function IndexPage() {
  const list = [
    {
      title: "Nurture Nut<br />Latte",
      img: "../images/latte.png",
      price: "$4.50",
    },
    {
      title: "Garden Hug<br />Matcha",
      img: "../images/matcha.png",
      price: "$6.50",
    },
    {
      title: "Compassion<br />Cappuccino",
      img: "../images/cappuccino.png",
      price: "$3.75",
    },
    {
      title: "Meadow Mint<br />Mocha",
      img: "../images/mocha.png",
      price: "$5.50",
    }
  ];

  return (
    <DefaultLayout>
      <section className="flex flex-col justify-center items-center py-8 md:py-10">
        <div style={{ backgroundColor: '#F5A524', height: '48px', width: '100%' }} />
        
        <div className="flex justify-center items-center w-full relative" style={{ backgroundColor: '#312107', height: '565px' }}>
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img src="../images/hero_image.png" alt="Descriptive Image Text" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="text-center z-10">
            <h1 className={style.title}>Welcome to Cottage Comfort Café</h1>
            <h4 className={style.subtitle}>Where Every Sip Feels Like Home</h4>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
              <button className="bg-warning text-black py-3 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia' }}>
                Join our Family
              </button>
              <button className="border-4 border-warning text-warning font-bold py-2 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia' }}>
                See Menu
              </button>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#F5A524', height: '48px', width: '100%' }} />
        <div style={{ height: '113px', width: '100%' }}></div>

        <section className="w-full flex flex-col justify-between items-center" style={{ padding: '0 124px' }}>
          <div className="w-full flex justify-between items-center mb-6">
            {/* Title */}
            <h2 style={{
              color: '#000',
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontSize: '26px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px'
            }}>
              Community Favorites
            </h2>

            {/* Button */}
            <button style={{
              backgroundColor: '#F5A524', 
              color: 'black',
              fontFamily: 'Georgia, "Times New Roman", Times, serif',
              fontSize: 'large',
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
            }}>
              Full Menu
            </button>
          </div>

           {/* Cards Grid */}
          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
            {list.map((item, index) => (
              <Card shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title.replace('<br />', ' ')}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between" style={{
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                lineHeight: '24px'
              }}>
                <div dangerouslySetInnerHTML={{ __html: `<span style="font-weight: 700;">${item.title}</span>` }} />
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        </section>
            
        <div style={{ height: '114px', width: '100%' }}></div>

        <div className={style.rectangleSection}>
                <div className={style.rectangleImage}>
                  <img src="../images/family.png" alt="Coffee" />
                </div>
                <div className={style.rectangleTextContainer}>
                  <h1 className={style.rectangleTitle}>Become Part of Our Family</h1>
                  <h4 className={style.rectangleSubtitle}>
                    Sign up for our rewards program now, and enjoy a free drink with your next order. This warm welcome offer is valid starting 7 days after your sign-up. Let the countdown to comfort begin!
                  </h4>
                  <button className="bg-warning text-black py-3 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia', marginTop: '20px' }}>
                    Join our Family
                  </button>
                </div>
              </div>
            
      {/* Customer Testimonials Section */}
        <div style={{ height: '151px', width: '100%' }}></div>
        <section className={style.customerTestimonials}>
          <h2 className={style.testimonialsTitle}>Warm Words from Our Beloved Customers</h2>

          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-4" style={{ marginBottom: '45px', marginTop: '73px' }}>
              <CustomerTestimonial
                name="Maya Singh"
                imageSrc="../images/maya.png"
                testimonial="“Cottage Comfort Café feels like a warm hug, with its cozy charm and friendly staff making every visit special.”"
              />
              <CustomerTestimonial
                name="Oliver Smith"
                imageSrc="../images/oliver.png"
                testimonial="“More than just great coffee, Cottage Comfort Café is where our community comes together, like a big, happy family.”"
              />
            </div>
            <div className="flex justify-center">
              <CustomerTestimonial
                name="Elena Perez"
                imageSrc="../images/elena.png"
                testimonial="“Every visit to Cottage Comfort Café is a lovely experience, filled with care, comfort, and the perfect latte.”"
              />
            </div>
          </div>
      </section>

      {/* Spacer between testimonials and new section */}
      <div style={{ height: '110px', width: '100%' }}></div>
      <div className={style.communitySection}>
        <div className={style.communityImageContainer}>
          <img src="../images/community.png" alt="Coffee" />
        </div>
        <div className={style.communityTextContainer}>
          <h1 className={style.rectangleTitle}>Nurturing the Community</h1>
          <h4 className={style.rectangleSubtitle}>
          At Cottage Comfort Café, we're committed to fostering meaningful initiatives that directly support and uplift the people in our community, reflecting the love and care we’ve received from every smiling face that walks through our doors.
          </h4>
          <button className="border-4 border-warning text-warning font-bold py-2 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia' }}>
            Learn More
          </button>
        </div>
      </div>

      <section className={style.hoursLocationSection}>
        <h2 className={style.sectionTitle}>Hours and Location</h2>

        <div className={style.infoContainer}>
          <div className={style.sectionImage}>
            <img src="../images/map.png" alt="Descriptive Alt Text" />
          </div>

          <div className={style.textContainer}>
            <div className={style.locationInfo}>
              <h3 className={style.subHeading}>Location</h3>
              <p>Cottage Comfort Café</p>
              <p>123 Main Street</p>
              <p>Newark, NJ 07102</p>
              <p>123-456-7890</p>
            </div>

            <div className={style.hoursInfo}>
              <h3 className={style.subHeading}>Hours</h3>
              <p>Monday: 7:00am - 7:00pm</p>
              <p>Tuesday: 7:00am - 7:00pm</p>
              <p>Wednesday: 7:00am - 7:00pm</p>
              <p>Thursday: 7:00am - 7:00pm</p>
              <p>Friday: 7:00am - 7:00pm</p>
              <p>Saturday: 6:00am - 6:00pm</p>
              <p>Sunday: 6:00am - 3:00pm</p>
            </div>
          </div>
        </div>
      </section>
      

            
      </section>
    </DefaultLayout>
  );
}




