import React from 'react';
import styled from 'styled-components';
import {carouselImg} from '../../../constants/constants'
import CarouselImage from './CarouselImage';


const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const Carousel: React.FC = () => {
  return (
    <CarouselContainer>
      <CarouselImage src={carouselImg.img1.src} />
      <CarouselImage src={carouselImg.img2.src} larger />
      <CarouselImage src={carouselImg.img3.src} />
      <CarouselImage src={carouselImg.img4.src} larger/>
      <CarouselImage src={carouselImg.img5.src} />
      {/* Adicione mais imagens conforme necessário */}
    </CarouselContainer>
  );
};

export default Carousel;
