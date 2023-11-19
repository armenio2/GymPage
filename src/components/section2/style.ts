import styled from 'styled-components';
import backgroundImage from '../../assets/background2.jpg'

export const Container = styled.div`
  display: flex;
  height: 40vh;
`;

export const LeftColumnContainer = styled.div`
  flex: 1;
  padding: 20px;

  p{
    color: white;
  }
`;

export const RightColumnContainer = styled.div`
  flex: 1;
  padding: 20px;

  p{
    color: white;
  }
`;

export const Link = styled.a`
  color: white;
  text-decoration: none;

`;

export const Sec2 = styled.body`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

