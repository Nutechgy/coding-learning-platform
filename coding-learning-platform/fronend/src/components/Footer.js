// Footer.js

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterContent = styled.div`
  p {
    margin: 0;
  }
`;

const FooterSocial = styled.div`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }

  ul li {
    margin-right: 10px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  ul li a:hover {
    color: #ffa500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>Contact Us:</p>
        <ul>
          <li>Email: info@example.com</li>
          <li>Phone: 123-456-7890</li>
        </ul>
      </FooterContent>
      <FooterSocial>
        <p>Follow Us:</p>
        <ul>
          <li><a href="https://twitter.com/example">Twitter</a></li>
          <li><a href="https://facebook.com/example">Facebook</a></li>
          <li><a href="https://instagram.com/example">Instagram</a></li>
        </ul>
      </FooterSocial>
    </FooterContainer>
  );
}

export default Footer;
