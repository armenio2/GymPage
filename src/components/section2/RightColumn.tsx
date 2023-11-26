import React from 'react';
import {RightColumnContainer, Link} from './style.ts'
import {rightColumn} from '../../constants/constants'



const RightColumn: React.FC = () => {
  return (
    <RightColumnContainer>
      <p>{rightColumn.p1.text}</p>
      <Link href={rightColumn.link1.path} target="_blank" rel="noopener noreferrer">
        {rightColumn.link1.text}
      </Link>
    </RightColumnContainer>
  );
};

export default RightColumn;