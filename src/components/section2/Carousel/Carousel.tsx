import React from 'react';
import styled from 'styled-components';
import { carouselImg } from '../../../constants/constants'
import CarouselImage from './CarouselImage';
import { useMediaQuery } from 'react-responsive'


const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;


const Carousel: React.FC = () => {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

  return (
    <div>
      {isDesktopOrLaptop && (
        <>
          <CarouselContainer>
            <CarouselImage src={carouselImg.img1.src} />
            <CarouselImage src={carouselImg.img2.src} larger />
            <CarouselImage src={carouselImg.img3.src} />
            <CarouselImage src={carouselImg.img4.src} larger />
            <CarouselImage src={carouselImg.img5.src} />
            {/* Adicione mais imagens conforme necessário */}
          </CarouselContainer>
        </>
      )}

      {isTabletOrMobile && (
        <>
          <CarouselContainer>
            <CarouselImage src={carouselImg.img1.src} />
            <CarouselImage src={carouselImg.img2.src} larger />
          </CarouselContainer>
        </>
      )}
    </div>
  );
};

export default Carousel;
