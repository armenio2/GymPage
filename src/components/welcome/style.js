import styled from 'styled-components';
import backgroundImage2 from '../../assets/background1.avif'
import backgroundImage from '../../assets/background2.jpg'

export const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
`

export const ContentLeft = styled.div`
  width: 75vw;
  padding: 20px;
  border-radius: 8px;
  margin-top: 80px;
  text-align: left;
  color: white;


  p{
    font-size: 20px;
    width: 80%;
  }
  a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    p{
      font-size: 14px;
    }
  
  }
`;

export const Titulo1 = styled.div`
  p{
    font-weight: bold;
    font-size: 48px;
  }

  @media (max-width: 800px) {
    p{
      font-size:24px;
    }
  
  }
`

export const ContentRight = styled.div`
  margin-top: 140px;
  padding: 20px;
  width: 25vw;
  border-radius: 8px;
  text-align: center;
  color: white;

  @media (max-width: 800px) {
    margin-top: 80px;

    p{
      font-size: 14px;
    }
 `;

export const Selo = styled.div`
  text-align-last: center;
  img {
    max-width: 150px;
  }
`;

export const Text = styled.div`

`