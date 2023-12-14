import { useRouter } from 'next/router';
import {
  Button,
  Navbar as NextUINavbar,
  NavbarBrand,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import ModalComponent from "./modal"; // Import the modal component
import React, { useState } from 'react'; // Import React and useState

export const Navbar = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to determine if the nav item is the current page
  const isCurrentPage = (href: string) => router.pathname === href;

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
              className={`text-foreground hover:text-primary font-medium cursor-pointer ${isCurrentPage(item.href) ? 'underline' : ''}`}
              style={{ marginRight: index === siteConfig.navItems.length - 1 ? 0 : '51px' }}
            >
              {item.label}
            </span>
          </NextLink>
        ))}
      </div>

      {/* Join Now Button */}
      <div className="col-span-2 flex justify-end items-center">
        <Button size="lg" variant="shadow" color="warning" onClick={openModal}>
          Join Now
        </Button>
      </div>

      {/* Render the modal component */}
      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
    </NextUINavbar>
  );
};
