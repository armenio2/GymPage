import React from 'react';
import {
  ContentLeft,
  ContentRight,
  ContentWrapper,
  Body,
  Selo,
  Titulo1
} from './style';
import Header from '../header/header'
import ImgSelo from '../../assets/selo.webp'

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
              <p>Desbravando o Universo da Musculação</p>
              </Titulo1>
              <p>No reino da busca incessante pela força e estética, 
                a musculação emerge como uma disciplina que vai muito além de levantar pesos. 
                É um compromisso diário com a superação pessoal, 
                um elo entre mente e corpo que se fortalece a cada repetição.</p>
            </div>
            <div>
              <a href="#">Descubra Mais</a>
            </div>
          </ContentLeft>
          {/* Conteúdos à direita */}
          <ContentRight>
            <Selo>
            <img src= {ImgSelo} alt="Selo" />
            </Selo>
            <div>
              <p>Conteúdo à Direita 1</p>
              <p>Descrição do Conteúdo à Direita 1.</p>
            </div>
            <div>
              <p>Conteúdo à Direita 2</p>
              <p>Descrição do Conteúdo à Direita 2.</p>
            </div>
          </ContentRight>
        </ContentWrapper>
      </>
    </Body>
  );
};

export default Navbar;
