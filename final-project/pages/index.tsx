import DefaultLayout from "@/layouts/default";
import style from "../styles/index.module.css";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function IndexPage() {
  
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
              <button className="bg-warning text-black font-bold py-3 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia' }}>
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
            <h2 className={style.sectionTitle} style={{ color: '#000', fontFamily: 'Georgia', fontSize: '26px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px' }}>
              Community Favorites
            </h2>
            <button className="bg-warning text-black font-bold py-3 px-4 rounded-lg shadow-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia' }}>
              Full Menu
            </button>
          </div>

          <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-full">
            {list.map((item, index) => (
              <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0" style={{ fontFamily: 'Georgia, serif' }}>
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="w-full object-cover h-[140px]"
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between" style={{ fontFamily: 'Georgia, serif' }}>
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
            
             {/* Spacer after cards */}
      <div style={{ height: '114px', width: '100%' }}></div>

{/* New Rectangle Section with Image and Text */}
      <div className={style.rectangleSection}>
              <div className={style.rectangleImage}>
                <img src="../images/coffee.png" alt="Coffee" />
              </div>
              <div className={style.rectangleTextContainer}>
                <h1 className={style.rectangleTitle}>Become Part of Our Family</h1>
                <h4 className={style.rectangleSubtitle}>
                  Sign up for our rewards program now, and enjoy a free drink with your next order. This warm welcome offer is valid starting 7 days after your sign-up. Let the countdown to comfort begin!
                </h4>
                <button className="bg-warning text-black font-bold py-3 px-4 rounded-lg text-lg" style={{ fontSize: 'lg', fontFamily: 'Georgia', marginTop: '20px' }}>
                  Join our Family
                </button>
              </div>
            </div>

      </section>
    </DefaultLayout>
  );
}




