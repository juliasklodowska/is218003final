import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components/navbar'; 
import Footer from '../components/footer'; 
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const FullMenuPage = () => {
    const menuItems = [
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
        {
            title: "Vanilla Velvet Latte",
            img: "../images/vanilla.png",
            price: "$4.50",
        },
        {
            title: "Tranquil Trail Macchiato",
            img: "../images/macchiato.png",
            price: "$6.50",
        },
        {
            title: "Cozy Cabin Chai Latte",
            img: "../images/chai.png",
            price: "$3.75",
        },
        {
            title: "Cloud Comfort White Mocha",
            img: "../images/white.png",
            price: "$5.50",
        },
    ];

    return (
        <div>
            <Head>
                <title>Full Menu</title>
                <meta name="description" content="The Cottage Comfort Café Full Menu page offers a delectable array of culinary delights to satisfy every palate, providing a delightful dining experience for all" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <h1
                style={{
                    color: '#000',
                    textAlign: 'center',
                    fontFamily: 'Georgia',
                    fontSize: '42px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '53px',
                    marginTop: '72px', 
                }}
            >
                Full Menu
            </h1>

            <h2
                style={{
                    color: '#000',
                    fontFamily: 'Georgia',
                    fontSize: '26px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '24px',
                    paddingLeft: '124px', 
                    marginTop: '64px', 
                }}
            >
                Specialty Drinks
            </h2>

            <div
                className="gap-2 grid grid-cols-2 sm:grid-cols-4"
                style={{
                    marginTop: '40px', 
                    marginLeft: '124px',
                    marginRight: '124px'
                }}
            >
                {menuItems.map((item) => (
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
                            <b
                                style={{
                                    fontFamily: 'Georgia',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                }}
                            >
                                {item.title}
                            </b>
                            <p
                                className="text-default-500"
                                style={{
                                    fontFamily: 'Georgia',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '24px',
                                }}
                            >
                                {item.price}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* Space between sections */}
            <div style={{ height: '75px' }}></div>

            {/* Regular Menu */}
<h2
    style={{
        color: '#000',
        fontFamily: 'Georgia',
        fontSize: '26px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '24px',
        paddingLeft: '124px', 
        marginTop: '64px', 
    }}
>
    Regular Menu
</h2>

<div
    style={{
        display: 'flex',
        justifyContent: 'space-between', // Add space between the two containers
    }}
>
    {/* Menu Section */}
    <div
        style={{
            width: '699px',
            height: '720px',
            borderRadius: '14px',
            backgroundColor: '#312107',
            marginLeft: '124px',
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '30px 40px', 
        }}
    >
        {/* Menu Section */}

        {/* Section: Coffee */}
        <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px', 
            }}
        >
            Coffee
        </div>
        <div
            style={{
                width: '619px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '10px',
            }}
        ></div>
        {/* Additional Text for Coffee */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Brewed Coffee................................................................................................................2.50
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
                marginBottom: '20px'
            }}
        >
            Cafe Au Lait....................................................................................................................2.75
        </div>
        {/* End of Additional Text for Coffee */}
        
        {/* Section: Espresso */}
        <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px',
            }}
        >
            Espresso
        </div>
        <div
            style={{
                width: '619px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '10px', 
            }}
        ></div>
        {/* Additional Text for Espresso */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Espresso.........................................................................................................................3.25
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Latte...............................................................................................................................4.50
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Americano......................................................................................................................3.25
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Cappuccino....................................................................................................................3.50
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Macchiato.......................................................................................................................5.65
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Mocha.............................................................................................................................4.25
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
                marginBottom: '20px'
            }}
        >
            White Mocha.................................................................................................................6.00
        </div>
        {/* End of Additional Text for Espresso */}
        
        {/* Section: Tea */}
        <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px', 
            }}
        >
            Tea
        </div>
        <div
            style={{
                width: '619px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '10px',
            }}
        ></div>
        {/* Additional Text for Tea */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Matcha...........................................................................................................................6.00
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Chai................................................................................................................................4.50
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Black Tea........................................................................................................................1.50
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
                marginBottom: '20px'
            }}
        >
            Green Tea......................................................................................................................2.00
        </div>
        {/* End of Additional Text for Tea */}
        
        {/* Section: More */}
        <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px', 
            }}
        >
            More
        </div>
        <div
            style={{
                width: '619px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '20px', 
            }}
        ></div>
        {/* Additional Text for More */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Hot Chocolate................................................................................................................3.00
        {/* End of Additional Text for More */}
    </div>
    </div>

    {/* Milk and Syrup Section */}
    <div
        style={{
            width: '400px',
            height: '460px',
            borderRadius: '14px',
            backgroundColor: '#312107',
            marginRight: '124px',
            marginTop: '50px',
            padding: '30px', 
        }}
    >
        {/* Milk Section */}
        <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px', 
            }}
        >
            Milk Options
        </div>
        <div
            style={{
                width: '340px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '20px', 
            }}
        ></div>
        {/* Additional Text for Milk */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Whole Milk
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Skim Milk
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Oat Milk
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Almond Milk
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
                marginBottom: '20px'
            }}
        >
            Cream
        </div>
        {/* End of Milk Section */}

         {/* Syrup Section */}
         <div
            style={{
                color: '#F5A524',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '24px',
                marginBottom: '4px', 
            }}
        >
            Syrup Options
        </div>
        <div
            style={{
                width: '340px',
                height: '1px',
                backgroundColor: '#F5A524',
                marginBottom: '20px', 
            }}
        ></div>
        {/* Additional Text for Syrup */}
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Caramel
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Vanilla
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Hazelnut
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            Mocha
        </div>
        <div
            style={{
                color: '#FFF',
                fontFamily: 'Georgia',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '24px',
                marginTop: '5px', 
            }}
        >
            White Chocolate Mocha
        </div>
    {/* End of Additional Text for Syrup */}
    </div>
</div>

        {/* Space between sections */}
        <div style={{ height: '110px' }}></div>

<Footer />

        </div>
    );
};

export default FullMenuPage;






