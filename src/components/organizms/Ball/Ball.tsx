import React from 'react';
import styled from "styled-components";
import ball from './BallImg.png';

const BallDiv = styled.div`
  position: absolute;
  z-index: 10;
  width: 10px;
  height: 15px;
  background-image: url(${ball});
  animation: moveX 1s steps(3) infinite;

  @keyframes moveX{
    from{background-position-x:0;}
    to{background-position-x:-555px;}
  }
`;

const Ball: React.FC =() => {

    return (
        <BallDiv/>
    );
}

export default Ball;