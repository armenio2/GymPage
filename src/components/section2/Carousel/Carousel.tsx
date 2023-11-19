import React from 'react';
import styled from 'styled-components';
import CarouselImage from './CarouselImage';
import Image1 from '../../../assets/imagem1.avif';
import Image2 from '../../../assets/imagem2.jpg';
import Image3 from '../../../assets/imagem3.avif';
import Image4 from '../../../assets/imagem4.jpg';
import Image5 from '../../../assets/imagem5.jpg';

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <CarouselImage src={Image1} />
      <CarouselImage src={Image2} larger />
      <CarouselImage src={Image3} />
      <CarouselImage src={Image4} larger/>
      <CarouselImage src={Image5} />
      {/* Adicione mais imagens conforme necessário */}
    </CarouselContainer>
  );
};

export default Carousel;
