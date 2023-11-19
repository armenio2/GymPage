import React from 'react';
import LeftColumn from './LeftColumn.tsx';
import RightColumn from './RightColumn.tsx';
import {Container, Sec2} from './style.ts'
import Carousel from './Carousel/Carousel.tsx'


const Section2 = () => {
  return (
    <Sec2>
      <Container>
        <LeftColumn />
        <RightColumn />
      </Container>
      <Carousel />
    </Sec2>
  );
};

export default Section2;