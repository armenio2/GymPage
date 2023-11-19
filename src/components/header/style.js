import styled from 'styled-components';

export const NavbarContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 15px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const Logo = styled.div`

img {
    max-width: 150px;
  }
`;


export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
  }
`;
