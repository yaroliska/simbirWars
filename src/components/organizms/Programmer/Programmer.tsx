import React from 'react';
import styled from "styled-components";
import background from './ProgrammerSprite.png';

const ProgrammerContainer = styled.div<{top:number, left: number}>`
  position: absolute;
  z-index: 10;
  width: 185px;
  height: 205px;
  background-image: url(${background});
  animation: moveX 1s steps(3) infinite;
  top: ${props => props.top};
  left: ${props => props.left};

  @keyframes moveX{
    from{background-position-x:0;}
    to{background-position-x:-555px;}
  }
`;

const Programmer: React.FC =() => {
    return (
        <ProgrammerContainer top={0} left={0}/>
    );
}

export default Programmer;