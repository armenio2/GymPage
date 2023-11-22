import React from 'react';
import { LeftColumnContainer, Who1, Who2 } from './style.ts'


const LeftColumn: React.FC = () => {
  return (
    <LeftColumnContainer>
      <Who1>
        <p>Quem somos nós?</p>
      </Who1>
      <Who2>
        <p>Somos uma academia dedicada ao bem-estar e condicionamento físico.</p>
      </Who2>
    </LeftColumnContainer>
  );
};

export default LeftColumn;