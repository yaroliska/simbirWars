import React, {useEffect, useMemo} from 'react';
import styled from "styled-components";
import background from './Typo.png';
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const TypoContainer = styled.div<{top:number, left: number, size: number}>`
  position: absolute;
  z-index: 1; //TODO зависит от номера строки где появляется
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${background});
  background-size: cover;
  animation: moveX 1s steps(6) infinite;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  pointer-events:none;

  @keyframes moveX{
    from{background-position-x:0;}
    to{background-position-x:-${props => (props.size*6)}px;}
  }
`;

type ProgrammerProps = {
    x?: number,
    y?: number,
}

const Typo: React.FC<ProgrammerProps> =() => {
    const size = useSelector((state: RootState) => state.sizes.sizeOfCell);

    // const coordinates = useMemo(()=> {
    //     return {
    //         left: x-size/2-size/10,
    //         top: y-size/2-size/10,
    //     }
    // }, [size]);

    return (
        <TypoContainer top={0} left={0} size={size}/>
    );
}

export default Typo;