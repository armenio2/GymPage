import styled from 'styled-components';
import backgroundImage from '../../assets/background2.jpg'

export const Container = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  
`;

export const LeftColumnContainer = styled.div`
  flex: 1;
  padding: 60px;

  p{
    color: white;
   margin: 0px;
  }

  @media (max-width: 440px) {
    padding: 20px 0px 20px 20px;;
  }

`;

export const Who2 = styled.div`
font-size: 40px;
margin: 0px;
font-weight: bold;

@media (max-width: 440px) {
    p{
    font-size: 20px;
  }
`

export const Who1 = styled.div`
font-size: 20px;

@media (max-width: 440px) {
  p{
    font-size: 14px;
  }
`

export const RightColumnContainer = styled.div`
  flex: 1;
  padding: 60px;
  margin-top: 5vh;

  p{
    color: white;
  }

  @media (max-width: 800px) {
    margin-top: 0px;
  }
  
  @media (max-width: 440px) {
    margin-top: 0px;
    padding: 0px 20px;
  }
`;

export const Link = styled.a`
color: white;
text-decoration: none;
margin-left: 20px;
font-weight: bold;

`;

export const Sec2 = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;

  
`;

