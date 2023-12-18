// footerConfig.ts

export type FooterLink = {
    text: string;
    href: string;
  };
  
  export const footerLinks: FooterLink[] = [
    {
      text: "Home",
      href: "http://localhost:3000/" 
    },
    {
      text: "Community",
      href: "/community"  
    },
    {
      text: "Hours and Location",
      href: "/hours" 
    },
    {
      text: "Full Menu",
      href: "/menu" 
    },
    {
      text: "Join Our Family",
      href: "http://eepurl.com/iF-z02" 
    }
  ];
  
  export const brandName = "Cottage Comfort Cafe";
  