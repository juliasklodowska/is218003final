import {
	Button,
	Navbar as NextUINavbar,
	NavbarBrand,
  } from "@nextui-org/react";
  
  import { siteConfig } from "@/config/site";
  import NextLink from "next/link";
  import styles from '../styles/navbar.module.css';
  
  export const Navbar = () => {
	return (
	  <NextUINavbar maxWidth="xl" position="sticky" className="font-serif">
		{/* Brand Logo */}
		<div className="col-span-2 flex justify-start items-center">
		  <NextLink href="/" passHref>
			<NavbarBrand className="font-bold text-inherit">
			  Cottage Comfort Cafe
			</NavbarBrand>
		  </NextLink>
		</div>
  
		{/* Nav Items */}
		<div className="col-span-8 flex items-center">
        {siteConfig.navItems.map((item, index) => (
          <NextLink key={index} href={item.href} passHref>
            <span 
              className={`${styles.navbarItem} text-foreground font-medium cursor-pointer`}
              style={{ marginRight: index === siteConfig.navItems.length - 1 ? 0 : '51px' }}
            >
              {item.label}
            </span>
          </NextLink>
        ))}
      </div>
  
		{/* Join Now Button */}
		<div className="col-span-2 flex justify-end items-center">
		  <NextLink href="/signup" passHref>
			<Button size="lg" variant="shadow" color="warning">
			  Join Now
			</Button>
		  </NextLink>
		</div>
	  </NextUINavbar>
	);
  };
  
  
  
  
  
  
  
  
