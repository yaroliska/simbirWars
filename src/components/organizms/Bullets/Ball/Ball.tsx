import React from 'react';
import styled from "styled-components";
import ball from './Balls.png'

const BallDiv = styled.div`
  position: absolute;
  z-index: 10;
  width: 50px;
  height: 50px;
  background-image: url(${ball});
  background-size: cover;
`;

const Ball: React.FC =() => {

    return (
        <BallDiv/>
    );
}

export default Ball;