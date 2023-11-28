import React from 'react';
import {
  ContentLeft,
  ContentRight,
  ContentWrapper,
  Body,
  Selo,
  Titulo1,
  Text,
  Bola,
  FontBig,
  FontSmall,
} from './style';
import Header from '../header/header'
import { welcomeTexts } from '../../constants/constants'

const Navbar = () => {
  return (
    <Body>
      <>
        <Header />
        <ContentWrapper>
          {/* Conteúdo à esquerda */}
          <ContentLeft>
            <div>
              <Titulo1>
                <p>{welcomeTexts.p1.text}</p>
              </Titulo1>
              <p>{welcomeTexts.p2.text}</p>
              <br></br>
            </div>
            <div>
              <a href={welcomeTexts.link1.path}>{welcomeTexts.link1.text}</a>
            </div>
          </ContentLeft>
          {/* Conteúdos à direita */}
          <ContentRight>
            <Selo>
              <img src={welcomeTexts.selo.src} alt={welcomeTexts.selo.alt} />
            </Selo>
            <Text>
              <Bola>
                <div>
                  <FontBig>
                    <p>{welcomeTexts.p3.text}</p>
                  </FontBig>
                  <FontSmall>
                    <p>{welcomeTexts.p4.text}</p>
                  </FontSmall>
                </div>
                <div>
                  <FontBig>
                    <p>{welcomeTexts.p5.text}</p>
                  </FontBig>
                  <FontSmall>
                    <p>{welcomeTexts.p6.text}</p>
                  </FontSmall>
                </div>
              </Bola>
            </Text>
          </ContentRight>
        </ContentWrapper>
      </>
    </Body>
  );
};

export default Navbar;
