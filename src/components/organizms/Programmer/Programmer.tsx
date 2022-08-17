import React, {useEffect, useMemo} from 'react';
import styled from "styled-components";
import background from './ProgrammerSprite.png';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const ProgrammerContainer = styled.div<{top:number, left: number, size: number}>`
  position: absolute;
  z-index: 10;
  width: ${props => props.size-1}px;
  height: ${props =>Math.ceil(props.size/185*206)}px;
  background-image: url(${background});
  background-size: cover;
  animation: moveProgrammer 1s steps(3) infinite;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  pointer-events:none;

  @keyframes moveProgrammer{
    from{background-position-x:0;}
    to{background-position-x:-${props => (props.size*3)}px;}
    //to{background-position-x:-555px;}
  }
`;

type ProgrammerProps = {
    x: number,
    y: number,
}

const Programmer: React.FC<ProgrammerProps> =({x, y}) => {
    debugger;
    console.log('programmer');
    const size = useSelector((state: RootState) => state.sizes.sizeOfCell);

    useEffect(()=> {
        console.log(size);
    }, [size])

    const coordinates = useMemo(()=> {
        return {
            left: x-size/2-size/10,
            top: y-size/2-size/10,
        }
    }, [size]);

    return (
        <ProgrammerContainer top={coordinates.top} left={coordinates.left} size={Math.ceil(size+10)}/>
    );
}

export default Programmer;