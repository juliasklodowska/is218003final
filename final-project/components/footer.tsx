import React from 'react';
import Link from 'next/link';
import { footerLinks, brandName } from '../config/footerConfig';
import { Divider } from '@nextui-org/react';

const Footer = () => {
  const navStyle = {
    color: '#FFF',
    fontFamily: 'Georgia',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
    textDecoration: 'none',
    marginLeft: '20px'
  };

  const brandStyle = {
    color: '#FFF',
    fontFamily: 'Georgia',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px'
  };

  const textStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: 'Georgia',
    fontSize: '16px',
    textDecoration: 'none' // To remove the default underline of links
  };

  return (
    <footer style={{ height: '227px', width: '100%', backgroundColor: '#312107', color: 'white', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '38px 150px 0 150px' }}>
        <h2 style={brandStyle}>{brandName}</h2>
        <nav>
          {footerLinks.map(link => (
            <Link key={link.text} href={link.href} style={navStyle}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
      <Divider style={{ width: '1065px', margin: '37px auto', height: '2px', backgroundColor: '#FFF' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '0 150px', marginTop: '38px' }}>
        <Link href="/privacy" style={{ ...textStyle, marginRight: '38px' }}>
          Privacy Policy
        </Link>
        <div style={textStyle}>© 2023 Comfort Cottage Café</div>
      </div>
    </footer>
  );
};

export default Footer;











