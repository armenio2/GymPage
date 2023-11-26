import React from 'react';
import { LeftColumnContainer, Who1, Who2 } from './style.ts'
import {leftColumn} from '../../constants/constants'

const LeftColumn: React.FC = () => {
  return (
    <LeftColumnContainer>
      <Who1>
        <p>{leftColumn.p1.text}</p>
      </Who1>
      <Who2>
        <p>{leftColumn.p2.text}</p>
      </Who2>
    </LeftColumnContainer>
  );
};

export default LeftColumn;