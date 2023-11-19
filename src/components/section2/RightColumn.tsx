import React from 'react';
import {RightColumnContainer, Link} from './style.ts'



const RightColumn: React.FC = () => {
  return (
    <RightColumnContainer>
      <p>Texto e Link na Coluna Direita</p>
      <p>Texto explicativo sobre o link.</p>
      <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Visite o Link
      </Link>
    </RightColumnContainer>
  );
};

export default RightColumn;