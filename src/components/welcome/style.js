import styled from 'styled-components';
import backgroundImage from '../../assets/background2.jpg'

export const Body = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;


  @media (min-width: 1280px) {
    height: 100vh;
  }

`;

export const ContentWrapper = styled.div`
  
  display: flex;
  

  @media (max-width: 440px) {
    margin: 0px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0px;
    p{
      font-size:24px;
    }
  }
  @media (max-width: 1300px) {
       p{
      font-size:16px;
    }
  }

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
    margin-left: 10vh
    height: 100vh;
    width: 100vw;
    padding: 0px 16px;

    a{
      margin-left: 0px;
    }
  }

  @media (max-width: 440px) {
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0 16px;
    p{
      font-size: 18px;
    }
    a{
      margin-left: 0px;
    }
  
  }

  
  
`;

export const Titulo1 = styled.div`
  p{
    font-weight: bold;
    font-size: 48px;
  }

  @media (max-width: 1366px) {
    p{
      font-size:24px;
    }
  
  }
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 20px;
  width: 30vw;
  border-radius: 8px;
  text-align: center;
  color: white;
  justify-content: center;


  @media (max-width: 800px) {
    width: 100vw;
    height: 100vh;
    margin-top: 0px;
    padding: 0px;
    
    align-items: center;
    p{
      font-size: 14px;
      font-weight: bold;
    }
    img{
      display: none;
    }
 `;

export const Selo = styled.div`
  text-align-last: center;
  img {
    max-width: 150px;
  }
`;

export const Bola = styled.div`
@media (max-width: 800px) {
  width: 300px; /* Ajuste conforme necessário */
  height: 300px; /* Ajuste conforme necessário */
  border-radius: 100%;
  background-color: orange;
  border: 1px solid #ff4500;
  align-items: center;
  padding: 0px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
  }
`

export const FontBig = styled.div`
p{
  font-size: 64px;
  margin: 0px;
}
`

export const FontSmall = styled.div`
p{
  font-size: 30px;
  margin-top: 0px;
}
`


export const Text = styled.div`

`