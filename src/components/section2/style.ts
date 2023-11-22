import styled from 'styled-components';
import backgroundImage from '../../assets/background2.jpg'

export const Container = styled.div`
  display: flex;
  height: 30vh;
`;

export const LeftColumnContainer = styled.div`
  flex: 1;
  padding: 60px;

  p{
    color: white;
   margin: 0px;
  }
`;

export const Who2 = styled.div`
font-size: 40px;
margin: 0px;
font-weight: bold;
`

export const Who1 = styled.div`
font-size: 20px;
`

export const RightColumnContainer = styled.div`
  flex: 1;
  padding: 60px;
  margin-top: 5vh;

  p{
    color: white;
  }
`;

export const Link = styled.a`
color: white;
text-decoration: none;
margin-left: 20px;
font-weight: bold;

`;

export const Sec2 = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 80vh;
`;

