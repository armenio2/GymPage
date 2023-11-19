import React from 'react';
import { CarouselImageContainer, Image } from './CarouselStyles';

interface CarouselImageProps {
  src: string;
  larger?: boolean;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ src, larger }) => {
  return (
    <CarouselImageContainer larger={larger}>
      <Image src={src} alt="Carousel Image" />
    </CarouselImageContainer>
  );
};

export default CarouselImage;
