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

  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 0px;
  
  }
`;

export const Logo = styled.div`

img {
    max-width: 150px;
  }

  @media (max-width: 800px) {
    max-height: 120px;
  
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

