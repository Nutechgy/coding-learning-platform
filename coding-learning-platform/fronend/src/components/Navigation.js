// Navigation.js

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  ul li {
    margin-right: 20px;
  }

  ul li:last-child {
    margin-right: 0;
  }

  ul li a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  ul li a:hover {
    color: #ffa500;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </Nav>
  );
}

export default Navigation;
