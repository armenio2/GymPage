import React from 'react';
import {LeftColumnContainer} from './style.ts'


const LeftColumn: React.FC = () => {
  return (
    <LeftColumnContainer>
      <p>Texto na Coluna Esquerda</p>
      <p>Este é um exemplo de texto na coluna esquerda.</p>
    </LeftColumnContainer>
  );
};

export default LeftColumn;