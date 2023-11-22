import React from 'react';
import {RightColumnContainer, Link} from './style.ts'




const RightColumn: React.FC = () => {
  return (
    <RightColumnContainer>
      <p>Texto com muita felicidade e carinho da parte da direita esperando atualização.</p>
      <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Visite o Link
      </Link>
    </RightColumnContainer>
  );
};

export default RightColumn;