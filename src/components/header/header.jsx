import React from 'react';
import {
  NavbarContainer,
  Logo,
  NavLinks,
} from './style';
import ImagemLogo from '../../assets/logo.webp'
import {headerTexts} from '../../constants/constants'

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo>
          <img src= {ImagemLogo} alt="Logo" />
        </Logo>
        <NavLinks>
        <a href={headerTexts.link1.path}>{headerTexts.link1.text}</a>
        <a href={headerTexts.link2.path}>{headerTexts.link2.text}</a>
        <a href={headerTexts.link3.path}>{headerTexts.link3.text}</a>
        <a href={headerTexts.link4.path}>{headerTexts.link4.text}</a>
      </NavLinks>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
